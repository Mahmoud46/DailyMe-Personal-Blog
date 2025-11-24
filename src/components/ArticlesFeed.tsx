import type { IArticle } from "../interfaces/data.interface";
import ArticleCard from "./ArticleCard";

export default function ArticlesFeed({ articles }: { articles: IArticle[] }) {
	return (
		<div className="grid gap-2 grid-cols-[repeat(1,minmax(200px,1fr))] sm:grid-cols-[repeat(2,minmax(200px,1fr))]">
			{articles.map((article, i) => (
				<ArticleCard article={article} key={i} />
			))}
		</div>
	);
}
