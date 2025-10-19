import type { ReactNode } from "react";
import Hero from "../components/Hero";
import ArticlesOverview from "../components/ArticlesOverview";

export default function Home(): ReactNode {
	return (
		<>
			<Hero />
			<ArticlesOverview />
		</>
	);
}
