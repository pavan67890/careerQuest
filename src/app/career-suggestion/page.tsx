"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  aiCareerSuggestion,
  type AICareerSuggestionOutput,
} from "@/ai/flows/ai-career-suggestion";
import { Lightbulb, Loader2, BookOpen, BarChart } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  testResults: z.string().min(10, {
    message: "Please provide some details about your test results.",
  }),
  interests: z.string().min(10, {
    message: "Please list at least one interest.",
  }),
  strengths: z.string().min(10, {
    message: "Please list at least one strength.",
  }),
});

export default function AiCareerSuggestionPage() {
  const [suggestion, setSuggestion] =
    useState<AICareerSuggestionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      testResults: "",
      interests: "",
      strengths: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setSuggestion(null);
    try {
      const result = await aiCareerSuggestion(values);
      setSuggestion(result);
    } catch (e) {
      setError("An error occurred while fetching suggestions. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container py-12">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-headline font-bold">AI Career Suggestions</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Fill in your details, and our AI will generate personalized career and education suggestions for you.
            </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Your Profile</CardTitle>
              <CardDescription>
                Help us understand you better.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="testResults"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Career Test Summary</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'My test showed I'm analytical and enjoy problem-solving.'"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Briefly describe the outcome of your career test.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interests & Hobbies</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., 'Video games, reading sci-fi, hiking'"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="strengths"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Strengths</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., 'Good at math, creative writing, leading teams'"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Get AI Suggestions"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
            {isLoading && (
                 <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                        <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                        <p className="mt-4 text-muted-foreground">Our AI is analyzing your profile...</p>
                    </div>
                </div>
            )}
            {error && (
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            {suggestion && (
            <>
                <Card className="bg-secondary/50 animate-in fade-in-50">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2"><Lightbulb /> Career Suggestions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{suggestion.careerSuggestions}</p>
                    </CardContent>
                </Card>
                <Card className="animate-in fade-in-50 delay-100">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2"><BookOpen /> Educational Paths</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{suggestion.educationalPaths}</p>
                    </CardContent>
                </Card>
                <Card className="animate-in fade-in-50 delay-200">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2"><BarChart /> Reasoning</CardTitle>
                        <CardDescription>Why this matches you</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{suggestion.reasoning}</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant="outline">
                            <Link href="/ai-consultant">Ask AI Consultant</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </>
            )}
            {!isLoading && !suggestion && !error && (
                <div className="flex items-center justify-center h-full border-2 border-dashed rounded-lg p-8">
                    <div className="text-center">
                        <Lightbulb className="mx-auto h-12 w-12 text-muted-foreground" />
                        <p className="mt-4 text-muted-foreground">Your personalized career suggestions will appear here.</p>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
