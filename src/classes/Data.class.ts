import type { IArticle, IComment } from "../interfaces/data.interface";
import { Articles } from "./Articles.class";
import { Comments } from "./Comments.class";

export interface IData {
	articles: IArticle[];
	comments: IComment[];
}

export class Data {
	articlesController: Articles;
	commentsController: Comments;
	protected setUpdate: React.Dispatch<React.SetStateAction<boolean>>;

	constructor() {
		this.articlesController = new Articles();
		this.commentsController = new Comments();
		this.setUpdate = () => {};
	}

	init(data: IData, setUpdate: React.Dispatch<React.SetStateAction<boolean>>) {
		this.articlesController.init(data.articles);
		this.commentsController.init(data.comments);
		this.setUpdate = setUpdate;
	}

	likeArticle(articleID: string) {
		this.articlesController.like(articleID);

		this.setUpdate(false);
	}

	unlikeArticle(articleID: string) {
		this.articlesController.unlike(articleID);

		this.setUpdate(true);
	}

	addComment(comment: IComment): boolean {
		this.articlesController.comment(comment.id, comment.postId);
		this.commentsController.create(comment);
		this.setUpdate(true);

		return true;
	}
}

export const dataController = new Data();
