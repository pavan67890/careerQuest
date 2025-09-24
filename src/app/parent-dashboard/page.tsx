import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import AptitudeChart from "@/components/parent-dashboard/aptitude-chart"
import { Badge } from "@/components/ui/badge"
import { Sparkles, BrainCircuit, Star } from "lucide-react"

export default function ParentDashboardPage() {
    const avatarImage = PlaceHolderImages.find((img) => img.id === 'parent-avatar');

    return (
        <div className="container py-12">
            <div className="flex items-center gap-4 mb-8">
                {avatarImage && (
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={avatarImage.imageUrl} alt="Parent Avatar" data-ai-hint={avatarImage.imageHint} />
                        <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                )}
                <div>
                    <h1 className="text-3xl font-headline font-bold">Parent Dashboard</h1>
                    <p className="text-muted-foreground">An overview of your child's career profile.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle className="font-headline">Aptitude Scores</CardTitle>
                        <CardDescription>Visual representation of test results.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <AptitudeChart />
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2 text-xl"><Star /> Strengths</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                           <Badge variant="default">Problem Solving</Badge>
                           <Badge variant="default">Creativity</Badge>
                           <Badge variant="default">Leadership</Badge>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2 text-xl"><Sparkles /> Passions</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                           <Badge variant="secondary">Technology</Badge>
                           <Badge variant="secondary">Art</Badge>
                           <Badge variant="secondary">Music</Badge>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2 text-xl"><BrainCircuit /> Recommended Careers</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Card className="bg-secondary/50">
                                <CardHeader className="p-3">
                                    <CardTitle className="text-md">Software Engineer</CardTitle>
                                    <CardDescription className="text-xs">Matches logical skills and tech passion.</CardDescription>
                                </CardHeader>
                            </Card>
                             <Card className="bg-secondary/50">
                                <CardHeader className="p-3">
                                    <CardTitle className="text-md">UX/UI Designer</CardTitle>
                                    <CardDescription className="text-xs">Combines creativity with technology.</CardDescription>
                                </CardHeader>
                            </Card>
                             <Card className="bg-secondary/50">
                                <CardHeader className="p-3">
                                    <CardTitle className="text-md">Data Scientist</CardTitle>
                                    <CardDescription className="text-xs">Excellent for analytical minds.</CardDescription>
                                </CardHeader>
                            </Card>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
