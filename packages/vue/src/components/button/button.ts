import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva('q-button', {
  variants: {
    variant: {
      primary: 'variant--primary',
      secondary: 'variant--secondary',
      destructive: 'variant--destructive',
      outline: 'variant--outline',
      ghost: 'variant--ghost',
      link: 'variant--link'
    },
    size: {
      md: 'size--md',
      sm: 'size--sm',
      lg: 'size--lg',
      icon: 'size--icon'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export type ButtonVariants = VariantProps<typeof buttonVariants>

