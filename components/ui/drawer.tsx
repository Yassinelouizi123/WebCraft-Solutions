"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface DrawerProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface DrawerTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

interface DrawerContentProps {
  children: React.ReactNode
  className?: string
}

interface DrawerHeaderProps {
  children: React.ReactNode
  className?: string
}

interface DrawerTitleProps {
  children: React.ReactNode
  className?: string
}

interface DrawerDescriptionProps {
  children: React.ReactNode
  className?: string
}

interface DrawerFooterProps {
  children: React.ReactNode
  className?: string
}

const DrawerContext = React.createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
}>({
  open: false,
  onOpenChange: () => {},
})

export function Drawer({ open = false, onOpenChange, children }: DrawerProps) {
  const [isOpen, setIsOpen] = React.useState(open)

  React.useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      setIsOpen(newOpen)
      onOpenChange?.(newOpen)
    },
    [onOpenChange],
  )

  return (
    <DrawerContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>{children}</DrawerContext.Provider>
  )
}

type WithOnClick<T> = T extends React.ReactElement<infer P> ? React.ReactElement<P & { onClick?: () => void }> : never;

export function DrawerTrigger({ children, asChild }: DrawerTriggerProps) {
  const { onOpenChange } = React.useContext(DrawerContext)

  const handleClick = () => {
    onOpenChange(true)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>, {
      onClick: (e: React.MouseEvent) => {
        (children as React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>).props.onClick?.(e);
        handleClick();
      },
    });
  }

  return <button onClick={handleClick}>{children}</button>
}

export function DrawerContent({ children, className }: DrawerContentProps) {
  const { open, onOpenChange } = React.useContext(DrawerContext)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange(false)} />

      {/* Drawer */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
          "animate-in slide-in-from-bottom-80 duration-300",
          className,
        )}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        {children}
      </div>
    </div>
  )
}

export function DrawerHeader({ children, className }: DrawerHeaderProps) {
  const { onOpenChange } = React.useContext(DrawerContext)

  return (
    <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        onClick={() => onOpenChange(false)}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Button>
      {children}
    </div>
  )
}

export function DrawerTitle({ children, className }: DrawerTitleProps) {
  return <h2 className={cn("text-lg font-semibold leading-none tracking-tight", className)}>{children}</h2>
}

export function DrawerDescription({ children, className }: DrawerDescriptionProps) {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
}

export function DrawerFooter({ children, className }: DrawerFooterProps) {
  return <div className={cn("flex flex-col gap-2 p-4", className)}>{children}</div>
}
