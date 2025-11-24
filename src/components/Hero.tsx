import { useContext, type ReactNode } from "react";

import { LuClock, LuClockArrowUp, LuMessageSquareMore } from "react-icons/lu";
import moment from "moment";
import { Context } from "../context/Context";
import type { IContext } from "../interfaces/context.interface";

export default function Hero(): ReactNode {
	const { dataController, navigate } = useContext(Context) as IContext;

	return (
		<div className="w-full h-[calc(100dvh-65px)] sticky top-0 flex gap-2 flex-col md:flex-row">
			{dataController.articlesController.articles.length > 0 && (
				<>
					<div
						className="flex-1 flex flex-col justify-end"
						style={{
							backgroundImage: `url(${dataController.articlesController.articles[0].coverImage})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div
							className="p-3 flex flex-col gap-1 bg-black/10 backdrop-blur-sm cursor-pointer"
							onClick={() => {
								navigate(
									`/articles/${dataController.articlesController.articles[0].id}`
								);
								scrollTo(0, 0);
							}}
						>
							<p className="flex items-center gap-1 w-fit flex-wrap">
								{dataController.articlesController.articles[0].category.map(
									(cat, i) => (
										<span
											className="text-sm bg-black/10 backdrop-blur-sm p-1"
											key={i}
										>
											{cat}
										</span>
									)
								)}
							</p>
							<h1 className="text-2xl font-semibold line-clamp-2">
								{dataController.articlesController.articles[0].title}
							</h1>
							<p className="text-base">
								{dataController.articlesController.articles[0].excerpt}
							</p>
							<div className="flex items-center space-x-3 space-y-0.5 flex-wrap self-end mt-1">
								<p className="flex items-center gap-1.5">
									<LuClockArrowUp className="flex-none text-base" />
									<span className="text-sm">
										{moment(
											dataController.articlesController.articles[0].publishedAt
										).fromNow()}
									</span>
								</p>
								<p className="flex items-center gap-1.5">
									<LuMessageSquareMore className="text-base flex-none" />
									<span className="text-sm">
										{
											dataController.articlesController.articles[0].comments
												.length
										}
									</span>
								</p>
								<p className="flex items-center gap-1.5">
									<LuClock className="text-base flex-none" />
									<span className="text-sm">
										{dataController.articlesController.articles[0].readTime} min
										read
									</span>
								</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-3 sm:grid-cols-2 gap-2 sm:flex-1">
						<div
							className="aspect-square sm:aspect-auto flex flex-col justify-end"
							style={{
								backgroundImage: `url(${dataController.articlesController.articles[3].coverImage})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div
								className="p-3 flex flex-col gap-1 bg-black/10 backdrop-blur-sm cursor-pointer"
								onClick={() => {
									navigate(
										`/articles/${dataController.articlesController.articles[3].id}`
									);
									scrollTo(0, 0);
								}}
							>
								<p className="hidden sm:flex items-center gap-1 w-fit flex-wrap">
									{dataController.articlesController.articles[3].category.map(
										(cat, i) => (
											<span
												className="text-xs bg-black/10 backdrop-blur-sm p-1"
												key={i}
											>
												{cat}
											</span>
										)
									)}
								</p>
								<h1 className="text-sm sm:text-base font-semibold line-clamp-2">
									{dataController.articlesController.articles[3].title}
								</h1>
								<div className="hidden sm:flex items-center space-x-3 space-y-0.5 flex-wrap self-end mt-1">
									<p className="flex items-center gap-1.5">
										<LuClockArrowUp className="flex-none text-sm" />
										<span className="text-xs">
											{moment(
												dataController.articlesController.articles[3]
													.publishedAt
											).fromNow()}
										</span>
									</p>
									<p className="flex items-center gap-1.5">
										<LuMessageSquareMore className="text-sm flex-none" />
										<span className="text-xs">
											{
												dataController.articlesController.articles[3].comments
													.length
											}
										</span>
									</p>
									<p className="flex items-center gap-1.5">
										<LuClock className="text-sm flex-none" />
										<span className="text-xs">
											{dataController.articlesController.articles[3].readTime}{" "}
											min read
										</span>
									</p>
								</div>
							</div>
						</div>
						<div
							className="aspect-square sm:aspect-auto flex flex-col justify-end"
							style={{
								backgroundImage: `url(${dataController.articlesController.articles[2].coverImage})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div
								className="p-3 flex flex-col gap-1 bg-black/10 backdrop-blur-sm cursor-pointer"
								onClick={() => {
									navigate(
										`/articles/${dataController.articlesController.articles[2].id}`
									);
									scrollTo(0, 0);
								}}
							>
								<p className="hidden sm:flex items-center gap-1 w-fit flex-wrap">
									{dataController.articlesController.articles[2].category.map(
										(cat, i) => (
											<span
												className="text-xs bg-black/10 backdrop-blur-sm p-1"
												key={i}
											>
												{cat}
											</span>
										)
									)}
								</p>
								<h1 className="text-sm sm:text-base font-semibold line-clamp-2">
									{dataController.articlesController.articles[2].title}
								</h1>
								<div className="hidden sm:flex items-center space-x-3 space-y-0.5 flex-wrap self-end mt-1">
									<p className="flex items-center gap-1.5">
										<LuClockArrowUp className="flex-none text-sm" />
										<span className="text-xs">
											{moment(
												dataController.articlesController.articles[2]
													.publishedAt
											).fromNow()}
										</span>
									</p>
									<p className="flex items-center gap-1.5">
										<LuMessageSquareMore className="text-sm flex-none" />
										<span className="text-xs">
											{
												dataController.articlesController.articles[2].comments
													.length
											}
										</span>
									</p>
									<p className="flex items-center gap-1.5">
										<LuClock className="text-sm flex-none" />
										<span className="text-xs">
											{dataController.articlesController.articles[2].readTime}{" "}
											min read
										</span>
									</p>
								</div>
							</div>
						</div>
						<div
							className="aspect-square sm:aspect-auto sm:col-span-2 flex flex-col justify-end"
							style={{
								backgroundImage: `url(${dataController.articlesController.articles[1].coverImage})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div
								className="p-3 flex flex-col gap-1 bg-black/10 backdrop-blur-sm cursor-pointer"
								onClick={() => {
									navigate(
										`/articles/${dataController.articlesController.articles[1].id}`
									);
									scrollTo(0, 0);
								}}
							>
								<p className="hidden sm:flex items-center gap-1 w-fit flex-wrap">
									{dataController.articlesController.articles[1].category.map(
										(cat, i) => (
											<span
												className="text-sm bg-black/10 backdrop-blur-sm p-1"
												key={i}
											>
												{cat}
											</span>
										)
									)}
								</p>
								<h1 className="text-sm sm:text-xl font-semibold line-clamp-2">
									{dataController.articlesController.articles[1].title}
								</h1>
								<div className="hidden sm:flex items-center space-x-3 space-y-0.5 flex-wrap self-end mt-1">
									<p className="flex items-center gap-1.5">
										<LuClockArrowUp className="flex-none text-base" />
										<span className="text-sm">
											{moment(
												dataController.articlesController.articles[1]
													.publishedAt
											).fromNow()}
										</span>
									</p>
									<p className="flex items-center gap-1.5">
										<LuMessageSquareMore className="text-base flex-none" />
										<span className="text-sm">
											{
												dataController.articlesController.articles[1].comments
													.length
											}
										</span>
									</p>
									<p className="flex items-center gap-1.5">
										<LuClock className="text-base flex-none" />
										<span className="text-sm">
											{dataController.articlesController.articles[1].readTime}{" "}
											min read
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
