import { Author, Category, Chapter, Problem, Tag, Topic } from "@prisma/client";

export type ChapterWithRelations = Chapter & {
  problems: Problem[];
};

export type TopicWithRelations = Topic & {
  chapters: ChapterWithRelations[];
  authors: Author[];
  tags: Tag[];
  categories: Category[];
};
