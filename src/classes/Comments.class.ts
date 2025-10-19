import type { IComment } from "../interfaces/data.interface";

export class Comments {
	protected comments: IComment[];
	indexedComments: Record<string, IComment>;
	protected setUpdate: React.Dispatch<React.SetStateAction<boolean>>;

	constructor() {
		this.comments = [];
		this.indexedComments = {};
		this.setUpdate = () => {};
	}

	init(comments: IComment[]) {
		this.comments = comments;
		this.indexedComments = this.getIndexedComments();
	}

	protected getIndexedComments(): Record<string, IComment> {
		const indexedComments: Record<string, IComment> = {};
		for (const comment of this.comments) indexedComments[comment.id] = comment;
		return indexedComments;
	}

	protected include(commentID: string): boolean {
		return commentID in this.indexedComments;
	}

	getComment(commentID: string): IComment {
		return this.indexedComments[commentID];
	}

	create(comment: IComment) {
		const comments: IComment[] = [comment, ...this.comments];
		this.updateComments(comments);
	}

	protected updateComments(comments: IComment[]) {
		this.comments = comments;
		this.indexedComments = this.getIndexedComments();
	}
}

export const commentsController = new Comments();
