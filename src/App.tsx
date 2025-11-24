import { type ReactNode } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

export default function App(): ReactNode {
	return (
		<>
			<Header />
			<section className={`flex pb-4 px-2 sm:px-8 text-white`}>
				<div className="w-full">
					<Routes>
						<Route index element={<Home />} />
						<Route path="/articles/feed" element={<Articles />} />
						<Route path="/articles/:article_id" element={<Article />} />
					</Routes>
				</div>
			</section>
		</>
	);
}
