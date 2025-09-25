
import { Card, CardContent } from "@/components/ui/card"
import { Button } from '@/components/ui/button'

const categories = ["All", "Subject-wise", "Skills", "Govt Resources"];

const ebooks = [
  { id: 'ebook-1', title: "Fundamentals of Physics", category: "Subject-wise" },
  { id: 'ebook-2', title: "Organic Chemistry", category: "Subject-wise" },
  { id: 'ebook-3', title: "Calculus Explained", category: "Subject-wise" },
  { id: 'ebook-4', title: "The Art of Public Speaking", category: "Skills" },
  { id: 'ebook-5', title: "Guide to Govt Exams", category: "Govt Resources" },
];

export default function StudyHubPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-headline font-bold">Study Hub</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Your one-stop library for academic and skill-based resources.
        </p>
      </div>
      
      <div className="flex justify-center mb-8 gap-2">
        {categories.map((category) => (
          <Button key={category} variant={category === "All" ? "default" : "secondary"}>
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {ebooks.map((ebook) => {
          return (
            <Card key={ebook.id} className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="flex items-center justify-center p-4 bg-secondary aspect-[4/5] group-hover:bg-primary/20 transition-colors">
                    <h3 className="font-headline text-center font-semibold text-lg text-secondary-foreground">{ebook.title}</h3>
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-sm truncate">{ebook.title}</h3>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
