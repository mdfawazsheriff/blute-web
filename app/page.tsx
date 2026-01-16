import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { HowItWorks } from "@/components/how-it-works"
import { Stats } from "@/components/stats"
import { Trust } from "@/components/trust"
import { Footer } from "@/components/footer"
import { Features } from "@/components/features"
import { Audience } from "@/components/audience"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navigation />
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Features />
      <Trust />
      <Audience />
      <Footer />
    </main>
  )
}
