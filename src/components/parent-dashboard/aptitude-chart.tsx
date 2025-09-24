"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { skill: "Analytical", score: 85, fill: "var(--color-analytical)" },
  { skill: "Creative", score: 78, fill: "var(--color-creative)" },
  { skill: "Logical", score: 92, fill: "var(--color-logical)" },
  { skill: "Interpersonal", score: 65, fill: "var(--color-interpersonal)" },
  { skill: "Practical", score: 72, fill: "var(--color-practical)" },
]

const chartConfig = {
  score: {
    label: "Score",
  },
  analytical: {
    label: "Analytical",
    color: "hsl(var(--chart-1))",
  },
  creative: {
    label: "Creative",
    color: "hsl(var(--chart-2))",
  },
  logical: {
    label: "Logical",
    color: "hsl(var(--chart-3))",
  },
  interpersonal: {
    label: "Interpersonal",
    color: "hsl(var(--chart-4))",
  },
  practical: {
    label: "Practical",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export default function AptitudeChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="skill"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <YAxis />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Bar dataKey="score" radius={8} />
      </BarChart>
    </ChartContainer>
  )
}
