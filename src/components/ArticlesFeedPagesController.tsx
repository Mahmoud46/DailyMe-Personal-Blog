import { useContext, type ReactNode } from "react";
import { Context } from "../context/Context";
import type { IContext } from "../interfaces/context.interface";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function ArticlesFeedPagesController({
	currentPage,
	maxPages,
}: {
	currentPage: number;
	maxPages: number;
}): ReactNode {
	const { navigate } = useContext(Context) as IContext;
	return (
		<div className="flex justify-center mt-4">
			<div className="max-w-[500px] flex items-center gap-2">
				{currentPage != 1 && (
					<p
						className="opacity-50 transition-all duration-300 hover:opacity-100 hover:bg-white/10 backdrop-blur-sm h-8 w-8 flex justify-center items-center cursor-pointer"
						onClick={() => {
							navigate(`/articles/feed?page=${currentPage - 1}`);
						}}
					>
						<LuChevronLeft className="text-xl" />
					</p>
				)}
				<div className="flex items-center">
					{Array.from(
						{
							length: maxPages,
						},
						(_, i) => i + 1
					).map((pageNum, i) => (
						<p
							key={i}
							onClick={() => {
								navigate(`/articles/feed?page=${i + 1}`);
							}}
							className={`${
								pageNum == +currentPage
									? "bg-white text-gray-900"
									: "opacity-50 transition-all duration-300 hover:opacity-100 hover:bg-white/10 backdrop-blur-sm"
							}  h-8 w-8 flex justify-center items-center cursor-pointer`}
						>
							{pageNum}
						</p>
					))}
				</div>
				{maxPages != currentPage && (
					<p
						className="opacity-50 transition-all duration-300 hover:opacity-100 hover:bg-white/10 backdrop-blur-sm h-8 w-8 flex justify-center items-center cursor-pointer"
						onClick={() => {
							navigate(`/articles/feed?page=${currentPage + 1}`);
						}}
					>
						<LuChevronRight className="text-xl" />
					</p>
				)}
			</div>
		</div>
	);
}
