"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Bike, Upload, Search, CheckCircle } from "lucide-react"

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">How It Works</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Simple for <span className="text-primary">Everyone</span>
                    </h2>

                    <Tabs defaultValue="companies" className="w-full max-w-4xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2 h-14 bg-white/5 p-1 rounded-xl">
                            <TabsTrigger
                                value="companies"
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-lg text-base"
                            >
                                <Building2 className="w-4 h-4 mr-2" />
                                For Companies
                            </TabsTrigger>
                            <TabsTrigger
                                value="riders"
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded-lg text-base"
                            >
                                <Bike className="w-4 h-4 mr-2" />
                                For Riders
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="companies" className="mt-12">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                                        <Upload className="w-7 h-7 text-primary-foreground" />
                                    </div>
                                    <div className="absolute top-8 right-8 text-6xl font-bold text-white/5 select-none">01</div>
                                    <h3 className="text-xl font-bold text-white mb-3">Post Your Slots</h3>
                                    <p className="text-muted-foreground">
                                        Define delivery requirements by location, time slot, and rider count. Or integrate directly for automatic order flow.
                                    </p>
                                </div>

                                <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                                        <Search className="w-7 h-7 text-primary-foreground" />
                                    </div>
                                    <div className="absolute top-8 right-8 text-6xl font-bold text-white/5 select-none">02</div>
                                    <h3 className="text-xl font-bold text-white mb-3">Receive Qualified Leads</h3>
                                    <p className="text-muted-foreground">
                                        Riders use limited booking credits to express interest, ensuring high-intent candidates for each slot.
                                    </p>
                                </div>

                                <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                                        <CheckCircle className="w-7 h-7 text-primary-foreground" />
                                    </div>
                                    <div className="absolute top-8 right-8 text-6xl font-bold text-white/5 select-none">03</div>
                                    <h3 className="text-xl font-bold text-white mb-3">Confirm & Deploy</h3>
                                    <p className="text-muted-foreground">
                                        Review rider profiles with reliability tiers, contact preferred candidates, and confirm participation.
                                    </p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="riders" className="mt-12">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                                        <Search className="w-7 h-7 text-primary-foreground" />
                                    </div>
                                    <div className="absolute top-8 right-8 text-6xl font-bold text-white/5 select-none">01</div>
                                    <h3 className="text-xl font-bold text-white mb-3">Browse Slots</h3>
                                    <p className="text-muted-foreground">
                                        View available delivery slots from top companies in your area. See earnings upfront.
                                    </p>
                                </div>

                                <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                                        <CheckCircle className="w-7 h-7 text-primary-foreground" />
                                    </div>
                                    <div className="absolute top-8 right-8 text-6xl font-bold text-white/5 select-none">02</div>
                                    <h3 className="text-xl font-bold text-white mb-3">Book & Confirm</h3>
                                    <p className="text-muted-foreground">
                                        Use your credits to book slots that match your schedule. Get instant confirmation.
                                    </p>
                                </div>

                                <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
                                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                                        <TrendingUp className="w-7 h-7 text-primary-foreground" />
                                    </div>
                                    <div className="absolute top-8 right-8 text-6xl font-bold text-white/5 select-none">03</div>
                                    <h3 className="text-xl font-bold text-white mb-3">Deliver & Earn</h3>
                                    <p className="text-muted-foreground">
                                        Complete deliveries and build your reputation score to unlock better slots and rewards.
                                    </p>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
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
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
    )
}
