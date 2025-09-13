import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'

import { cn } from '../../utils/cn'
import { Button } from '../Button'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-lg border bg-popover p-4 text-popover-foreground shadow-elevation-lg outline-none transition-all duration-slow ease-decelerated data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
  className?: string
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = 'Pick a date',
  disabled = false,
  minDate,
  maxDate,
  className,
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            className
          )}
          disabled={disabled}
        >
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25m-10.5 15.75h9.75a2.25 2.25 0 002.25-2.25V9a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 9v9.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          {value ? format(value, 'PPP') : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-3">
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange?.(date)
              setOpen(false)
            }}
            disabled={[
              ...(minDate ? [{ before: minDate }] : []),
              ...(maxDate ? [{ after: maxDate }] : []),
            ]}
            className="rdp-root"
            classNames={{
              months: "rdp-months",
              month_caption: "rdp-month_caption",
              nav: "rdp-nav",
              button_previous: "rdp-button_previous",
              button_next: "rdp-button_next",
              chevron: "rdp-chevron",
              weekdays: "rdp-weekdays",
              weekday: "rdp-weekday",
              month_grid: "rdp-month_grid",
              week: "rdp-week",
              day: "rdp-day",
              day_button: "rdp-day_button",
              day_today: "rdp-day_today",
              day_selected: "rdp-day_selected",
              day_outside: "rdp-day_outside",
              day_disabled: "rdp-day_disabled",
              day_range_start: "rdp-day_range_start",
              day_range_end: "rdp-day_range_end",
              day_range_middle: "rdp-day_range_middle",
            }}
            components={{
              Chevron: ({ ...props }) => (
                <svg
                  className="rdp-chevron"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  {...props}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={props.orientation === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
                  />
                </svg>
              ),
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }