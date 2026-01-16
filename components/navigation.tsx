"use client"

import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">FD</span>
            </div>
            <span className="font-semibold text-lg text-foreground">FlowDel</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition">
              Platform
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#audience" className="text-sm text-muted-foreground hover:text-foreground transition">
              For Business
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
