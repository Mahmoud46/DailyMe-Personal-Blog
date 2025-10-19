import { useContext, type ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { Context } from "../context/Context";
import type { IContext } from "../interfaces/context.interface";

export default function ArticlesOverview(): ReactNode {
	const { dataController } = useContext(Context) as IContext;
	return (
		<div className="bg-black/10 p-2 flex flex-col gap-4 backdrop-blur-sm w-full mt-2">
			<div className="flex items-center flex-col">
				<h1 className="text-center text-3xl">What’s New</h1>
				<p className="text-center max-w-[500px]">
					Stay updated with our newest articles, packed with insights and
					practical takeaways.
				</p>
			</div>
			<div className="grid gap-2 grid-cols-[repeat(2,minmax(200px,1fr))]">
				{dataController.articlesController.articles
					.slice(0, 4)
					.map((article, i) => (
						<ArticleCard article={article} key={i} />
					))}
			</div>
			{dataController.articlesController.articles.length > 2 && (
				<div className="flex justify-center">
					<Link
						to={`/articles/feed?page=${1}`}
						className="bg-white/10 flex transition-all duration-500 items-center max-w-[32px] justify-end hover:bg-white hover:text-gray-900 overflow-hidden hover:max-w-[200px] group"
					>
						<span className="pl-2 flex-none">Explore more</span>
						<div className="p-2 flex-none -rotate-45 transition-all duration-500 group-hover:rotate-0 text-lg">
							<LuArrowRight />
						</div>
					</Link>
				</div>
			)}
		</div>
	);
}
