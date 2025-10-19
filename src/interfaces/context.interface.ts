import type { NavigateFunction } from "react-router-dom";
import type { Data } from "../classes/Data.class";

export interface IContext {
	dataController: Data;
	update: boolean;
	navigate: NavigateFunction;
}
