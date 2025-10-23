import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// ================== FORMATIONS ==================
export interface Formation {
  id: number;
  title: string;
  description: string;
  image?: string;
  objectifs?: string;
  population?: string;
  duree?: string;
  date?: string;
  type?: "formation" | "service";
  customCode?: string;
}

const FORMATIONS_KEY = "formations";

export const getFormations = async (): Promise<Formation[]> => {
  const data = await redis.get(FORMATIONS_KEY);
  return (data as Formation[]) || [];
};

export const addFormation = async (formation: Formation): Promise<void> => {
  const formations = await getFormations();
  formations.push(formation);
  await redis.set(FORMATIONS_KEY, formations);
};

export const updateFormation = async (
  id: number,
  updates: Partial<Formation>
): Promise<Formation | null> => {
  const formations = await getFormations();
  const index = formations.findIndex((f) => f.id === id);
  if (index === -1) return null;
  formations[index] = { ...formations[index], ...updates };
  await redis.set(FORMATIONS_KEY, formations);
  return formations[index];
};

export const deleteFormation = async (id: number): Promise<boolean> => {
  const formations = await getFormations();
  const newFormations = formations.filter((f) => f.id !== id);
  if (newFormations.length === formations.length) return false;
  await redis.set(FORMATIONS_KEY, newFormations);
  return true;
};

// ================== SERVICES ==================
export interface Service {
  id: number;
  title: string;
  description: string;
  price?: string;
  duree?: string;
}

const SERVICES_KEY = "services";

export const getServices = async (): Promise<Service[]> => {
  const data = await redis.get(SERVICES_KEY);
  return (data as Service[]) || [];
};

export const addService = async (service: Service): Promise<void> => {
  const services = await getServices();
  services.push(service);
  await redis.set(SERVICES_KEY, services);
};

export const updateService = async (
  id: number,
  updates: Partial<Service>
): Promise<Service | null> => {
  const services = await getServices();
  const index = services.findIndex((s) => s.id === id);
  if (index === -1) return null;
  services[index] = { ...services[index], ...updates };
  await redis.set(SERVICES_KEY, services);
  return services[index];
};

export const deleteService = async (id: number): Promise<boolean> => {
  const services = await getServices();
  const newServices = services.filter((s) => s.id !== id);
  if (newServices.length === services.length) return false;
  await redis.set(SERVICES_KEY, newServices);
  return true;
};

// ================== COMMENTS ==================
export interface Comment {
  id: number;
  formationId?: number; // أو serviceId
  user: string;
  message: string;
  date: string;
}

const COMMENTS_KEY = "comments";

export const getComments = async (): Promise<Comment[]> => {
  const data = await redis.get(COMMENTS_KEY);
  return (data as Comment[]) || [];
};

export const addComment = async (comment: Comment): Promise<void> => {
  const comments = await getComments();
  comments.push(comment);
  await redis.set(COMMENTS_KEY, comments);
};

export const deleteComment = async (id: number): Promise<boolean> => {
  const comments = await getComments();
  const newComments = comments.filter((c) => c.id !== id);
  if (newComments.length === comments.length) return false;
  await redis.set(COMMENTS_KEY, newComments);
  return true;
};

// ================== AUTRES (Calendrier des Formations) ==================
export interface CalendarItem {
   id: number
  mois: string
  formation: string
  duree: string
  prixJour: string
  prixTotal: string
}

const AUTRES_KEY = "autres_calendar";

export const getAutres = async (): Promise<CalendarItem[]> => {
  const data = await redis.get(AUTRES_KEY);

  // إذا ما كاين حتى data نرجعو Array فارغ
  if (!data) return [];

  // إذا كانت string، نحاولوا نعملوا JSON.parse
  if (typeof data === "string") {
    try {
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  // إذا كانت data أصلاً array
  if (Array.isArray(data)) return data as CalendarItem[];

  // fallback
  return [];
};


export const addAutre = async (item: CalendarItem): Promise<void> => {
  const autres = await getAutres();
  autres.push(item);
  await redis.set(AUTRES_KEY, autres);
};

export const updateAutre = async (
  id: number,
  updates: Partial<CalendarItem>
): Promise<CalendarItem | null> => {
  const autres = await getAutres();
  const index = autres.findIndex((a) => a.id === id);
  if (index === -1) return null;
  autres[index] = { ...autres[index], ...updates };
  await redis.set(AUTRES_KEY, autres);
  return autres[index];
};

export const deleteAutre = async (id: number): Promise<boolean> => {
  const autres = await getAutres();
  const newAutres = autres.filter((a) => a.id !== id);
  if (newAutres.length === autres.length) return false;
  await redis.set(AUTRES_KEY, newAutres);
  return true;
};

// ================== STATISTICS ==================
export interface Stats {
  experienceYears: number
  successfulProjects: number
  happyClients: number
}

const STATS_KEY = "site_stats"

// ✅ Get Statistics
export const getStats = async (): Promise<Stats> => {
  const data = await redis.get(STATS_KEY)
  return (data as Stats) || {
    experienceYears: 0,
    successfulProjects: 0,
    happyClients: 0,
  }
}

// ✅ Update Statistics
export const updateStats = async (stats: Stats): Promise<void> => {
  await redis.set(STATS_KEY, stats)
}
