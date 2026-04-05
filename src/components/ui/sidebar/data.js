import { Bot, Brain, Library, TvMinimal, Rows3,Zap, TvMinimalPlay, Shield, BookOpenCheck, Crosshair, IdCard } from "lucide-react";

export const links = [
  {
    section: "MY PROJECTS",
    items: [
      { title: "Agents", route: "/agents", icon: Bot },
      { title: "AI Models", route: "/ai-models", icon: Brain },
      { title: "Library", route: "/library", icon: Library },
    ],
  },
  {
    section: "ORCHETRATOR",
    items: [
      { title: "Published", route: "/published", icon: Bot },
      { title: "Machines", route: "/machines", icon: TvMinimal },
      { title: "Queues", route: "/queues", icon: Rows3 },
      { title: "Triggers", route: "/triggers", icon: Zap },
      { title: "Jobs", route: "/jobs", icon: TvMinimalPlay },
      { title: "Executions", route: "/executions", icon: TvMinimalPlay },
      { title: "Vault", route: "/vault", icon: Shield },
      { title: "Knowledge Base", route: "/knowledge-base", icon: BookOpenCheck },
      { title: "Key Store", route: "/key-store", icon: Library },
    ],
  },
  {
    section: "ADMIN",
    items: [
      { title: "Tenant", route: "/tenant", icon: IdCard },
      { title: "Integrations", route: "/integrations", icon: Crosshair },
    ],
  },
];
