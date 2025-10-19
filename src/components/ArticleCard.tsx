import moment from "moment";

import { LuClockArrowUp, LuMessageSquareMore, LuClock } from "react-icons/lu";
import type { IArticle } from "../interfaces/data.interface";
import { useContext } from "react";
import { Context } from "../context/Context";
import type { IContext } from "../interfaces/context.interface";

export default function ArticleCard({ article }: { article: IArticle }) {
	const { navigate } = useContext(Context) as IContext;
	return (
		<div className="flex min-h-[200px]">
			<div
				className="flex-1"
				style={{
					backgroundImage: `url(/${article.coverImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div>
			<div
				className="flex-1 p-3 gap-2 bg-black/10 backdrop-blur-sm flex flex-col justify-between cursor-pointer"
				onClick={() => {
					navigate(`/articles/${article.id}`);
					scrollTo(0, 0);
				}}
			>
				<div className="">
					<p className="flex items-center gap-1 w-fit flex-wrap">
						{article.category.map((cat, i) => (
							<span
								className="text-xs bg-white/10 backdrop-blur-sm p-1"
								key={i}
							>
								{cat}
							</span>
						))}
					</p>
					<h2 className="text-base font-semibold">{article.title}</h2>
					<p className="text-sm mt-0.5 opacity-80 line-clamp-3">
						{article.excerpt}
					</p>
				</div>
				<div className="self-end">
					<div className="flex items-center space-x-3 space-y-0.5 flex-wrap self-end mt-1">
						<p className="flex items-center gap-1.5">
							<LuClockArrowUp className="flex-none text-sm" />
							<span className="text-xs">
								{moment(article.publishedAt).fromNow()}
							</span>
						</p>
						<p className="flex items-center gap-1.5">
							<LuMessageSquareMore className="text-sm flex-none" />
							<span className="text-xs">{article.comments.length}</span>
						</p>
						<p className="flex items-center gap-1.5">
							<LuClock className="text-sm flex-none" />
							<span className="text-xs">{article.readTime} min read</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
