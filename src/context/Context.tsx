import { createContext } from "react";
import type { IContext } from "../interfaces/context.interface";

export const Context = createContext<IContext | null>(null);
