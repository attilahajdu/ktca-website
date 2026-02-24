/**
 * Single source of truth for all patterns.
 *
 * ADDING A NEW PATTERN (only these steps; no need to edit the collection page layout):
 * 1. Create the pattern detail page at src/pages/pattern/[your-slug].astro (e.g. pattern/adaptive-leg-warmers.astro)
 *    with beginner/advanced sections, images, description, and Lemon Squeezy buy link.
 * 2. Add the card image to src/assets/images/ and add its key to the imageMap in:
 *    - src/pages/patterns/index.astro (collection page)
 *    - src/pages/index.astro (only if featured: true, for the home Featured section)
 * 3. Add one entry to the `patterns` array below with slug, title, shortDescription, imageKey,
 *    type ('knitting' | 'crochet'), detailUrl (e.g. '/pattern/your-slug'), buyUrl (Lemon Squeezy),
 *    price, hasBeginner, hasAdvanced, and optionally featured: true.
 * The collection page and (if featured) the home page will show it automatically.
 */
export type PatternType = 'knitting' | 'crochet';

export interface Pattern {
	/** URL slug used for /pattern/<slug> and for filtering. Must match the pattern page filename. */
	slug: string;
	/** Display name. */
	title: string;
	/** Short description for cards (collection and featured). */
	shortDescription: string;
	/** Key for the image in the collection page imageMap (e.g. asset filename without extension). Omit if using imageUrl. */
	imageKey?: string;
	/** Optional direct image URL (e.g. for external/stock images). Use this or imageKey. */
	imageUrl?: string;
	/** knitting or crochet. */
	type: PatternType;
	/** Full URL to the pattern detail page (e.g. /pattern or /pattern/comfort-gloves). */
	detailUrl: string;
	/** Lemon Squeezy (or other) checkout URL for PDF / buy. Use # if not set yet. */
	buyUrl: string;
	/** Price string for display (e.g. "£8.00"). */
	price: string;
	/** One-line medical benefit for cards (e.g. "Seamless design for skin sensitivity"). */
	medicalBenefit?: string;
	/** Optional badge for card (e.g. "Most Popular for Beginners"). */
	badge?: string;
	/** Whether this pattern has a beginner level. */
	hasBeginner?: boolean;
	/** Whether this pattern has an advanced level. */
	hasAdvanced?: boolean;
	/** If true, show in the Featured section on the home page. */
	featured?: boolean;
}

export const patterns: Pattern[] = [
	// Knitting
	{
		slug: 'adaptive-leg-warmers',
		title: 'Adaptive Leg Warmers',
		shortDescription: 'Soft coverage with adaptive buttons designed for supportive devices.',
		imageKey: 'glove2',
		type: 'knitting',
		detailUrl: '/pattern',
		buyUrl: '#',
		price: '£8',
		medicalBenefit: 'Adaptive fit for supportive devices and braces.',
		hasBeginner: true,
		hasAdvanced: true,
		featured: true,
	},
	// Crochet
	{
		slug: 'bumblebee-amigurumi',
		title: 'Bumblebee Amigurumi',
		shortDescription: 'A cheerful little bumblebee friend, perfect for nurseries or as a pocket-sized comfort toy.',
		imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
		type: 'crochet',
		detailUrl: '/pattern',
		buyUrl: '#',
		price: '£8',
		medicalBenefit: 'Comfort toy and focus object for calming and play.',
		hasBeginner: true,
		hasAdvanced: false,
	},
	// Knitting
	{
		slug: 'comfort-gloves',
		title: 'Comfort Gloves',
		shortDescription: 'Gentle warmth for hospital environments with seamless finish.',
		imageKey: 'glove1',
		type: 'knitting',
		detailUrl: '/pattern',
		buyUrl: '#',
		price: '£8',
		medicalBenefit: 'Seamless design for skin sensitivity.',
		badge: 'Most Popular for Beginners',
		hasBeginner: true,
		hasAdvanced: true,
		featured: true,
	},
	// Crochet
	{
		slug: 'tiny-bear-lovey',
		title: 'Tiny Bear Lovey',
		shortDescription: 'Sweet crochet bear with a cosy blanket square—ideal first lovey for little ones.',
		imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80',
		type: 'crochet',
		detailUrl: '/pattern',
		buyUrl: '#',
		price: '£8',
		medicalBenefit: 'Tactile comfort and attachment object for little ones.',
		hasBeginner: true,
		hasAdvanced: false,
	},
	// Knitting
	{
		slug: 'picc-friendly-warmer',
		title: 'PICC-Friendly Warmer',
		shortDescription: 'A non-contact design that keeps the arm warm without touching access sites.',
		imageKey: 'piccLineWarmer',
		type: 'knitting',
		detailUrl: '/pattern',
		buyUrl: '#',
		price: '£8',
		medicalBenefit: 'Non-contact warmth for PICC and IV access sites.',
		hasBeginner: true,
		hasAdvanced: false,
		featured: true,
	},
	// Crochet
	{
		slug: 'rainbow-stripe-bunny',
		title: 'Rainbow Stripe Bunny',
		shortDescription: 'Soft rainbow-striped bunny with floppy ears; a gentle companion for all ages.',
		imageUrl: 'https://images.unsplash.com/photo-1579643365363-7269e2a722b6?w=600&q=80',
		type: 'crochet',
		detailUrl: '/pattern',
		buyUrl: '#',
		price: '£8',
		medicalBenefit: 'Sensory companion and calming texture for all ages.',
		hasBeginner: true,
		hasAdvanced: true,
	},
	// Knitting
	{
		slug: 'sensory-soft-hat',
		title: 'Sensory-Soft Hat',
		shortDescription: 'Minimal seams and soft fibers designed specifically for sensory needs.',
		imageKey: 'glove3',
		type: 'knitting',
		detailUrl: '/pattern',
		buyUrl: '#',
		price: '£8',
		medicalBenefit: 'Minimal seams and soft fibres for sensory needs.',
		hasBeginner: true,
		hasAdvanced: false,
		featured: true,
	},
	// Crochet
	{
		slug: 'mini-cactus-pals',
		title: 'Mini Cactus Pals',
		shortDescription: 'A set of three small crochet cacti in pastel pots—adorable desk or shelf buddies.',
		imageUrl: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600&q=80',
		type: 'crochet',
		detailUrl: '/pattern',
		buyUrl: '#',
		price: '£8',
		medicalBenefit: 'Mindful making and gentle texture for focus and calm.',
		hasBeginner: true,
		hasAdvanced: false,
	},
];

/** Patterns that appear in the home page Featured section. */
export function getFeaturedPatterns(): Pattern[] {
	return patterns.filter((p) => p.featured);
}
