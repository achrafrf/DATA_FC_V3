import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/app/api/formations/formations.json");

export interface Formation {
  id: number;
  title: string;
  description: string;
  code: string;
  image?: string;
  objectifs?: string;
  population?: string;
  duree?: string;
  date?: string;
  type?: "formation" | "service";
}

export const getFormations = (): Formation[] => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data) as Formation[];
};

export const saveFormations = (formations: Formation[]) => {
  fs.writeFileSync(filePath, JSON.stringify(formations, null, 2));
};
