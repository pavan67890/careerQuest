"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

import { navLinks } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/icons/logo"
import { ModeToggle } from "@/components/mode-toggle"

function NavMenu() {
  const pathname = usePathname()
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === link.href ? "text-foreground" : "text-foreground/60"
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}

function MobileNavMenu() {
    const pathname = usePathname()
    return (
        <>
        {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg",
                pathname === link.href ? "font-semibold" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </>
    )
}

export default function Header() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {isClient && <NavMenu />}
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="mb-6">
              <Logo />
            </Link>
            <div className="flex flex-col space-y-4">
              {isClient && <MobileNavMenu />}
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Can be used for a command menu later */}
          </div>
          <nav className="flex items-center">
            <Button asChild variant="secondary" className="mr-2">
                <Link href="/parent-dashboard">Parent Mode</Link>
            </Button>
            {isClient && <ModeToggle />}
          </nav>
        </div>
      </div>
    </header>
  )
}
