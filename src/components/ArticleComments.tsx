import { useContext, useState, type ReactNode } from "react";
import type { IArticle, IComment } from "../interfaces/data.interface";
import moment from "moment";
import { LuReply, LuSend, LuThumbsUp, LuUser } from "react-icons/lu";
import { Context } from "../context/Context";
import type { IContext } from "../interfaces/context.interface";
import { nanoid } from "nanoid";

function Comment({ comment }: { comment: IComment }) {
	return (
		<div className="flex flex-col">
			<div className="flex items-center gap-4">
				<div className="h-10 w-10 bg-white/10 flex-none rounded-full flex items-center justify-center">
					<LuUser className="text-xl" />
				</div>
				<div className="flex flex-col">
					<p className="text-sm">{comment.authorName}</p>
					<p className="text-xs opacity-80">
						{moment(comment.createdAt).fromNow()}
					</p>
				</div>
			</div>
			<div className="pl-14 mt-1">
				<p>{comment.content}</p>
				<div className="flex gap-4 justify-end">
					<p className="flex items-center gap-2 text-sm mt-1.5 group cursor-pointer">
						<LuThumbsUp className="text-base transition-all duration-300 group-hover:scale-125" />
						<span>{comment.likes ?? 0}</span>
					</p>
					<p className="flex items-center gap-2 text-sm mt-2">
						<LuReply className="text-base" />
						<span>{comment.replies?.length ?? 0}</span>
					</p>
				</div>
				{comment.replies && (
					<div className="">
						{comment.replies.map((reply, i) => (
							<Comment comment={reply} key={i} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}

function CommentForm({ articleID }: { articleID: string }): ReactNode {
	const [commentContent, setCommentContent] = useState<string>("");
	const { dataController, navigate } = useContext(Context) as IContext;

	return (
		<div className="bg-white/10 p-2 mb-4">
			<div className="flex items-center gap-4">
				<div className="h-10 w-10 bg-white/10 flex-none rounded-full flex items-center justify-center">
					<LuUser className="text-xl" />
				</div>
				<p className="flex flex-col">Write a comment</p>
			</div>
			<form
				className="pl-14 relative"
				onSubmit={(e) => {
					e.preventDefault();
					if (
						dataController.addComment({
							id: nanoid(),
							postId: articleID,
							authorId: "me-10044785",
							authorName: "Me",
							content: commentContent,
							createdAt: new Date().toISOString(),
							likes: 0,
						})
					) {
						setCommentContent("");
						navigate(`/articles/${articleID}`);
					}
				}}
			>
				<textarea
					value={commentContent}
					onChange={(e) => setCommentContent(e.target.value)}
					placeholder="What are your thoughts?"
					className="w-full py-1 outline-0 pr-10 resize-none"
					required
				/>
				{commentContent.trim() != "" && (
					<button className="absolute flex items-center right-0 gap-2 cursor-pointer transition-all duration-300 group hover:bg-white bottom-0 max-w-[31px] overflow-hidden hover:max-w-[250px] bg-white/10 hover:text-gray-900 text-sm">
						<div className="p-2">
							<LuSend className="transition-all duration-300 group-hover:rotate-45 group-hover:text-gray-900 text-base flex-none" />
						</div>
						<p className="pr-2">Comment</p>
					</button>
				)}
			</form>
		</div>
	);
}

export default function ArticleComments({
	article,
}: {
	article: IArticle;
}): ReactNode {
	const { dataController } = useContext(Context) as IContext;
	return (
		<div className="max-w-[700px] w-full mt-4 flex flex-col gap-2">
			<h2 className="text-2xl">Comments ({article.comments.length})</h2>
			<CommentForm articleID={article.id} />
			<div className="flex flex-col gap-4">
				{article.comments.map((comment, i) => (
					<Comment
						comment={dataController.commentsController.getComment(comment)}
						key={i}
					/>
				))}
			</div>
		</div>
	);
}
