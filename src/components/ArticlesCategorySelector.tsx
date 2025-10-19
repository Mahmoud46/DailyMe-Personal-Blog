import { useContext, useState, type ReactNode } from "react";
import { Context } from "../context/Context";
import type { IContext } from "../interfaces/context.interface";
import { LuFilter, LuFilterX } from "react-icons/lu";

export default function ArticlesCategorySelector({
	category,
}: {
	category: string;
}): ReactNode {
	const { dataController, navigate } = useContext(Context) as IContext;
	const [isSelect, setIsSelect] = useState<boolean>(false);
	return (
		<div
			className={`flex overflow-hidden transition-all duration-300 ease-in-out ${
				isSelect ? "max-w-[500px] pr-2" : "max-w-[40px]"
			}`}
		>
			<div
				className={`p-3 cursor-pointer opacity-80 transition duration-300 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-sm ${
					isSelect ? "opacity-100 bg-white/10 backdrop-blur-sm" : ""
				}`}
				onClick={() => setIsSelect((prev) => !prev)}
			>
				{isSelect ? <LuFilterX /> : <LuFilter />}
			</div>
			<div className="bg-white/10 backdrop-blur-sm flex items-center pr-2">
				<select
					className=" cursor-pointer outline-none text-sm max-w-[100px]"
					value={category ?? "All"}
					onChange={(e) => {
						setIsSelect(false);
						navigate(
							`${
								e.target.value == "All"
									? `/articles/feed?page=${1}`
									: `/articles/feed?category=${e.target.value}`
							}`
						);
					}}
				>
					<option value={"All"} className="text-gray-900">
						All
					</option>
					{dataController.articlesController.articlesCategories.map(
						(category, i) => (
							<option value={category} key={i} className="text-gray-900">
								{category == "AI" ? "Artificial Intelligence" : category}
							</option>
						)
					)}
				</select>
			</div>
		</div>
	);

	// return (
	// 	<div className="bg-white/10 pr-2 flex items-center">
	// 		<LuFilter className="flex" />

	// 		<select
	// 			className="p-2 py-2.5 pl-8 cursor-pointer outline-none text-sm  max-w-[100px]"
	// 			value={category ?? "All"}
	// 			onChange={(e) => {
	// 				navigate(
	// 					`${
	// 						e.target.value == "All"
	// 							? `/articles/feed?page=${1}`
	// 							: `/articles/feed?category=${e.target.value}`
	// 					}`
	// 				);
	// 			}}
	// 		>
	// 			<option value={"All"} className="text-gray-900">
	// 				All
	// 			</option>
	// 			{dataController.articlesController.articlesCategories.map(
	// 				(category, i) => (
	// 					<option value={category} key={i} className="text-gray-900">
	// 						{category == "AI" ? "Artificial Intelligence" : category}
	// 					</option>
	// 				)
	// 			)}
	// 		</select>
	// 	</div>
	// );
}
