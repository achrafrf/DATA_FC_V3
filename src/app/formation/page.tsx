"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    title: "Engineering Fundamentals",
    description: "Introduction to engineering principles and practices.",
  },
  {
    title: "Data Analysis Techniques",
    description: "Methods for analyzing and interpreting data effectively.",
  },
  {
    title: "Consulting Strategies",
    description: "Strategies and techniques for effective consulting.",
  },
];

const objectives = [
  {
    title: "Innovative Solutions",
    description: "Developing innovative solutions for complex problems.",
  },
  {
    title: "Efficient Practices",
    description: "Implementing efficient practices for optimal performance.",
  },
  {
    title: "Client Commitment",
    description: "Demonstrating commitment to client satisfaction and success.",
  },
];

export default function FormationPage() {
  return (
    <div className="container mx-auto py-12">
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
              <CardHeader>
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{course.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index} className="transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
              <CardHeader>
                <CardTitle className="text-xl">{objective.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{objective.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

