"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { questions } from '@/lib/career-test-questions'

export default function CareerTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const router = useRouter()
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })
  }

  const handleSubmit = () => {
    const counts: Record<string, number> = { a: 0, b: 0, c: 0, d: 0 }
    Object.values(answers).forEach(answer => {
      const type = answer.slice(-1) // get last character ('a', 'b', 'c', or 'd')
      if (counts[type] !== undefined) {
        counts[type]++
      }
    })

    const profile = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    )

    router.push(`/career-test/results/${profile}`)
  }

  const isLastQuestion = currentQuestion === questions.length - 1;
  const currentCategory = questions[currentQuestion].category;

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-headline font-bold text-center mb-2">Career Test</h1>
          <p className="text-center text-muted-foreground">Answer these questions to discover your ideal career path.</p>
        </div>
        
        <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
                <span className="text-sm font-semibold text-primary">{currentCategory}</span>
                <span className="text-sm text-muted-foreground">{currentQuestion + 1} / {questions.length}</span>
            </div>
            <Progress value={progress} className="w-full" />
            <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline">Question {questions[currentQuestion].id}</CardTitle>
                <CardDescription className="text-lg pt-2">{questions[currentQuestion].question}</CardDescription>
            </CardHeader>
            <CardContent>
                <RadioGroup 
                    value={answers[questions[currentQuestion].id]}
                    onValueChange={handleAnswerChange} 
                    className="space-y-4"
                >
                {questions[currentQuestion].options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 p-3 rounded-md border has-[:checked]:bg-secondary has-[:checked]:border-primary transition-all">
                        <RadioGroupItem value={option.id} id={option.id} />
                        <Label htmlFor={option.id} className="text-base cursor-pointer flex-1">{option.label}</Label>
                    </div>
                ))}
                </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrev} disabled={currentQuestion === 0}>
                    <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                {isLastQuestion ? (
                     <Button onClick={handleSubmit} disabled={!answers[questions[currentQuestion].id]}>
                        Submit & See Results <Check className="ml-2 h-4 w-4" />
                    </Button>
                ) : (
                    <Button onClick={handleNext} disabled={!answers[questions[currentQuestion].id]}>
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  )
}
