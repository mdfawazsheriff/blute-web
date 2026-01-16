export function Problem() {
  const issues = [
    {
      title: "Fragmented Demand",
      description: "Delivery orders scattered across multiple platforms make full-day income impossible for riders.",
    },
    {
      title: "Rider Shortages",
      description: "Companies face peak-hour staffing challenges with unreliable rider availability across services.",
    },
    {
      title: "Lost Efficiency",
      description: "No unified trust layer means repeated verification and inability to assess rider reliability.",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">The Problem Today</h2>
          <p className="text-lg text-muted-foreground">
            Delivery networks operate in silos, wasting rider potential and company resources
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {issues.map((issue, i) => (
            <div key={i} className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition">
              <div className="w-10 h-10 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-primary font-bold">{i + 1}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{issue.title}</h3>
              <p className="text-sm text-muted-foreground">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
