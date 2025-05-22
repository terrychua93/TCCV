import { TechToolName } from "./tech-tool-name.schema";

export interface ProjectSchema {
  title: string;
  description: string;
  companyLogo: string;
  comapanyName: string;
  position: string;
  responsibilities: Responsibilities[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured: boolean | null;
  tools: ToolsData[];
}


export interface ToolsData {
  name: TechToolName;
}

export interface Responsibilities {
  title: string;
  description: string;
}