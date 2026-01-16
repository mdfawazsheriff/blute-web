import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your Delivery Network?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join the platform reorganizing delivery demand across the industry. Start aggregating orders today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Get Started Free
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary px-8 bg-transparent">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
