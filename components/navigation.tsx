"use client"

import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">BA</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Blute.ai</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#companies" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              For Companies
            </a>
            <a href="#riders" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              For Riders
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#trust" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Trust
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              
            </a>


          </div>
        </div>
      </div>
    </nav>
  )
}
