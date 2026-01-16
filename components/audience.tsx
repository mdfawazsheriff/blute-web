import { Button } from "@/components/ui/button"
import { Building2, Bike, ArrowRight } from "lucide-react"

export function Audience() {
  return (
    <section id="audience" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Delivery Companies */}
          <div id="companies" className="scroll-mt-24 p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors flex flex-col h-full">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
              <Building2 className="w-7 h-7 text-primary" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">For Delivery Companies</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Stop scrambling for riders during peak hours. Access a unified pool of verified, tiered riders ready to meet your demand.
            </p>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                Post slots in minutes
              </li>
              <li className="flex items-center text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                Pre-qualified leads only
              </li>
              <li className="flex items-center text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                Reliability tiers included
              </li>
            </ul>

          </div>

          {/* For Riders */}
          <div id="riders" className="scroll-mt-24 p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/20 transition-colors flex flex-col h-full">
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-8">
              <Bike className="w-7 h-7 text-cyan-400" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">For Riders</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              One app, all opportunities. Access unified demand from multiple companies, build a portable reputation, and maximize your earnings.
            </p>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3" />
                Single app for all deliveries
              </li>
              <li className="flex items-center text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3" />
                Build cross-platform reputation
              </li>
              <li className="flex items-center text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3" />
                Earn tier-based rewards
              </li>
            </ul>



          </div>
        </div>
      </div>
    </section>
  )
}
