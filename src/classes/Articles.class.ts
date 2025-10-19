import type { IArticle } from "../interfaces/data.interface";

export class Articles {
	articles: IArticle[];
	indexedArticles: Record<string, IArticle>;
	indexedIDs: Record<string, number>;
	articlesCategories: string[];
	likedArticles: string[];

	constructor() {
		this.articles = [];
		this.articlesCategories = [];
		this.indexedArticles = {};
		this.indexedIDs = {};
		this.likedArticles = [];
	}

	init(articles: IArticle[]) {
		this.articles = articles;
		this.indexedArticles = this.getIndexedArticles();
		this.indexedIDs = this.getIndexedIDs();
		this.articlesCategories = this.getArticlesCategories();
	}

	protected getArticlesCategories(): string[] {
		const articlesCategories = [];
		for (const article of this.articles)
			articlesCategories.push(...article.category);

		return [...new Set(articlesCategories)];
	}

	protected getIndexedArticles(): Record<string, IArticle> {
		const indexedArticles: Record<string, IArticle> = {};
		for (const article of this.articles) indexedArticles[article.id] = article;
		return indexedArticles;
	}

	protected getIndexedIDs(): Record<string, number> {
		const indexedIDs: Record<string, number> = {};

		for (let i = 0; i < this.articles.length; ++i)
			indexedIDs[this.articles[i].id] = i;

		return indexedIDs;
	}

	include(articleID: string): boolean {
		return articleID in this.indexedArticles;
	}

	getArticle(articleID: string): IArticle {
		return this.indexedArticles[articleID];
	}

	getRelatedArticles(current: IArticle, maxResults: number = 3): IArticle[] {
		return this.articles
			.filter((article) => article.id !== current.id) // exclude self
			.map((article) => {
				const tagMatches = article.tags?.filter((tag) =>
					current.tags?.includes(tag)
				).length;
				const categoryMatches = article.category.filter((cat) =>
					current.category.includes(cat)
				).length;

				const score = tagMatches ?? 0 * 2 + categoryMatches * 1; // weighted scoring

				return { article: article, score };
			})
			.filter((item) => item.score > 0) // only related
			.sort((a, b) => b.score - a.score) // sort by relevance
			.slice(0, maxResults) // limit results
			.map((item) => item.article);
	}

	like(articleID: string): void {
		this.likedArticles = [...this.likedArticles, articleID];

		const articles: IArticle[] = [...this.articles];
		articles[this.indexedIDs[articleID]] = {
			...articles[this.indexedIDs[articleID]],
			likes: articles[this.indexedIDs[articleID]].likes + 1,
		};

		this.updateArticles(articles);
	}

	unlike(articleID: string): void {
		this.likedArticles = [
			...this.likedArticles.filter((id) => id != articleID),
		];

		const articles: IArticle[] = [...this.articles];
		articles[this.indexedIDs[articleID]] = {
			...articles[this.indexedIDs[articleID]],
			likes: articles[this.indexedIDs[articleID]].likes - 1,
		};

		this.updateArticles(articles);
	}

	comment(commentID: string, articleID: string) {
		const articles: IArticle[] = [...this.articles];
		articles[this.indexedIDs[articleID]] = {
			...articles[this.indexedIDs[articleID]],
			comments: [commentID, ...articles[this.indexedIDs[articleID]].comments],
		};

		this.updateArticles(articles);
	}

	protected updateArticles(articles: IArticle[]) {
		this.articles = articles;
		this.indexedArticles = this.getIndexedArticles();
		this.indexedIDs = this.getIndexedIDs();
		this.articlesCategories = this.getArticlesCategories();
	}
}

export const articlesController = new Articles();
