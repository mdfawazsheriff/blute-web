import { Badge } from "lucide-react"

export function Trust() {
    return (
        <section id="trust" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">Trust Layer</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Universal <span className="text-primary">Rider Identity</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        One verified identity. One reputation. Recognized across every partner company.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Silver Tier */}
                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-slate-400 transition-colors group relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-slate-400/50 rounded-t-2xl"></div>
                        <div className="flex items-center gap-3 mb-8">
                            <Badge className="w-8 h-8 text-slate-300" />
                            <h3 className="text-2xl font-bold text-slate-200">Silver</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Requirements</div>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-slate-400" /> Verified ID
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-slate-400" /> Profile Complete
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-slate-400" /> 1+ Delivery
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Benefits</div>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-slate-400" /> Basic slot access
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-slate-400" /> Standard visibility
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Gold Tier */}
                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-yellow-500/20 hover:border-yellow-500/50 transition-colors group relative shadow-[0_0_40px_rgba(234,179,8,0.1)]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-t-2xl"></div>
                        <div className="flex items-center gap-3 mb-8">
                            <Badge className="w-8 h-8 text-yellow-500" />
                            <h3 className="text-2xl font-bold text-yellow-400">Gold</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Requirements</div>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-yellow-500" /> 50+ Deliveries
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-yellow-500" /> 90%+ Attendance
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-yellow-500" /> 4.5+ Rating
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Benefits</div>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-yellow-500" /> Priority slot access
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-yellow-500" /> Higher visibility
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-yellow-500" /> Bonus credits
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Platinum Tier */}
                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-cyan-500/20 hover:border-cyan-500/50 transition-colors group relative shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-t-2xl"></div>
                        <div className="flex items-center gap-3 mb-8">
                            <Badge className="w-8 h-8 text-cyan-400" />
                            <h3 className="text-2xl font-bold text-cyan-400">Platinum</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Requirements</div>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-cyan-400" /> 200+ Deliveries
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-cyan-400" /> 95%+ Attendance
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-cyan-400" /> 4.8+ Rating
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Benefits</div>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-cyan-400" /> First-pick access
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-cyan-400" /> Premium rates
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-cyan-400" /> Exclusive slots
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckIcon className="w-4 h-4 mr-2 text-cyan-400" /> Unlimited credits
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
