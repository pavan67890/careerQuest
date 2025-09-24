import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DollarSign, BarChart2, Heart, Shield } from "lucide-react"

const careers = [
  {
    name: "Software Engineer",
    attributes: [
      { name: "Salary", value: 85, icon: <DollarSign className="w-5 h-5 text-green-500"/> },
      { name: "Growth", value: 90, icon: <BarChart2 className="w-5 h-5 text-blue-500"/> },
      { name: "Work-Life Balance", value: 70, icon: <Heart className="w-5 h-5 text-red-500"/> },
      { name: "Stability", value: 80, icon: <Shield className="w-5 h-5 text-gray-500"/> },
    ],
  },
  {
    name: "Doctor",
    attributes: [
      { name: "Salary", value: 95, icon: <DollarSign className="w-5 h-5 text-green-500"/> },
      { name: "Growth", value: 75, icon: <BarChart2 className="w-5 h-5 text-blue-500"/> },
      { name: "Work-Life Balance", value: 40, icon: <Heart className="w-5 h-5 text-red-500"/> },
      { name: "Stability", value: 95, icon: <Shield className="w-5 h-5 text-gray-500"/> },
    ],
  },
]

export default function CareerArenaPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-headline font-bold">Career Arena</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Compare different careers side-by-side to make an informed decision.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {careers.map((career) => (
          <Card key={career.name} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{career.name}</CardTitle>
              <CardDescription>Attribute Comparison</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {career.attributes.map((attr) => (
                <div key={attr.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium flex items-center gap-2">
                      {attr.icon}
                      {attr.name}
                    </span>
                    <span className="text-sm font-bold">{attr.value}%</span>
                  </div>
                  <Progress value={attr.value} aria-label={`${attr.name} rating`} />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
