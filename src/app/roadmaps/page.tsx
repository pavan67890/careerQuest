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
import { ChevronsUpDown, Loader2, Play, Footprints } from "lucide-react"
import { getRoadmapDescription } from "@/ai/flows/interactive-roadmap-explorer-descriptions"
import { after10th, after12th, boardGameSteps, type RoadmapItem } from "@/lib/roadmap-data"



function FlowchartNode({ item }: { item: RoadmapItem }) {
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const isLeafNode = !item.children || item.children.length === 0;


  const fetchDescription = async () => {
    if (description || isLoading) return
    setIsLoading(true)
    try {
      const res = await getRoadmapDescription({ mode: "Flowchart", choice: item.title })
      setDescription(res.description)
    } catch (e) {
      setDescription("Could not load description.")
    } finally {
      setIsLoading(false)
    }
  }

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
        <Button variant="ghost" className="w-full justify-between text-left h-auto py-2" onClick={fetchDescription}>
          <span className="font-semibold">{item.title}</span>
          <ChevronsUpDown className="h-4 w-4 shrink-0" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 p-2">
        {(isLoading || description) && (
             <div className="p-3 bg-secondary rounded-md text-sm">
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin"/> : description}
            </div>
        )}
        {item.children.map((child, index) => (
          <FlowchartNode key={index} item={child} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

function RoadmapFlow({root}: {root: RoadmapItem}) {
    return (
        <div className="p-2 bg-secondary font-semibold rounded-md text-center mb-4">
            {root.title}
        </div>
    )
}

export default function RoadmapExplorerPage() {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState({ title: "", description: "" })
    const [isLoading, setIsLoading] = useState(false)
    
    const handleBoardStepClick = async (step: string) => {
        setModalOpen(true)
        setModalContent({ title: step, description: ""})
        setIsLoading(true)
        try {
            const res = await getRoadmapDescription({ mode: "Board Game", choice: step })
            setModalContent({ title: step, description: res.description })
        } catch (e) {
            setModalContent({ title: step, description: "Could not load description."})
        } finally {
            setIsLoading(false)
        }
    }

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-headline font-bold">Interactive Roadmap Explorer</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Visualize your career journey in two different and exciting ways.
        </p>
      </div>
      <Tabs defaultValue="after-12th" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
          <TabsTrigger value="after-12th">After 12th</TabsTrigger>
          <TabsTrigger value="after-10th">After 10th</TabsTrigger>
          <TabsTrigger value="boardgame">Board Game Mode</TabsTrigger>
        </TabsList>
        <TabsContent value="after-12th" className="mt-8">
          <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-headline font-semibold mb-4 text-center">Career Paths After 12th</h2>
            {after12th.map((item, index) => (
              <FlowchartNode key={index} item={item} />
            ))}
          </div>
        </TabsContent>
         <TabsContent value="after-10th" className="mt-8">
          <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-headline font-semibold mb-4 text-center">Career Paths After 10th</h2>
            {after10th.map((item, index) => (
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
                {isLoading ? <Loader2 className="h-6 w-6 animate-spin mx-auto"/> : modalContent.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
