export interface IArticle {
	id: string; // unique identifier
	title: string; // article title
	slug: string; // URL-friendly title
	category: string[]; // e.g., ["AI", "Software Engineering"]
	author: string; // author name
	publishedAt: string; // ISO date string
	updatedAt?: string; // optional last update
	excerpt: string; // short summary
	body: string; // full article content (markdown/HTML/plain)
	coverImage?: string; // optional cover image URL
	tags?: string[]; // keywords/tags
	readTime?: number; // estimated read time in minutes
	isFeatured?: boolean; // highlight flag
	comments: string[]; // ids of each comment
	likes: number;
}

export interface IComment {
	id: string; // unique identifier for the comment
	postId: string; // the ID of the article this comment belongs to
	authorId: string; // reference to the user who wrote the comment
	authorName: string; // display name of the commenter
	authorAvatar?: string; // optional profile image
	content: string; // main text of the comment
	createdAt: string; // ISO date string
	updatedAt?: string; // optional last update time
	parentId?: string; // if it's a reply, points to parent comment ID
	likes?: number; // number of likes/reactions
	replies?: IComment[]; // nested replies (optional, recursive)
}
