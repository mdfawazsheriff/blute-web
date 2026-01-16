export function Audience() {
  const audiences = [
    {
      title: "For Riders",
      description:
        "Access unified delivery demand from one app. Use booking credits to find opportunities and earn consistently.",
      points: ["One app, multiple earnings", "Verified opportunities", "Performance rewards"],
    },
    {
      title: "For Companies",
      description:
        "Find qualified riders when you need them. Post peak-hour requirements and connect with reliable talent instantly.",
      points: ["No more rider shortages", "Verified talent pool", "Flexible hiring"],
    },
    {
      title: "For Agencies",
      description: "Automate rider supply with our intelligent matching. Reduce no-shows and improve rider retention.",
      points: ["Smart matching", "Reduced no-shows", "Performance data"],
    },
  ]

  return (
    <section id="audience" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Built For Everyone</h2>
          <p className="text-lg text-muted-foreground">Solutions tailored to riders, companies, and agencies</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, i) => (
            <div key={i} className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition">
              <h3 className="text-xl font-semibold text-foreground mb-3">{audience.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{audience.description}</p>
              <ul className="space-y-3">
                {audience.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
