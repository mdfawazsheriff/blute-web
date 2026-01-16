import { Plug, Gamepad2, Brain, BarChart3, MessageSquare, ShieldCheck } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Plug,
      title: "Direct Integration",
      description: "Connect your existing systems to automatically post delivery orders as they come in.",
    },
    {
      icon: Gamepad2,
      title: "Gamified Progression",
      description: "Riders earn rewards, climb tiers, and unlock benefits through consistent performance.",
    },
    {
      icon: Brain,
      title: "Demand Prediction",
      description: "AI-powered forecasting optimizes slot creation based on historical patterns.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights into fill rates, rider performance, and demand trends.",
    },
    {
      icon: MessageSquare,
      title: "Automated Confirmations",
      description: "Smart attendance confirmation reduces no-shows and increases reliability.",
    },
    {
      icon: ShieldCheck,
      title: "Fraud Prevention",
      description: "Blacklisted riders are blocked across the entire platform instantly.",
    },
  ]

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">Platform Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for <span className="text-primary">Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to optimize your delivery operations and rider management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
