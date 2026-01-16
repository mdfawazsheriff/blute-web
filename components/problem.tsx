import { Shuffle, Clock, XCircle, Smartphone } from "lucide-react"

export function Problem() {
  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Last-Mile Delivery is <span className="text-primary">Broken</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The delivery ecosystem suffers from fundamental coordination failures that hurt everyone involved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-destructive/50 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
              <Shuffle className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fragmented Demand</h3>
            <p className="text-muted-foreground leading-relaxed">
              Delivery demand is split across multiple platforms, apps, and agencies with no central coordination, leading to inefficiencies.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-destructive/50 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
              <Clock className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Peak Hour Chaos</h3>
            <p className="text-muted-foreground leading-relaxed">
              Companies face critical rider shortages during peak hours while riders struggle to maximize earnings due to poor scheduling.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-destructive/50 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
              <XCircle className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">No Rider Accountability</h3>
            <p className="text-muted-foreground leading-relaxed">
              Blacklisted or unreliable riders move undetected between companies, causing repeat huge operational issues and trust deficits.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-destructive/50 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
              <Smartphone className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">App Switching Fatigue</h3>
            <p className="text-muted-foreground leading-relaxed">
              Riders juggle multiple apps daily, leading to inefficiency, battery drain, and inconsistent service quality across platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
