import { useContext, type ReactNode } from "react";
import type { IArticle } from "../interfaces/data.interface";
import { Context } from "../context/Context";
import type { IContext } from "../interfaces/context.interface";
import { LuClock, LuClockArrowUp, LuMessageSquareMore } from "react-icons/lu";
import moment from "moment";

export default function RelatedArticles({
	article,
}: {
	article: IArticle;
}): ReactNode {
	const { dataController, navigate } = useContext(Context) as IContext;
	return (
		<div className="max-w-[700px] w-full flex flex-col gap-2">
			<h2 className="text-2xl">Related Articles</h2>
			<div className="flex max-w-[700px] overflow-auto gap-2 hide-scroll">
				{dataController.articlesController
					.getRelatedArticles(article)
					.map((art, i) => (
						<div
							key={i}
							className="aspect-square h-[250px] flex-non flex items-end"
							style={{
								backgroundImage: `url(/${art.coverImage})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div
								onClick={() => {
									navigate(`/articles/${art.id}`);
									scrollTo(0, 0);
								}}
								className="bg-white/10 backdrop-blur-sm h-fit p-2 cursor-pointer flex flex-col gap-2"
							>
								<p className="line-clamp-2 text-sm font-semibold">
									{art.title}
								</p>
								<div className="flex items-center space-x-3 space-y-0.5 flex-wrap self-end mt-1">
									<p className="flex items-center gap-1.5">
										<LuClockArrowUp className="flex-none text-sm" />
										<span className="text-xs">
											{moment(art.publishedAt).fromNow()}
										</span>
									</p>
									<p className="flex items-center gap-1.5">
										<LuMessageSquareMore className="text-sm flex-none" />
										<span className="text-xs">{art.comments.length}</span>
									</p>
									<p className="flex items-center gap-1.5">
										<LuClock className="text-sm flex-none" />
										<span className="text-xs">{art.readTime} min read</span>
									</p>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
