import { MetadataRoute } from 'next'
import { getFormations } from './api/formations/data' // فرضنا عندك function تجيب جميع formations

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const formations = await getFormations()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://datafc.ma/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://datafc.ma/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://datafc.ma/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://datafc.ma/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://datafc.ma/autre/demande_devis',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // صفحات التكوينات الديناميكية
  const formationPages: MetadataRoute.Sitemap = formations.map(f => ({
    url: `https://datafc.ma/Nosformations/${f.code}/${f.title.replace(/\s+/g, '_')}`,
    lastModified: new Date(f.date || new Date()),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...formationPages]
}
