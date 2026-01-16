import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Audience } from "@/components/audience"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Stats />
      <Audience />
      <CTA />
      <Footer />
    </main>
  )
}
