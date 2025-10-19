import { useEffect, useState, type ReactNode } from "react";
import { Context } from "./Context";
import type { IContext } from "../interfaces/context.interface";
import data from "../data/data.json";
import { dataController, type IData } from "../classes/Data.class";
import { useNavigate } from "react-router-dom";

export default function ContextProvider({
	children,
}: {
	children: ReactNode;
}): ReactNode {
	const [update, setUpdate] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		setUpdate(true);
		dataController.init(data as IData, setUpdate);
	}, []);

	const contextValue: IContext = {
		update,
		dataController,
		navigate,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
