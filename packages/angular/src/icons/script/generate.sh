#!/bin/bash

# Define input and output directories
INPUT_DIR="./src/icons/originals"
OUTPUT_DIR="./src/icons/"
TEMPLATE_FILE="./src/icons/script/template.component.tmpl"
INDEX_FILE="./src/icons/index.ts"

# Ensure the output directory exists
mkdir -p "$OUTPUT_DIR"

# Function to convert a string to PascalCase
to_pascal_case() {
  local result=""
  local capitalize_next=1
  local word="$1"

  for ((i = 0; i < ${#word}; i++)); do
    char="${word:$i:1}"
    if [[ "$char" == "-" || "$char" == "_" ]]; then
      capitalize_next=1
    else
      if ((capitalize_next)); then
        result+="$(echo "$char" | tr '[:lower:]' '[:upper:]')"
        capitalize_next=0
      else
        result+="$char"
      fi
    fi
  done

  echo "$result"
}

# Function to convert a string to lowercase
to_lowercase() {
  echo "$1" | tr '[:upper:]' '[:lower:]'
}

# Clear the index file before appending new entries
>"$INDEX_FILE"

# Iterate over each SVG file in the input directory
for svg_file in "$INPUT_DIR"/*.svg; do
  # Extract the base name without extension
  base_name=$(basename "$svg_file" .svg)

  # Read the SVG content
  svg_content=$(<"$svg_file")

  # Transform the base name to different casings
  name_lowercase=$(to_lowercase "$base_name")
  name_pascalcase=$(to_pascal_case "$base_name")

  # Define the output file path
  output_file="$OUTPUT_DIR/$name_lowercase.component.ts"

  # Escape special characters in SVG content for sed, removing newlines
  escaped_svg_content=$(echo "$svg_content" | sed -e ':a' -e 'N' -e '$!ba' -e 's/\n//g' -e 's/\\/\\\\/g' -e 's/&/\\&/g')

  # Generate the component file using the template
  {
    sed -e "s/__name--lowercase__/$name_lowercase/g" \
      -e "s/__name--pascalcase__/$name_pascalcase/g" \
      -e "s|__svg__|$escaped_svg_content|g" \
      "$TEMPLATE_FILE"
  } >"$output_file"

  echo "Generated component: $output_file"

  # Append export statement to the index file
  echo "export * from './$name_lowercase.component';" >>"$INDEX_FILE"
done
