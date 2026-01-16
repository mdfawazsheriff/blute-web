import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Zap } from "lucide-react"

export function Stats() {
  return (
    <section className="py-12 border-b border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-transparent border-white/5 hover:border-primary/20 transition-colors">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <Users className="w-8 h-8 text-primary mb-4" />
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Verified Riders</div>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-white/5 hover:border-primary/20 transition-colors">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <div className="text-4xl font-bold text-white mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Peak Fill Rate</div>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-white/5 hover:border-primary/20 transition-colors">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <div className="text-4xl font-bold text-white mb-2">2.5x</div>
              <div className="text-sm text-muted-foreground">Faster Matching</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
