"use client";
import { useState, useRef, useEffect } from "react";
import {
  aiConsultantChatbot,
  type AIConsultantChatbotOutput,
} from "@/ai/flows/ai-consultant-chatbot";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Loader2,
  User,
  Bot,
  MessageSquarePlus,
  Trash2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function AiConsultantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result: AIConsultantChatbotOutput = await aiConsultantChatbot({
        query: input,
      });
      const botMessage: Message = { role: "bot", text: result.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: "bot",
        text: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Sidebar for chat history */}
      <aside className="w-72 hidden md:flex flex-col border-r bg-secondary/50">
        <div className="p-4 border-b">
          <h2 className="text-xl font-headline font-semibold">Chat History</h2>
        </div>
        <div className="flex-1 p-4 space-y-2">
            <Button className="w-full justify-start" variant="secondary">
                <MessageSquarePlus className="mr-2 h-4 w-4" /> New Chat
            </Button>
        </div>
        <div className="p-4 border-t">
            <Button className="w-full justify-start" variant="ghost">
                <Trash2 className="mr-2 h-4 w-4" /> Clear History
            </Button>
        </div>
      </aside>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
          <div className="max-w-3xl mx-auto">
            {messages.length === 0 ? (
              <div className="flex h-[calc(100vh-14rem)] items-center justify-center">
                <Card className="w-full max-w-md text-center">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">
                      AI Career Consultant
                    </CardTitle>
                    <CardDescription>
                      Ask me anything about careers, colleges, or courses!
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-4",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {msg.role === "bot" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          <Bot />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "max-w-lg rounded-lg p-3 text-sm",
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary"
                      )}
                    >
                      {msg.text}
                    </div>
                    {msg.role === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          <User />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-start gap-4 justify-start">
                        <Avatar className="h-8 w-8"><AvatarFallback><Bot /></AvatarFallback></Avatar>
                        <div className="bg-secondary rounded-lg p-3">
                            <Loader2 className="h-5 w-5 animate-spin" />
                        </div>
                    </div>
                )}
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="border-t bg-background p-4">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex items-center gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a career path..."
              className="flex-1 resize-none"
              rows={1}
              onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                  }
              }}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
