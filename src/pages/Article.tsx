import { useContext, type ReactNode } from "react";
import { Context } from "../context/Context";
import type { IContext } from "../interfaces/context.interface";
import { useParams } from "react-router-dom";
import { LuClock, LuClockArrowUp } from "react-icons/lu";
import moment from "moment";
import ArticleComments from "../components/ArticleComments";
import ArticleControllers from "../components/ArticleControllers";
import RelatedArticles from "../components/RelatedArticles";

export default function Article(): ReactNode {
	const { dataController } = useContext(Context) as IContext;
	const { article_id } = useParams();
	return (
		<>
			{dataController.articlesController.include(article_id as string) && (
				<>
					<div className="sticky top-12 z-0 flex flex-col items-center gap-2">
						<div className="max-w-[700px] flex flex-col gap-2">
							<h1 className="text-3xl font-bold mt-6 w-full">
								{
									dataController.articlesController.getArticle(
										article_id as string
									).title
								}
							</h1>
							<div className="flex items-center gap-4 w-full opacity-80 text-sm">
								<p className="flex items-center gap-2">
									<LuClockArrowUp className="text-base" />
									<span>
										{moment(
											dataController.articlesController.getArticle(
												article_id as string
											).publishedAt
										).fromNow()}
									</span>
								</p>
								<p className="flex items-center gap-2">
									<LuClock className="text-base" />
									<span>
										{
											dataController.articlesController.getArticle(
												article_id as string
											).readTime
										}{" "}
										min read
									</span>
								</p>
							</div>
							<ArticleControllers
								article={dataController.articlesController.getArticle(
									article_id as string
								)}
							/>
							<img
								src={`/${
									dataController.articlesController.getArticle(
										article_id as string
									).coverImage
								}`}
								alt={
									dataController.articlesController.getArticle(
										article_id as string
									).title
								}
								className="aspect-video w-full"
							/>
						</div>
					</div>
					<div className=" z-50 bg-black/50 flex flex-col gap-4 backdrop-blur-sm w-full mt-2 items-center">
						<article
							className="article-content max-w-[700px]"
							dangerouslySetInnerHTML={{
								__html: dataController.articlesController.getArticle(
									article_id as string
								).body,
							}}
						></article>
						<div className="max-w-[700px] w-full mt-4 flex flex-col gap-2">
							{dataController.articlesController.getArticle(
								article_id as string
							).tags && (
								<p className="flex items-center gap-2 w-fit flex-wrap">
									{dataController.articlesController
										.getArticle(article_id as string)
										.tags?.map((tag, i) => (
											<span
												className="text-sm bg-white/10 backdrop-blur-sm p-2"
												key={i}
											>
												{tag}
											</span>
										))}
								</p>
							)}
							<ArticleControllers
								article={dataController.articlesController.getArticle(
									article_id as string
								)}
							/>
						</div>
						<ArticleComments
							article={dataController.articlesController.getArticle(
								article_id as string
							)}
						/>
						<RelatedArticles
							article={dataController.articlesController.getArticle(
								article_id as string
							)}
						/>
					</div>
				</>
			)}
		</>
	);
}
