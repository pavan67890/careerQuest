import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Badge } from '@/components/ui/badge'
import { Linkedin, Briefcase } from 'lucide-react'

const alumniData = [
  {
    id: 'alumni-1',
    name: "Jane Doe",
    degree: "B.Tech in CS",
    job: "Software Engineer @ Google",
    journey: "Started as an intern, now leads a team developing core search features. Passionate about mentoring new grads."
  },
  {
    id: 'alumni-2',
    name: "John Smith",
    degree: "MBBS",
    job: "Cardiologist @ City Hospital",
    journey: "Completed residency in internal medicine, followed by a fellowship in cardiology. Now a leading heart surgeon."
  },
  {
    id: 'alumni-3',
    name: "Emily White",
    degree: "B.A. in Design",
    job: "UX Designer @ Figma",
    journey: "Freelanced for two years before joining a startup. Her portfolio on accessible design got her noticed by Figma."
  },
  {
    id: 'alumni-4',
    name: "Michael Brown",
    degree: "MBA",
    job: "Product Manager @ Microsoft",
    journey: "Transitioned from a technical role to product management after his MBA. Launched two successful Azure services."
  },
  {
    id: 'alumni-5',
    name: "Sarah Green",
    degree: "PhD in Biology",
    job: "Research Scientist @ Genentech",
    journey: "Her doctoral research on gene editing paved the way for her current role, where she works on cancer therapies."
  },
  {
    id: 'alumni-6',
    name: "David Black",
    degree: "B.Com",
    job: "Investment Banker @ Goldman Sachs",
    journey: "A numbers whiz from the start, he quickly moved up the ranks by managing several high-profile IPOs."
  },
]

export default function AlumniStoriesPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-headline font-bold">Alumni Stories</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Get inspired by the journeys of those who came before you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {alumniData.map((alumnus) => {
          const image = PlaceHolderImages.find((img) => img.id === alumnus.id)
          return (
            <Card key={alumnus.id} className="overflow-hidden group relative shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                    {image && (
                         <Image
                            src={image.imageUrl}
                            width={400}
                            height={400}
                            alt={`Photo of ${alumnus.name}`}
                            data-ai-hint={image.imageHint}
                            className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
                        />
                    )}
                   <div className="p-6 bg-card">
                       <h3 className="text-xl font-headline font-bold">{alumnus.name}</h3>
                       <p className="text-sm text-muted-foreground">{alumnus.degree}</p>
                       <Badge variant="secondary" className="mt-2 flex items-center w-fit">
                           <Briefcase className="w-3 h-3 mr-2" />
                           {alumnus.job}
                        </Badge>
                   </div>
                   
                   {/* Hover effect overlay */}
                   <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="font-bold mb-2">Career Journey</h4>
                        <p className="text-sm mb-4">{alumnus.journey}</p>
                        <Button variant="outline" size="sm" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                           <Link href="#" target="_blank">
                               <Linkedin className="w-4 h-4 mr-2" /> Connect
                           </Link>
                        </Button>
                   </div>
                </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
