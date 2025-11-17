import { Button } from "@/components/button/button";
import { DropdownMenuGroup } from "@/components/dropdown/dropdown";
import { Input } from "@/components/input/input";
import {
  MegaMenu,
  MegaMenuContent,
  MegaMenuItem,
  MegaMenuLink,
  MegaMenuList,
  MegaMenuListItem,
  MegaMenuTrigger,
} from "@/features/website/components/mega-menu/mega-menu";
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarDropdown,
  NavbarDropdownContent,
  NavbarDropdownLink,
  NavbarDropdownTrigger,
  NavbarItems,
  NavbarLink,
  NavbarLogo,
} from "@/features/website/components/navbar/navbar";
import {
  NavbarMobile,
  NavbarMobileActions,
  NavbarMobileClose,
  NavbarMobileContent,
  NavbarMobileDropdownGroup,
  NavbarMobileDropdownLabel,
  NavbarMobileDropdownLink,
  NavbarMobileGroup,
  NavbarMobileHeader,
  NavbarMobileItems,
  NavbarMobileLink,
  NavbarMobileLogo,
  NavbarMobileTrigger,
} from "@/features/website/components/navbar/navbar-mobile";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { MenuIcon } from "lucide-react";
import { SVGAttributes } from "react";

export default {
  title: "Features/Website/Components/Navbar",
  component: Navbar,
  argTypes: {
    "aria-label": {
      control: "text",
      description: "Accessible label for the navigation element",
    },
  },
  args: {},
} satisfies Meta<typeof Navbar>;

const navigation = [
  { name: "Link One", href: "#" },
  { name: "Link Two", href: "#" },
  {
    name: "Dropdown Three",
    dropdown: true,
    dropdownItems: [
      {
        name: "Item #1",
        href: "#",
      },
      {
        name: "Item #2",
        href: "#",
      },
      {
        name: "Item #3",
        href: "#",
      },
    ],
  },
];

export const WithMenuRight: StoryFn<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <NavbarBrand>
      <NavbarLogo aria-label="Your company">
        <CompanyLogo className="h-8 w-auto fill-neutral-900" />
      </NavbarLogo>
    </NavbarBrand>

    <NavbarItems>
      {navigation.map((item) => {
        if (item.dropdown) {
          return (
            <NavbarDropdown key={item.name}>
              <NavbarDropdownTrigger>{item.name}</NavbarDropdownTrigger>
              <NavbarDropdownContent>
                <DropdownMenuGroup>
                  {item.dropdownItems.map((dropdownItem) => (
                    <NavbarDropdownLink
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                    >
                      {dropdownItem.name}
                    </NavbarDropdownLink>
                  ))}
                </DropdownMenuGroup>
              </NavbarDropdownContent>
            </NavbarDropdown>
          );
        }

        return (
          <NavbarLink key={item.name} href={item.href}>
            {item.name}
          </NavbarLink>
        );
      })}
      <NavbarActions>
        <Button asChild>
          <a href="#">
            Learn more <span aria-hidden="true">&rarr;</span>
          </a>
        </Button>

        <Button variant="outline" asChild>
          <a href="#">Contact</a>
        </Button>
      </NavbarActions>
    </NavbarItems>
  </Navbar>
);

export const WithMenuLeft: StoryFn<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <NavbarBrand className="lg:flex-grow-0 lg:mr-6">
      <NavbarLogo aria-label="Your company">
        <CompanyLogo className="h-8 w-auto fill-neutral-900" />
      </NavbarLogo>
    </NavbarBrand>
    <NavbarItems>
      {navigation.map((item) => {
        if (item.dropdown) {
          return (
            <NavbarDropdown key={item.name}>
              <NavbarDropdownTrigger>{item.name}</NavbarDropdownTrigger>
              <NavbarDropdownContent>
                <DropdownMenuGroup>
                  {item.dropdownItems.map((dropdownItem) => (
                    <NavbarDropdownLink
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                    >
                      {dropdownItem.name}
                    </NavbarDropdownLink>
                  ))}
                </DropdownMenuGroup>
              </NavbarDropdownContent>
            </NavbarDropdown>
          );
        }

        return (
          <NavbarLink key={item.name} href={item.href}>
            {item.name}
          </NavbarLink>
        );
      })}
    </NavbarItems>

    <NavbarActions>
      <Input type="search" placeholder="Search" className="w-64" />
      <Button asChild>
        <a href="#">Learn more</a>
      </Button>
    </NavbarActions>
  </Navbar>
);

export const WithMenuCenter: StoryFn<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <NavbarBrand>
      <NavbarLogo aria-label="Your company">
        <CompanyLogo className="h-8 w-auto fill-neutral-900" />
      </NavbarLogo>
    </NavbarBrand>
    <NavbarItems>
      {navigation.map((item) => {
        if (item.dropdown) {
          return (
            <NavbarDropdown key={item.name}>
              <NavbarDropdownTrigger>{item.name}</NavbarDropdownTrigger>
              <NavbarDropdownContent>
                <DropdownMenuGroup>
                  {item.dropdownItems.map((dropdownItem) => (
                    <NavbarDropdownLink
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                    >
                      {dropdownItem.name}
                    </NavbarDropdownLink>
                  ))}
                </DropdownMenuGroup>
              </NavbarDropdownContent>
            </NavbarDropdown>
          );
        }

        return (
          <NavbarLink key={item.name} href={item.href}>
            {item.name}
          </NavbarLink>
        );
      })}
    </NavbarItems>

    <NavbarActions>
      <Button asChild>
        <a href="#">Learn more</a>
      </Button>
    </NavbarActions>
  </Navbar>
);

export const WithLogoCenter: StoryFn<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <NavbarItems className="w-[400px]">
      {navigation.map((item) => {
        if (item.dropdown) {
          return (
            <NavbarDropdown key={item.name}>
              <NavbarDropdownTrigger>{item.name}</NavbarDropdownTrigger>
              <NavbarDropdownContent>
                <DropdownMenuGroup>
                  {item.dropdownItems.map((dropdownItem) => (
                    <NavbarDropdownLink
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                    >
                      {dropdownItem.name}
                    </NavbarDropdownLink>
                  ))}
                </DropdownMenuGroup>
              </NavbarDropdownContent>
            </NavbarDropdown>
          );
        }

        return (
          <NavbarLink key={item.name} href={item.href}>
            {item.name}
          </NavbarLink>
        );
      })}
    </NavbarItems>
    <NavbarBrand className="lg:flex-grow-0">
      <NavbarLogo aria-label="Your company">
        <CompanyLogo className="h-8 w-auto fill-neutral-900" />
      </NavbarLogo>
    </NavbarBrand>
    <NavbarActions className="lg:flex-none w-[400px]">
      <Button asChild>
        <a href="#">Learn more</a>
      </Button>
    </NavbarActions>
  </Navbar>
);

export const WithActionsCenter: StoryFn<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <NavbarBrand className="lg:flex-grow-0">
      <NavbarLogo aria-label="Your company">
        <CompanyLogo className="h-8 w-auto fill-neutral-900" />
      </NavbarLogo>
    </NavbarBrand>
    <NavbarActions className="lg:justify-start ml-6">
      <Input type="search" placeholder="Search" className="w-64" />
    </NavbarActions>
    <NavbarItems>
      {navigation.map((item) => {
        if (item.dropdown) {
          return (
            <NavbarDropdown key={item.name}>
              <NavbarDropdownTrigger>{item.name}</NavbarDropdownTrigger>
              <NavbarDropdownContent>
                <DropdownMenuGroup>
                  {item.dropdownItems.map((dropdownItem) => (
                    <NavbarDropdownLink
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                    >
                      {dropdownItem.name}
                    </NavbarDropdownLink>
                  ))}
                </DropdownMenuGroup>
              </NavbarDropdownContent>
            </NavbarDropdown>
          );
        }

        return (
          <NavbarLink key={item.name} href={item.href}>
            {item.name}
          </NavbarLink>
        );
      })}
    </NavbarItems>
  </Navbar>
);

export const WithMobileMenu: StoryFn<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <NavbarBrand>
      <NavbarLogo aria-label="Your company">
        <CompanyLogo className="h-8 w-auto fill-neutral-900" />
      </NavbarLogo>
    </NavbarBrand>

    <NavbarItems>
      {navigation.map((item) => {
        if (item.dropdown) {
          return (
            <NavbarDropdown key={item.name}>
              <NavbarDropdownTrigger>{item.name}</NavbarDropdownTrigger>
              <NavbarDropdownContent>
                <DropdownMenuGroup>
                  {item.dropdownItems.map((dropdownItem) => (
                    <NavbarDropdownLink
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                    >
                      {dropdownItem.name}
                    </NavbarDropdownLink>
                  ))}
                </DropdownMenuGroup>
              </NavbarDropdownContent>
            </NavbarDropdown>
          );
        }
        return (
          <NavbarLink key={item.name} href={item.href}>
            {item.name}
          </NavbarLink>
        );
      })}
      <NavbarActions>
        <Button asChild>
          <a href="#">
            Learn more <span aria-hidden="true">&rarr;</span>
          </a>
        </Button>

        <Button variant="outline" asChild>
          <a href="#">Contact</a>
        </Button>
      </NavbarActions>
    </NavbarItems>
    <NavbarMobile>
      <NavbarMobileTrigger>
        <MenuIcon className="h-6 w-6 stroke-neutral-800" aria-hidden="true" />
      </NavbarMobileTrigger>
      <NavbarMobileContent>
        <NavbarMobileHeader>
          <NavbarMobileLogo aria-label="Your company">
            <CompanyLogo className="h-8 w-auto fill-neutral-900" />
          </NavbarMobileLogo>
          <NavbarMobileClose />
        </NavbarMobileHeader>
        <NavbarMobileGroup>
          <NavbarMobileItems>
            {navigation.map((item) => {
              if (item.dropdown) {
                return (
                  <>
                    <NavbarMobileDropdownLabel>
                      {item.name}
                    </NavbarMobileDropdownLabel>
                    <NavbarMobileDropdownGroup>
                      {item.dropdownItems.map((dropdownItem) => (
                        <NavbarMobileDropdownLink
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                        >
                          {dropdownItem.name}
                        </NavbarMobileDropdownLink>
                      ))}
                    </NavbarMobileDropdownGroup>
                  </>
                );
              }

              return (
                <NavbarMobileLink key={item.name} href={item.href}>
                  {item.name}
                </NavbarMobileLink>
              );
            })}
          </NavbarMobileItems>
          <NavbarMobileActions>
            <Button asChild>
              <a href="#">
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a href="#">Contact</a>
            </Button>
          </NavbarMobileActions>
        </NavbarMobileGroup>
      </NavbarMobileContent>
    </NavbarMobile>
  </Navbar>
);

WithMobileMenu.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};

export const WithMegaMenu: StoryFn<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <NavbarBrand className="lg:flex-grow-0 lg:mr-6">
      <NavbarLogo aria-label="Your company">
        <CompanyLogo className="h-8 w-auto fill-neutral-900" />
      </NavbarLogo>
    </NavbarBrand>

    <NavbarItems className="flex-1">
      <MegaMenu>
        <MegaMenuList>
          <MegaMenuItem>
            <MegaMenuTrigger>Getting started</MegaMenuTrigger>
            <MegaMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <MegaMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <img
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo"
                        alt="Logo"
                        className="w-8 h-8"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </MegaMenuLink>
                </li>
                <MegaMenuListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </MegaMenuListItem>
                <MegaMenuListItem
                  href="/docs/installation"
                  title="Installation"
                >
                  How to install dependencies and structure your app.
                </MegaMenuListItem>
                <MegaMenuListItem
                  href="/docs/primitives/typography"
                  title="Typography"
                >
                  Styles for headings, paragraphs, lists...etc
                </MegaMenuListItem>
              </ul>
            </MegaMenuContent>
          </MegaMenuItem>
        </MegaMenuList>
      </MegaMenu>
    </NavbarItems>

    <NavbarActions className="lg:flex-none w-[400px]">
      <Button asChild>
        <a href="#">Learn more</a>
      </Button>
    </NavbarActions>
  </Navbar>
);

const CompanyLogo: React.FC<SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 167 41" {...props}>
      <path
        fillRule="nonzero"
        d="M48.631 28.794h11.952v-3.6h-7.704v-13.56h-4.248v17.16zM67.664 26.394c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504zM81.094 33.042c1.824 0 3.432-.408 4.512-1.368.984-.888 1.632-2.232 1.632-4.08V16.506h-3.744v1.32h-.048c-.72-1.032-1.824-1.68-3.456-1.68-3.048 0-5.16 2.544-5.16 6.144 0 3.768 2.568 5.832 5.328 5.832 1.488 0 2.424-.6 3.144-1.416h.096v1.224c0 1.488-.696 2.352-2.352 2.352-1.296 0-1.944-.552-2.16-1.2h-3.792c.384 2.568 2.616 3.96 6 3.96zm-.024-7.824c-1.464 0-2.424-1.2-2.424-3.048 0-1.872.96-3.072 2.424-3.072 1.632 0 2.496 1.392 2.496 3.048 0 1.728-.792 3.072-2.496 3.072zM94.937 26.394c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504zM102.655 28.794h3.912V16.506h-3.912v12.288zm0-13.992h3.912v-3.168h-3.912v3.168zM108.264 32.85h3.912v-5.328h.048c.768 1.032 1.896 1.656 3.48 1.656 3.216 0 5.352-2.544 5.352-6.528 0-3.696-1.992-6.504-5.256-6.504-1.68 0-2.88.744-3.72 1.848h-.072v-1.488h-3.744V32.85zm6.432-6.696c-1.68 0-2.64-1.368-2.64-3.36 0-1.992.864-3.504 2.568-3.504 1.68 0 2.472 1.392 2.472 3.504 0 2.088-.912 3.36-2.4 3.36zM127.426 29.178c3.216 0 5.592-1.392 5.592-4.08 0-3.144-2.544-3.696-4.704-4.056-1.56-.288-2.952-.408-2.952-1.272 0-.768.744-1.128 1.704-1.128 1.08 0 1.824.336 1.968 1.44h3.6c-.192-2.424-2.064-3.936-5.544-3.936-2.904 0-5.304 1.344-5.304 3.936 0 2.88 2.28 3.456 4.416 3.816 1.632.288 3.12.408 3.12 1.512 0 .792-.744 1.224-1.92 1.224-1.296 0-2.112-.6-2.256-1.824h-3.696c.12 2.712 2.376 4.368 5.976 4.368zM138.331 29.154c1.704 0 2.784-.672 3.672-1.872h.072v1.512h3.744V16.506h-3.912v6.864c0 1.464-.816 2.472-2.16 2.472-1.248 0-1.848-.744-1.848-2.088v-7.248h-3.888v8.064c0 2.736 1.488 4.584 4.32 4.584zM147.521 28.794h3.912v-6.888c0-1.464.72-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912v-6.888c0-1.464.696-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912v-7.992c0-2.76-1.392-4.656-4.176-4.656-1.584 0-2.904.672-3.864 2.16h-.048c-.624-1.32-1.848-2.16-3.456-2.16-1.776 0-2.952.84-3.72 2.112h-.072v-1.752h-3.744v12.288z"
      ></path>
      <path d="M8.654 3.891a20.168 20.168 0 00-3.847 3.515c4.589-.426 10.42.27 17.189 3.654 7.228 3.614 13.049 3.737 17.1 2.955a19.842 19.842 0 00-1.378-3.199c-4.638.489-10.583-.158-17.511-3.622-4.4-2.2-8.278-3.106-11.553-3.303zM35.009 6.96A19.952 19.952 0 0020.101.294c-1.739 0-3.427.222-5.036.639 2.179.595 4.494 1.465 6.931 2.683 5.072 2.536 9.452 3.353 13.013 3.344zm4.953 10.962c-4.894.966-11.652.768-19.755-3.284-7.576-3.788-13.605-3.74-17.672-2.836-.21.046-.415.095-.615.146a19.9 19.9 0 00-1.262 3.64c.326-.087.662-.17 1.01-.247 4.933-1.096 11.903-1.049 20.328 3.164 7.575 3.787 13.605 3.74 17.672 2.836.139-.031.276-.063.411-.096a20.186 20.186 0 00-.117-3.323zm-.536 7.544c-4.846.847-11.408.522-19.219-3.384-7.576-3.787-13.605-3.74-17.672-2.836-.902.2-1.714.445-2.431.703-.002.114-.003.229-.003.345 0 11.045 8.955 20 20 20 9.258 0 17.046-6.289 19.325-14.828z"></path>
    </svg>
  );
};
