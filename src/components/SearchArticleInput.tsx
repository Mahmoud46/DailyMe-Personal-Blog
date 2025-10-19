import { useState } from "react";
import { LuSearch, LuSearchX } from "react-icons/lu";

export default function SearchArticleInput({
	placeholder,
	value,
	setValue,
}: {
	placeholder: string;
	value?: string;
	setValue?: React.Dispatch<React.SetStateAction<string>>;
}) {
	const [isSearch, setIsSearch] = useState<boolean>(false);
	return (
		<div
			className={`flex overflow-hidden transition-all duration-300 ease-in-out ${
				isSearch ? "max-w-[300px]" : "max-w-[40px]"
			}`}
		>
			<div
				className={`p-3 cursor-pointer opacity-80 transition duration-300 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-sm ${
					isSearch ? "opacity-100 bg-white/10 backdrop-blur-sm" : ""
				}`}
				onClick={() => setIsSearch((prev) => !prev)}
			>
				{isSearch ? <LuSearchX /> : <LuSearch />}
			</div>
			<input
				type="text"
				className="bg-white/10 backdrop-blur-sm outline-0 p-2 text-sm"
				placeholder={placeholder}
				value={value ?? ""}
				onChange={(e) => (setValue ? setValue(e.target.value) : null)}
			/>
		</div>
	);
}
