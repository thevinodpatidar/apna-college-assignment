"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Youtube,
  Code,
  FileText,
  CheckCircle,
  StepBack,
  ArrowLeftIcon,
  Undo2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "next/navigation";
import { TopicWithRelations } from "@/lib/types";

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const colorMap = {
    EASY: "bg-green-500",
    MEDIUM: "bg-yellow-500",
    HARD: "bg-red-500",
  };
  return (
    <Badge
      className={`${colorMap[difficulty as keyof typeof colorMap]} text-white`}
    >
      {difficulty}
    </Badge>
  );
};

export default function TopicPage() {
  const [topic, setTopic] = useState<TopicWithRelations>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  console.log(id);

  const fetchTopics = async (id: string) => {
    try {
      const response = await fetch(`/api/topics/${id}`);
      if (!response.ok) throw new Error("Failed to fetch topic");
      const result = await response.json();
      console.log(result.data);
      setTopic(result.data);
    } catch (err) {
      setError("Error fetching topic data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopics(id as string);
  }, [id]);

  const [completedProblems, setCompletedProblems] = useState<string[]>([]);

  const toggleProblemCompletion = (problemId: string) => {
    setCompletedProblems((prev) =>
      prev.includes(problemId)
        ? prev.filter((id) => id !== problemId)
        : [...prev, problemId]
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">{error}</div>
    );
  }

  if (!topic) {
    return (
      <div className="flex items-center justify-center h-screen">
        Topic not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <Undo2
            className="h-6 w-6 hover:cursor-pointer"
            onClick={() => history.back()}
          />
          <h1 className="text-3xl font-bold">{topic.name}</h1>
        </div>
        <DifficultyBadge difficulty={topic.difficulty} />
      </div>

      <Tabs defaultValue="chapters" className="w-full">
        <TabsList>
          <TabsTrigger value="chapters">Chapters</TabsTrigger>
          <TabsTrigger value="all-problems">All Problems</TabsTrigger>
        </TabsList>
        <TabsContent value="chapters">
          <Accordion type="single" collapsible className="w-full">
            {topic.chapters.map((chapter) => (
              <AccordionItem value={chapter.id} key={chapter.id}>
                <AccordionTrigger>{chapter.name}</AccordionTrigger>
                <AccordionContent>
                  <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    {chapter.problems.map((problem) => (
                      <div
                        key={problem.id}
                        className="mb-4 p-4 border rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">
                            {problem.name}
                          </h3>
                          <DifficultyBadge difficulty={problem.difficulty} />
                        </div>
                        <div className="flex space-x-2 mb-2">
                          {problem.youtubeLink && (
                            <a
                              href={problem.youtubeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button variant="outline" size="sm">
                                <Youtube className="mr-2 h-4 w-4" />
                                Video
                              </Button>
                            </a>
                          )}
                          {problem.leetcodeLink && (
                            <a
                              href={problem.leetcodeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button variant="outline" size="sm">
                                <Code className="mr-2 h-4 w-4" />
                                LeetCode
                              </Button>
                            </a>
                          )}
                          {problem.articleLink && (
                            <a
                              href={problem.articleLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button variant="outline" size="sm">
                                <FileText className="mr-2 h-4 w-4" />
                                Article
                              </Button>
                            </a>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleProblemCompletion(problem.id)}
                          className={
                            completedProblems.includes(problem.id)
                              ? "text-green-500"
                              : ""
                          }
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          {completedProblems.includes(problem.id)
                            ? "Completed"
                            : "Mark as Complete"}
                        </Button>
                      </div>
                    ))}
                  </ScrollArea>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        <TabsContent value="all-problems">
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            {topic.chapters.flatMap((chapter) =>
              chapter.problems.map((problem) => (
                <div key={problem.id} className="mb-4 p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{problem.name}</h3>
                    <DifficultyBadge difficulty={problem.difficulty} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Chapter: {chapter.name}
                  </p>
                  <div className="flex space-x-2 mb-2">
                    {problem.youtubeLink && (
                      <a
                        href={problem.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <Youtube className="mr-2 h-4 w-4" />
                          Video
                        </Button>
                      </a>
                    )}
                    {problem.leetcodeLink && (
                      <a
                        href={problem.leetcodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <Code className="mr-2 h-4 w-4" />
                          LeetCode
                        </Button>
                      </a>
                    )}
                    {problem.articleLink && (
                      <a
                        href={problem.articleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Article
                        </Button>
                      </a>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleProblemCompletion(problem.id)}
                    className={
                      completedProblems.includes(problem.id)
                        ? "text-green-500"
                        : ""
                    }
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {completedProblems.includes(problem.id)
                      ? "Completed"
                      : "Mark as Complete"}
                  </Button>
                </div>
              ))
            )}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
