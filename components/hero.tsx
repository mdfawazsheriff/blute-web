import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-24 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
              The Unified Delivery Platform
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
              One Platform for All Delivery Demand
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stop managing fragmented delivery networks. Aggregate demand across commerce platforms, food apps, and
              agencies. Connect riders to real opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Start For Free
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary px-8 bg-transparent">
              Watch Demo
            </Button>
          </div>
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">Trusted by delivery networks across regions</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground font-medium">
                Company
              </div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground font-medium">
                Company
              </div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground font-medium">
                Company
              </div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground font-medium">
                Company
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
