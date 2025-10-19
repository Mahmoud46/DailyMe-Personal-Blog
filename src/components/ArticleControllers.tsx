import { useContext } from "react";
import type { IArticle } from "../interfaces/data.interface";
import { LuMessageSquareMore, LuShare2, LuThumbsUp } from "react-icons/lu";
import { Context } from "../context/Context";
import type { IContext } from "../interfaces/context.interface";

export default function ArticleControllers({ article }: { article: IArticle }) {
	const { dataController, navigate } = useContext(Context) as IContext;
	return (
		<div className="flex gap-4 justify-between w-full">
			<div className="flex items-center gap-4">
				<p
					className="flex items-center gap-2 cursor-pointer group"
					onClick={() => {
						if (
							dataController.articlesController.likedArticles.includes(
								article.id
							)
						)
							dataController.unlikeArticle(article.id);
						else dataController.likeArticle(article.id);
						navigate(`/articles/${article.id}`);
					}}
				>
					{dataController.articlesController.likedArticles.includes(
						article.id
					) && (
						<LuThumbsUp
							fill="currentColor"
							className="text-lg transition-all duration-300 group-hover:scale-125"
						/>
					)}
					{!dataController.articlesController.likedArticles.includes(
						article.id
					) && (
						<LuThumbsUp className="text-lg transition-all duration-300 group-hover:scale-125" />
					)}
					<span>{article.likes}</span>
				</p>
				<p className="flex items-center gap-2">
					<LuMessageSquareMore className="text-lg" />
					<span>{article.comments.length}</span>
				</p>
			</div>
			<div className="">
				<p className="flex items-center gap-2 opacity-80 transition duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:opacity-100 cursor-pointer p-2">
					<LuShare2 className="text-lg" />
				</p>
			</div>
		</div>
	);
}
