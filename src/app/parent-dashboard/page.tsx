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

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="lg:col-span-2">
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
                            <CardTitle className="font-headline flex items-center gap-2"><Star /> Strengths</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                           <Badge variant="default">Problem Solving</Badge>
                           <Badge variant="default">Creativity</Badge>
                           <Badge variant="default">Leadership</Badge>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2"><Sparkles /> Passions</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                           <Badge variant="secondary">Technology</Badge>
                           <Badge variant="secondary">Art</Badge>
                           <Badge variant="secondary">Music</Badge>
                        </CardContent>
                    </Card>
                </div>

                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2"><BrainCircuit /> Recommended Careers</CardTitle>
                        <CardDescription>Based on AI analysis of their profile.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-secondary/50">
                            <CardHeader>
                                <CardTitle className="text-lg">Software Engineer</CardTitle>
                                <CardDescription>Matches logical skills and tech passion.</CardDescription>
                            </CardHeader>
                        </Card>
                         <Card className="bg-secondary/50">
                            <CardHeader>
                                <CardTitle className="text-lg">UX/UI Designer</CardTitle>
                                <CardDescription>Combines creativity with technology.</CardDescription>
                            </CardHeader>
                        </Card>
                         <Card className="bg-secondary/50">
                            <CardHeader>
                                <CardTitle className="text-lg">Data Scientist</CardTitle>
                                <CardDescription>Excellent for analytical minds.</CardDescription>
                            </CardHeader>
                        </Card>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
