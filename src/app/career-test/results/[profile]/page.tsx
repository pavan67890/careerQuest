
import { careerProfiles, type CareerProfile } from "@/lib/career-test-results-data";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Lightbulb, Star, Award, BarChart, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareerTestResultPage({ params }: { params: { profile: string } }) {
  const profile: CareerProfile | undefined = careerProfiles[params.profile];

  if (!profile) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-headline font-bold">Your Career Profile: {profile.title}</h1>
        <p className="text-muted-foreground mt-2">{profile.summary}</p>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8">
        <Card className="shadow-lg animate-in fade-in-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Award /> Top Strengths</CardTitle>
            <CardDescription>The key traits that define your profile.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {profile.strengths.map(strength => (
              <Badge key={strength} variant="default" className="text-base py-1 px-3">
                <Star className="w-3 h-3 mr-2" /> {strength}
              </Badge>
            ))}
          </CardContent>
        </Card>

        <Card className="animate-in fade-in-50 delay-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Lightbulb /> Recommended Careers</CardTitle>
            <CardDescription>Paths that align with your strengths and interests.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {profile.careers.map(career => (
              <div key={career} className="flex items-center gap-3 p-2 bg-secondary/50 rounded-md">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-medium">{career}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-secondary/30 animate-in fade-in-50 delay-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart /> Why This Profile Fits You</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{profile.explanation}</p>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8 animate-in fade-in-50 delay-300">
            <h3 className="text-xl font-headline font-semibold mb-4">What's Next?</h3>
            <div className="flex gap-4 justify-center">
                <Button asChild>
                    <Link href="/roadmaps">
                        <BookOpen className="mr-2 h-4 w-4"/>
                        Explore Career Roadmaps
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/ai-consultant">
                        Ask AI Consultant
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
