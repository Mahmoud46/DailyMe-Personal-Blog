import { useContext, useEffect, useState } from "react";
import ArticlesFeed from "../components/ArticlesFeed";
import { Context } from "../context/Context";
import type { IContext } from "../interfaces/context.interface";
import { useSearchParams } from "react-router-dom";
import ArticlesFeedPagesController from "../components/ArticlesFeedPagesController";
import ArticlesCategorySelector from "../components/ArticlesCategorySelector";
import SearchArticleInput from "../components/SearchArticleInput";
import type { IArticle } from "../interfaces/data.interface";
import { LuFileX } from "react-icons/lu";

export default function Articles() {
	const { dataController } = useContext(Context) as IContext;
	const [searchParams] = useSearchParams();
	const page = searchParams.get("page");
	const category = searchParams.get("category");
	const [maxPages, setMaxPages] = useState<number>(0);
	const [searchArticleTitle, setSearchArticleTitle] = useState<string>("");
	const [articles, setArticles] = useState<IArticle[]>([]);

	useEffect(() => {
		setMaxPages(
			Math.ceil(dataController.articlesController.articles.length / 6)
		);
	}, [dataController.articlesController.articles]);

	useEffect(() => {
		if (
			searchArticleTitle.trim() == "" &&
			!category &&
			page &&
			!isNaN(+page) &&
			+page <= maxPages
		)
			setArticles(
				dataController.articlesController.articles.slice(
					(+page - 1) * 6,
					(+page - 1) * 6 + 6
				)
			);
		else if (!category && page && !isNaN(+page) && +page <= maxPages)
			setArticles(
				dataController.articlesController.articles.filter((article) =>
					article.title.toLowerCase().includes(searchArticleTitle.toLowerCase())
				)
			);
		else if (category && !page)
			setArticles(
				dataController.articlesController.articles.filter(
					(article) =>
						article.category.includes(category) &&
						(searchArticleTitle.trim() == ""
							? article
							: article.title
									.toLowerCase()
									.includes(searchArticleTitle.toLowerCase()))
				)
			);
	}, [
		category,
		dataController.articlesController.articles,
		page,
		searchArticleTitle,
		maxPages,
	]);

	return (
		<>
			<div className="sticky top-12 bg-black/10 w-full backdrop-blur-sm z-40 mb-2 flex items-center justify-between">
				<h1 className="flex text-3xl p-2">{category ?? "All"} Articles</h1>
				<div className="flex">
					<SearchArticleInput
						placeholder="Search article with title..."
						value={searchArticleTitle}
						setValue={setSearchArticleTitle}
					/>
					<ArticlesCategorySelector category={category ?? "All"} />
				</div>
			</div>

			<div className="w-full flex flex-col">
				<ArticlesFeed articles={articles} />
				{articles.length == 0 && (
					<div className="flex flex-col items-center">
						<div className="flex flex-col items-center p-10 gap-4 max-w-[400px]">
							<LuFileX className="text-4xl" />
							<p className="text-center text-sm">
								There are no <strong>{category ? category : ""}</strong>{" "}
								articles found{" "}
								{searchArticleTitle.trim() != "" ? `matches` : ""}{" "}
								<span className="underline">
									{searchArticleTitle.trim() != "" ? searchArticleTitle : ""}
								</span>
							</p>
						</div>
					</div>
				)}
			</div>

			{!category &&
				searchArticleTitle.trim() == "" &&
				dataController.articlesController.articles.length > 6 &&
				page &&
				!isNaN(+page) && (
					<ArticlesFeedPagesController
						currentPage={+page}
						maxPages={maxPages}
					/>
				)}
		</>
	);
}
