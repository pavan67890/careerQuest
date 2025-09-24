"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronsUpDown, Play, Footprints } from "lucide-react"
import { after10th, after12th, boardGameSteps, type RoadmapItem, boardGameDescriptions } from "@/lib/roadmap-data"

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
    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState({ title: "", description: "" })
    
    const handleBoardStepClick = (step: string) => {
        setModalOpen(true)
        const description = boardGameDescriptions[step] || "More information about this step will be available soon."
        setModalContent({ title: step, description: description })
    }

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
            <div className="max-w-5xl mx-auto p-6 border rounded-lg shadow-lg">
                <h2 className="text-xl font-headline font-semibold mb-8 text-center">Your Career Adventure</h2>
                <div className="relative flex flex-wrap justify-center items-center gap-4">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 hidden md:block"></div>
                    {boardGameSteps.map((step, index) => (
                        <div key={step} className="relative z-10 flex flex-col items-center">
                            <Button
                                variant="outline"
                                className="h-24 w-24 rounded-full flex items-center justify-center text-center p-2 shadow-md bg-background hover:bg-secondary transition-all duration-300"
                                onClick={() => handleBoardStepClick(step)}
                            >
                                {step}
                            </Button>
                            <span className="text-xs mt-2 text-muted-foreground">Step {index+1}</span>
                        </div>
                    ))}
                    <Play className="h-10 w-10 text-primary absolute -left-12 top-1/2 -translate-y-1/2 hidden md:block"/>
                    <Footprints className="h-10 w-10 text-primary absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block" />
                </div>
            </div>
        </TabsContent>
      </Tabs>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-headline">{modalContent.title}</DialogTitle>
            <DialogDescription className="pt-4 text-base">
                {modalContent.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
