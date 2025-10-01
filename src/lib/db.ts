import { Redis } from "@upstash/redis";

// ⚡ إنشاء اتصال مع Upstash Redis REST
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// المفتاح الرئيسي لتخزين formations
const KV_KEY = "formations";

// تعريف النوع
export interface Formation {
  id: number;
  title: string;
  description: string;
  image?: string;
  objectifs?: string;
  population?: string;
  duree?: string;
  code?: string;
}

// جلب جميع formations
export const getFormations = async (): Promise<Formation[]> => {
  const data = await redis.get(KV_KEY);
  return (data as Formation[]) || [];
};

// إضافة formation جديدة
export const addFormation = async (formation: Formation): Promise<Formation> => {
  const current = await getFormations();
  current.push(formation);
  await redis.set(KV_KEY, current);
  return formation;
};

// تعديل formation
export const updateFormation = async (id: number, updated: Partial<Formation>): Promise<Formation | null> => {
  const current = await getFormations();
  const index = current.findIndex(f => f.id === id);
  if (index === -1) return null;
  current[index] = { ...current[index], ...updated };
  await redis.set(KV_KEY, current);
  return current[index];
};

// حذف formation
export const deleteFormation = async (id: number): Promise<boolean> => {
  const current = await getFormations();
  const filtered = current.filter(f => f.id !== id);
  await redis.set(KV_KEY, filtered);
  return true;
};
