import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Todo } from "../model";
import { MdDone } from "react-icons/md";

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <section className="m-3 my-5">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between px-4 py-3 rounded-full bg-gradient-to-t from-gray-800 to-gray-400 border-2"
            key={todo.id}
          >
            <div className="text-white mt-1 text-base sm:text-lg font-medium break-words w-2/3">
              {todo.todo}
            </div>
            <div className="flex gap-2">
              <span className="text-blue-900 font-bold p-1 bg-white rounded-full cursor-pointer">
                <AiFillEdit size={25} />
              </span>
              <span className="text-red-700 font-bold p-1 bg-white rounded-full cursor-pointer">
                <AiFillDelete size={25} />
              </span>
              <span className="text-green-700 font-bold p-1 bg-white rounded-full cursor-pointer">
                <MdDone size={25} />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
