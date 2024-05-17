"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"

const RadioSizeGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root
            className={cn("grid gap-2", className)}
            {...props}
            ref={ref}
        />
    )
})
RadioSizeGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioSize = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                "aspect-square p-1 size-10 rounded-full border-2 text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            <div className="relative w-full h-full">
                <section className="flex justify-center items-center w-full h-full text-xs font-bold text-foreground uppercase">
                    {props.value}
                </section>
                <RadioGroupPrimitive.Indicator className="absolute h-[50%] w-[50%] bg-green-700 -bottom-1 -right-2 rounded-full">
                </RadioGroupPrimitive.Indicator>
            </div>
        </RadioGroupPrimitive.Item>
    )
})
RadioSize.displayName = RadioGroupPrimitive.Item.displayName

export { RadioSize, RadioSizeGroup }
