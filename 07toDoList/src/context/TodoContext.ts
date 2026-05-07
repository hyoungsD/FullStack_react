import { createContext } from "react";
import type { Todo } from "../App";


interface TodoStateContextType {
  todos: Todo[];
}

export const TodoStatusContext = createContext<TodoStateContextType>({todos:[]});


interface TotoDispatchContextType {
  onCreate: (content: string) => void;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoDispatchContext = createContext<TotoDispatchContextType>({
  onCreate : (content: string) => {}, 
  onUpdate : (id: number) => {}, 
  onDelete : (id: number) => {}
});

