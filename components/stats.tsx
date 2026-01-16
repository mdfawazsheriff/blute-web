export function Stats() {
  const stats = [
    { label: "Orders Processed", value: "100K+" },
    { label: "Active Riders", value: "50K+" },
    { label: "Companies Connected", value: "500+" },
    { label: "Average Efficiency Gain", value: "40%" },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
