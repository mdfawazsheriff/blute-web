export function Features() {
  const features = [
    {
      title: "Real-Time Order Pool",
      description: "Access to all aggregated delivery orders across multiple sources with live updates",
    },
    {
      title: "Rider Tiering System",
      description: "Silver, Gold, Platinum reliability tiers based on verified performance history",
    },
    {
      title: "Lead Generation Engine",
      description: "Smart lead matching with booking credits and automated attendance confirmation",
    },
    {
      title: "Demand Prediction",
      description: "AI-powered forecasting to optimize slot creation and rider availability planning",
    },
    {
      title: "Direct Integration",
      description: "Seamless API integration for automatic order flow from your existing systems",
    },
    {
      title: "Performance Analytics",
      description: "Deep insights into rider behavior, demand patterns, and platform utilization",
    },
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground">Everything you need to optimize your delivery operations</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition group cursor-pointer"
            >
              <div className="mb-4 inline-block w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
