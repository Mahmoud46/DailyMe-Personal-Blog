import { useState, type ReactNode } from "react";
import {
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsTwitterX,
} from "react-icons/bs";
import { LuSearch, LuSettings, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Header(): ReactNode {
	const [isSearch, setIsSearch] = useState<boolean>(false);

	return (
		<div className="sticky top-0 p-2 z-50 sm:px-8">
			<div className="bg-black/10 backdrop-blur-sm text-white flex justify-between items-center">
				<div className="flex">
					<div className="p-3 cursor-pointer opacity-80 transition duration-300 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-sm">
						<LuSettings />
					</div>
					<div
						className={`flex overflow-hidden transition-all duration-300 ease-in-out ${
							isSearch ? "max-w-[200px]" : "max-w-[40px]"
						}`}
					>
						<div
							className={`p-3 cursor-pointer opacity-80 transition duration-300 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-sm ${
								isSearch ? "opacity-100 bg-white/10 backdrop-blur-sm" : ""
							}`}
							onClick={() => setIsSearch((prev) => !prev)}
						>
							{isSearch ? <LuX /> : <LuSearch />}
						</div>
						<input
							type="text"
							className="bg-white/10 backdrop-blur-sm outline-0 p-2 text-sm"
							placeholder="Search..."
						/>
					</div>
				</div>

				<Link to={"/"} className="flex gap-2.5 cursor-pointer items-center">
					<p className="text-lg" style={{ fontFamily: "Gianinos" }}>
						Dailyme
					</p>
				</Link>

				<div className="flex">
					<div className="p-3 cursor-pointer opacity-80 transition duration-300 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-sm">
						<BsGithub className="text-base" />
					</div>
					<div className="p-3 cursor-pointer opacity-80 transition duration-300 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-sm">
						<BsLinkedin className="text-base" />
					</div>
					<div className="p-3 cursor-pointer opacity-80 transition duration-300 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-sm">
						<BsFacebook className="text-base" />
					</div>
					<div className="p-3 cursor-pointer opacity-80 transition duration-300 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-sm">
						<BsTwitterX className="text-base" />
					</div>
					<div className="p-3 cursor-pointer opacity-80 transition duration-300 hover:opacity-100 hover:bg-white/10 hover:backdrop-blur-sm">
						<BsInstagram className="text-base" />
					</div>
				</div>
			</div>
		</div>
	);
}
