/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '../../utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-all duration-normal ease-standard focus-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 
          'bg-primary text-primary-foreground hover:bg-primary-hover hover:shadow-elevation-md hover-lift active-press active:bg-primary-active',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive-hover hover:shadow-elevation-md hover-lift active-press active:bg-destructive-active',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-border-hover hover-lift active-press',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-hover hover-lift active-press active:bg-secondary-active',
        ghost: 
          'hover:bg-accent hover:text-accent-foreground hover-lift active-press',
        link: 
          'text-primary underline-offset-4 hover:underline hover:text-primary-hover active:text-primary-active',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3 text-xs',
        lg: 'h-11 px-8 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

// Loading Spinner Component
const LoadingSpinner = ({ className }: { className?: string }) => (
  <svg 
    className={cn('animate-spin', className)}
    fill="none" 
    viewBox="0 0 24 24"
  >
    <circle 
      className="opacity-25" 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    <path 
      className="opacity-75" 
      fill="currentColor" 
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <LoadingSpinner className="h-4 w-4 mr-1" />
        )}
        {loading ? 'Loading...' : children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }