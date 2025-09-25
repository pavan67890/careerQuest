"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/icons/logo"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

export function HeaderClientItems() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
        <>
            <div className="mr-6 flex items-center space-x-2">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8"></div>
                    <span className="font-headline text-xl font-bold">CareerQuest</span>
                </div>
            </div>
            <nav className="flex items-center">
                <div className="mr-2 h-10 px-4 py-2"></div>
                <div className="h-10 w-10"></div>
            </nav>
        </>
    )
  }

  return (
    <>
        <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
        </Link>
        <nav className="flex items-center">
            <ModeToggle />
        </nav>
    </>
  )
}
