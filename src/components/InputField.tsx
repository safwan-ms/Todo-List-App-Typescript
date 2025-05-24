interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div className="flex justify-center ">
      <form className="relative w-[240px] sm:w-[400px]" onSubmit={handleAdd}>
        <input
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
          className="w-[250px] text-lg sm:w-[410px] p-2 sm:p-5 rounded-full"
        />
        <button
          type="submit"
          className="absolute bg-pink-500 rounded-full p-1 sm:p-4 text-white right-0 top-[2px]  border-white border-2"
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
