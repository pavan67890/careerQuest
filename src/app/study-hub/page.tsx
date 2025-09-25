
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Book, FlaskConical, Globe, Library } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = ["All", "Subject-wise", "Skills", "Govt Resources"];

const ebooks = [
  { id: 'ebook-1', title: "Fundamentals of Physics", category: "Subject-wise" },
  { id: 'ebook-2', title: "Organic Chemistry", category: "Subject-wise" },
  { id: 'ebook-3', title: "Calculus Explained", category: "Subject-wise" },
  { id: 'ebook-4', title: "The Art of Public Speaking", category: "Skills" },
  { id: 'ebook-5', title: "Guide to Govt Exams", category: "Govt Resources" },
];

function EbookIcon({ category }: { category: string }) {
    switch (category) {
        case "Subject-wise":
            return <FlaskConical className="w-10 h-10 text-primary" />
        case "Skills":
            return <Book className="w-10 h-10 text-primary" />
        case "Govt Resources":
            return <Globe className="w-10 h-10 text-primary" />
        default:
            return <Library className="w-10 h-10 text-primary" />
    }
}

export default function StudyHubPage() {
    const [filter, setFilter] = useState("All");

    const filteredEbooks = ebooks.filter(
        (ebook) => filter === "All" || ebook.category === filter
    );

    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-headline font-bold">Study Hub</h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Your one-stop library for academic and skill-based resources.
                </p>
            </div>
            
            <div className="flex justify-center mb-12 gap-2">
                {categories.map((category) => (
                    <Button 
                        key={category} 
                        variant={filter === category ? "default" : "secondary"}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
                {filteredEbooks.map((ebook, index) => {
                return (
                    <div 
                        key={ebook.id} 
                        className="flex flex-col items-center gap-4 text-center cursor-pointer group animate-in fade-in-50"
                        style={{animationDelay: `${index * 100}ms`}}
                    >
                        <div className={cn(
                            "w-32 h-32 rounded-full bg-secondary flex items-center justify-center", 
                            "transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:bg-primary/20"
                        )}>
                            <EbookIcon category={ebook.category} />
                        </div>
                        <h3 className="font-semibold text-sm w-32">{ebook.title}</h3>
                    </div>
                )
                })}
            </div>
        </div>
    )
}
