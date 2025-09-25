
"use client";

import {
  Briefcase,
  CalendarCheck,
  GraduationCap,
  FileText,
  Lightbulb,
  Building,
  Users,
  CircleDollarSign,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timelineData = [
  {
    icon: <CalendarCheck className="h-5 w-5 text-white" />,
    iconBg: "bg-green-500",
    date: "Sep 2024",
    title: "College Applications",
    description: "Submit applications for top 5 chosen universities.",
    status: "Completed",
    statusVariant: "default" as const,
    colleges: [
      {
        name: "IIT Bombay",
        seats: 120,
        fee: "₹2.5 Lakhs/year",
        courses: ["Computer Science", "Mechanical Engg.", "Electrical Engg."],
      },
      {
        name: "St. Stephen's College, Delhi",
        seats: 400,
        fee: "₹45,000/year",
        courses: ["B.A. Economics", "B.Sc. Physics", "B.A. History"],
      },
      {
        name: "AIIMS, New Delhi",
        seats: 107,
        fee: "₹6,500 (Full Course)",
        courses: ["MBBS"],
      },
    ],
  },
  {
    icon: <FileText className="h-5 w-5 text-white" />,
    iconBg: "bg-blue-500",
    date: "Jan 2025",
    title: "Entrance Exams",
    description:
      "Prepare for and take the required entrance examinations (JEE, NEET, etc.)",
    status: "In Progress",
    statusVariant: "secondary" as const,
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-white" />,
    iconBg: "bg-yellow-500",
    date: "Jun 2025",
    title: "Choose Specialization",
    description:
      "Finalize the major/specialization for your undergraduate degree.",
    status: "Upcoming",
    statusVariant: "outline" as const,
  },
  {
    icon: <Briefcase className="h-5 w-5 text-white" />,
    iconBg: "bg-purple-500",
    date: "May 2027",
    title: "Summer Internship",
    description:
      "Secure and complete an internship in your field of interest.",
    status: "Upcoming",
    statusVariant: "outline" as const,
  },
  {
    icon: <Lightbulb className="h-5 w-5 text-white" />,
    iconBg: "bg-red-500",
    date: "Mar 2028",
    title: "Final Year Project",
    description: "Begin ideation and planning for the final year project.",
    status: "Upcoming",
    statusVariant: "outline" as const,
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

      <div className="relative max-w-4xl mx-auto">
        <div
          className="absolute left-9 top-0 h-full w-0.5 bg-border"
          aria-hidden="true"
        ></div>
        <div className="relative flex flex-col gap-y-12">
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

                {item.colleges && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {item.colleges.map((college) => (
                      <Card key={college.name} className="shadow-sm">
                        <CardHeader className="p-4">
                          <CardTitle className="text-base font-bold flex items-center gap-2">
                             <Building className="h-4 w-4" /> {college.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 space-y-3 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Users className="h-4 w-4" />
                                <span>{college.seats} seats available</span>
                            </div>
                             <div className="flex items-center gap-2 text-muted-foreground">
                                <CircleDollarSign className="h-4 w-4" />
                                <span>Fee: {college.fee}</span>
                            </div>
                             <div className="flex items-start gap-2 text-muted-foreground">
                                <BookOpen className="h-4 w-4 mt-1" />
                                <div>
                                    <span className="font-medium text-foreground">Courses:</span>
                                    <ul className="list-disc pl-5 mt-1">
                                        {college.courses.map(course => <li key={course}>{course}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

