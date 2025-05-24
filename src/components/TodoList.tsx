import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Todo } from "../model";
import { MdCancel, MdDone } from "react-icons/md";
import { FcCancel } from "react-icons/fc";

interface TodoListProps {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleDone: (id: number) => void;
  editingId: number | null;
  editingText: string;
  setEditingText: React.Dispatch<React.SetStateAction<string>>;
  startEditing: (id: number, currentText: string) => void;
  saveEdit: (id: number) => void;
  cancelEdit: () => void;
}

const TodoList = ({
  todos,
  handleDelete,
  handleDone,
  editingId,
  editingText,
  setEditingText,
  saveEdit,
  cancelEdit,
  startEditing,
}: TodoListProps) => {
  const activeTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);

  return (
    <section className="m-3 my-5">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {/* New Todos (left side) */}
        <div className="md:w-1/2 bg-white/20 backdrop-blur-md rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-3 px-4 text-gray-100 ">
            New Todos
          </h2>
          <ul className="grid grid-cols-1 gap-4">
            {activeTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between px-4  text-2xl py-3 rounded-full bg-gradient-to-t from-gray-800 to-gray-400 border-2"
              >
                <div className="text-white mt-1 text-xl sm:text-lg font-medium break-words w-2/3">
                  {editingId === todo.id ? (
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className="w-full focus:outline-none rounded-2xl px-2 py-1 text-black"
                    />
                  ) : (
                    todo.todo
                  )}
                </div>
                <div className="flex gap-2">
                  {editingId === todo.id ? (
                    <>
                      <button
                        onClick={() => saveEdit(todo.id)}
                        className="text-green-700 font-bold p-1 bg-white rounded-full cursor-pointer"
                      >
                        <MdDone size={25} />
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="text-red-700 font-bold p-1 bg-white rounded-full cursor-pointer"
                      >
                        <FcCancel size={25} />
                      </button>
                    </>
                  ) : (
                    <>
                      <span
                        className="text-blue-900 font-bold p-1 bg-white rounded-full cursor-pointer"
                        onClick={() => startEditing(todo.id, todo.todo)}
                      >
                        <AiFillEdit size={25} />
                      </span>
                      <span
                        className="text-red-700 font-bold p-1 bg-white rounded-full cursor-pointer"
                        onClick={() => handleDelete(todo.id)}
                      >
                        <AiFillDelete size={25} />
                      </span>
                      <span
                        className="text-green-700 font-bold p-1 bg-white rounded-full cursor-pointer"
                        onClick={() => handleDone(todo.id)}
                      >
                        <MdDone size={25} />
                      </span>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Completed Todos (right side) */}
        <div className="md:w-1/2 bg-green-100/20 backdrop-blur-md rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-3 text-green-200 px-4">
            Completed Todos
          </h2>
          <ul className="grid grid-cols-1 gap-4">
            {completedTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between px-4 py-3 rounded-full bg-gradient-to-t from-green-900 to-green-500 border-2"
              >
                <div className="text-white mt-1 text-base sm:text-lg font-medium break-words w-2/3 line-through">
                  {todo.todo}
                </div>
                <div className="flex gap-2">
                  <span
                    className="text-red-700 font-bold p-1 bg-white rounded-full cursor-pointer"
                    onClick={() => handleDelete(todo.id)}
                  >
                    <AiFillDelete size={25} />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
