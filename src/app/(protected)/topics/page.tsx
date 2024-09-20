"use client";

import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SearchIcon, UserIcon, BookOpenIcon, TagIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Category, Topic } from "@prisma/client";
import { TopicWithRelations } from "@/lib/types";
import loading from "./loading";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [topics, setTopics] = useState<TopicWithRelations[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const router = useRouter();

  const fetchCategories = async () => {
    try {
      const response = await fetch(`/api/categories/`);
      if (!response.ok) throw new Error("Failed to fetch categories");
      const result = await response.json();
      console.log(result.data);
      setCategories(result.data);
    } catch (err) {
      setError("Error fetching category data");
    }
  };

  const fetchTopics = async () => {
    try {
      const response = await fetch(`/api/topics/`);
      if (!response.ok) throw new Error("Failed to fetch topics");
      const result = await response.json();
      console.log(result.data);
      setTopics(result.data);
    } catch (err) {
      setError("Error fetching topic data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchTopics();
  }, []);

  const filteredTopics = useMemo(() => {
    return topics.filter(
      (topic) =>
        topic.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" ||
          topic.categoryIds.includes(selectedCategory))
    );
  }, [searchTerm, selectedCategory, topics]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-4">DSA Topics</h1>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="relative w-full sm:w-auto flex-grow">
              <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-8 w-full"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {[{ name: "All", id: "all" }, ...categories].map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <ScrollArea className="h-[calc(100vh-200px)]">
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => router.push(`/topics/${topic.id}`)}
                  className="bg-card text-card-foreground rounded-lg shadow-sm p-6 flex flex-col hover:shadow-md cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{topic.name}</h3>
                    <Badge variant="secondary">{topic.name}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {topic.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {topic.authors.map((author, index) => (
                      <span key={index} className="mr-2">
                        {author.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <BookOpenIcon className="h-4 w-4 mr-1" />
                    <span>{topic.chapters?.length ?? 0} topics</span>
                  </div>
                  <div className="flex items-center flex-wrap gap-2 mt-2">
                    <TagIcon className="h-4 w-4 text-muted-foreground" />
                    {topic.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-muted-foreground">
                No topics found. Try adjusting your search or filter.
              </p>
            </div>
          )}
        </ScrollArea>
      </main>
    </div>
  );
}
