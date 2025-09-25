"use client";

import {
  Briefcase,
  CalendarCheck,
  GraduationCap,
  FileText,
  Lightbulb,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const timelineData = [
  {
    icon: <CalendarCheck className="h-5 w-5 text-white" />,
    iconBg: "bg-green-500",
    date: "Sep 2024",
    title: "College Applications",
    description: "Submit applications for top 5 chosen universities.",
    status: "Completed",
    statusVariant: "default",
  },
  {
    icon: <FileText className="h-5 w-5 text-white" />,
    iconBg: "bg-blue-500",
    date: "Jan 2025",
    title: "Entrance Exams",
    description:
      "Prepare for and take the required entrance examinations (JEE, NEET, etc.)",
    status: "In Progress",
    statusVariant: "secondary",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-white" />,
    iconBg: "bg-yellow-500",
    date: "Jun 2025",
    title: "Choose Specialization",
    description:
      "Finalize the major/specialization for your undergraduate degree.",
    status: "Upcoming",
    statusVariant: "outline",
  },
  {
    icon: <Briefcase className="h-5 w-5 text-white" />,
    iconBg: "bg-purple-500",
    date: "May 2027",
    title: "Summer Internship",
    description:
      "Secure and complete an internship in your field of interest.",
    status: "Upcoming",
    statusVariant: "outline",
  },
  {
    icon: <Lightbulb className="h-5 w-5 text-white" />,
    iconBg: "bg-red-500",
    date: "Mar 2028",
    title: "Final Year Project",
    description: "Begin ideation and planning for the final year project.",
    status: "Upcoming",
    statusVariant: "outline",
  },
];

export default function TimelineTrackerPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-headline font-bold">Timeline Tracker</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Visualize your academic and career journey, and stay on top of
          important milestones.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div
          className="absolute left-9 top-0 h-full w-0.5 bg-border"
          aria-hidden="true"
        ></div>
        <div className="relative flex flex-col gap-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start">
              <div className="flex items-center justify-center h-9 w-9 rounded-full ring-8 ring-background z-10">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${item.iconBg}`}
                >
                  {item.icon}
                </div>
              </div>
              <div className="ml-8 w-full overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-muted-foreground">
                    {item.date}
                  </p>
                  <Badge variant={item.statusVariant}>{item.status}</Badge>
                </div>
                <h3 className="font-headline text-lg font-semibold mt-1">
                  {item.title}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
