/**
 * Single source of truth for all journal articles.
 *
 * ADDING A NEW ARTICLE:
 * 1. Create the article content page at src/pages/articles/[slug].astro
 *    by adding a case in getArticleBySlug (or extend this to support
 *    markdown/content collections later).
 * 2. Add an entry to the `articles` array below with slug, title,
 *    category, imageKey or imageUrl, author, and publishedDate.
 */

export type ArticleCategory = 'Materials' | 'Technique' | 'Guides';

export interface Article {
	/** URL slug used for /articles/<slug>. Must match the article page. */
	slug: string;
	/** Display title. */
	title: string;
	/** Category for the tag (e.g. MATERIALS, TECHNIQUE, GUIDES). */
	category: ArticleCategory;
	/** Key for the image in the articles page imageMap. Omit if using imageUrl. */
	imageKey?: string;
	/** Optional direct image URL. Use this or imageKey. */
	imageUrl?: string;
	/** Author name. */
	author: string;
	/** ISO date string for display. */
	publishedDate: string;
}

export const articles: Article[] = [
	{
		slug: 'choosing-yarn-for-sensitive-skin',
		title: 'Choosing yarn for sensitive skin',
		category: 'Materials',
		imageKey: 'yarnchoice',
		author: 'Lauren Ibsen',
		publishedDate: '2024-02-20',
	},
	{
		slug: 'how-to-knit-with-comfort-in-mind',
		title: 'How to knit with comfort in mind',
		category: 'Technique',
		imageKey: 'article2',
		author: 'Katica',
		publishedDate: '2024-02-15',
	},
	{
		slug: 'adapting-patterns-for-orthotic-supports',
		title: 'Adapting patterns for orthotic supports',
		category: 'Guides',
		imageKey: 'article3',
		author: 'Katica',
		publishedDate: '2024-02-10',
	},
];

export function getArticleBySlug(slug: string): Article | undefined {
	return articles.find((a) => a.slug === slug);
}

export function getAllArticles(): Article[] {
	return articles;
}
