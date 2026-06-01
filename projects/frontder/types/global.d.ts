declare global {
  interface Challenge {
    id: string;
    createdAt: string;
    description: string;
    difficulty: number;
    heroImage: string;
    languages: string[];
    slug: string;
    startedCount: number;
    title: string;
    type: string;
  }

  type MinimalChallenge = Pick<
    Challenge,
    "id" | "description" | "heroImage" | "slug" | "title"
  >;
}

export {};
