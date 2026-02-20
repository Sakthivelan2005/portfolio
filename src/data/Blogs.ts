export interface Blog {
  id: number;
  title: string;
  summary: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Understanding MERN Architecture",
    summary: "Deep dive into building scalable MERN applications.",
    date: "Feb 2026",
  },
  {
    id: 2,
    title: "Optimizing MongoDB Queries",
    summary: "Best practices for database performance.",
    date: "Jan 2026",
  },
];
