import { BiTable } from "react-icons/bi"
import BoardColumnView from "./components/BoardColumnView";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin bg-gray-100">
      <h1 className="text-5xl mb-3"><BiTable className="inline-block text-green-300 align-top"/> Kanban board</h1>
      <div className="grid grid-cols-3 gap-3">
        <BoardColumnView name={"TODO"}/>
        <BoardColumnView name={"In progress"}/>
        <BoardColumnView name={"Done"}/>
      </div>
      
    </div>
  );
}

export default App;
