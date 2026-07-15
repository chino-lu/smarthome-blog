import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'HomeIQ Blog — Notizen von der Werkbank',
    description: 'Quellenbasierte Beiträge zu Smart Home, KNX und Gebäudeautomation.',
    site: context.site ?? 'https://chino-lu.github.io/smarthome-blog/',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}/`,
      categories: ['Smart Home', 'KNX', 'Home Assistant', 'Gebäudeautomation'],
    })),
    customData: `<language>de-de</language>`,
  });
}