import Form from "./Form";
import Header from "./Header";

const TodosPage = () => {
  return (
    <main className="bg-[#222] flex h-screen text-white flex-col gap-y-20">
      <Header />
      <div className="w-[55rem] h-[50rem] mx-auto flex flex-col gap-y-7">
        <Form />
        <div className="h-full  w-full px-4">
          <div>
            <div className="flex gap-x-2">
              <h2 className="text-gray-200">Todo</h2>
              <p className="text-gray-300">4 Items</p>
            </div>
            <hr className="my-1 border-gray-500 " />
          </div>
        </div>
      </div>
    </main>
  );
};
export default TodosPage;
