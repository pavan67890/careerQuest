import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Bot, Compass, TestTube2 } from 'lucide-react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const quickLinks = [
  {
    title: 'Start Career Test',
    description: 'Discover your strengths and interests.',
    href: '/career-test',
    icon: <TestTube2 className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Explore Roadmaps',
    description: 'Visualize your career and education path.',
    href: '/roadmaps',
    icon: <Compass className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Ask AI Consultant',
    description: 'Get instant answers to your career questions.',
    href: '/ai-consultant',
    icon: <Bot className="w-8 h-8 text-primary" />,
  },
]

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'home-banner')

  return (
    <div className="flex flex-col items-center">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="lg:leading-tighter text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                One-Stop AI Career & Education Advisor
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                CareerQuest helps students and parents navigate the complexities of career and education planning with personalized, AI-driven insights.
              </p>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/career-test">Start Your Journey <ArrowRight className="ml-2" /></Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {heroImage && (
                 <Image
                    src={heroImage.imageUrl}
                    width={600}
                    height={400}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <Link href={link.href} key={link.title} className="group">
                <Card className="h-full transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {link.icon}
                    <CardTitle className="font-headline">{link.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
