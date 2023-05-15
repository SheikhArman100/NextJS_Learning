const SSR = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <h1>SSR - ServerSide</h1>
      <div className="mt-10">
        <form className="flex items-center justify-center gap-x-10">
          <div className="px-2 py-3 border border-black rounded-md">
            <input placeholder="add a task" className="bg-transparent" />
          </div>
          <button type="submit" className="px-6 py-3 bg-black text-white rounded-md">ADD</button>
        </form>
        <ul className="mt-10">
            <li className="border border-black p-4 rounded-md">Waking Up Early</li>
        </ul>
      </div>
    </div>
  );
};

export default SSR;
