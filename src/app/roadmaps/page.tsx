"use client"

import { useState } from "react"
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown, Gamepad2 } from "lucide-react"
import { after10th, after12th, type RoadmapItem } from "@/lib/roadmap-data"

function FlowchartNode({ item }: { item: RoadmapItem }) {
  const isLeafNode = !item.children || item.children.length === 0;

  if (isLeafNode) {
    return (
        <div className="ml-8 pl-4 py-2 border-l border-dashed">
            <p className="font-semibold">{item.title}</p>
        </div>
    )
  }

  return (
    <Collapsible className="ml-8 pl-4 border-l border-dashed">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between text-left h-auto py-2">
          <span className="font-semibold">{item.title}</span>
          <ChevronsUpDown className="h-4 w-4 shrink-0" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 p-2">
        {item.children.map((child, index) => (
          <FlowchartNode key={index} item={child} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default function RoadmapExplorerPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-headline font-bold">Interactive Roadmap Explorer</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Visualize your career journey in two different and exciting ways.
        </p>
      </div>
      <Tabs defaultValue="flowchart" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="flowchart">Flowchart</TabsTrigger>
          <TabsTrigger value="boardgame">Board Game Mode</TabsTrigger>
        </TabsList>
        <TabsContent value="flowchart" className="mt-8">
          <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-headline font-semibold mb-4 text-center">Career Paths After 10th</h2>
            {after10th.map((item, index) => (
              <FlowchartNode key={index} item={item} />
            ))}
             <h2 className="text-xl font-headline font-semibold my-6 pt-6 border-t text-center">Career Paths After 12th</h2>
            {after12th.map((item, index) => (
              <FlowchartNode key={index} item={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="boardgame" className="mt-8">
            <div className="max-w-3xl mx-auto p-10 border rounded-lg shadow-lg text-center flex flex-col items-center">
                <h2 className="text-xl font-headline font-semibold mb-4">Your Career Adventure</h2>
                <p className="text-muted-foreground mb-8">
                    Ready to play? Click the button below to start your career adventure game on a new site.
                </p>
                <Button asChild size="lg">
                    <Link href="https://example.com/career-game" target="_blank">
                        <Gamepad2 className="mr-2 h-5 w-5" />
                        Start Game
                    </Link>
                </Button>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
