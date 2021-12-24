import BoardTaskView from "./BoardTaskView";
import { BiTask, BiTaskX, BiDetail } from "react-icons/bi"

const BoardColumnView = ({name}) => {

    const status = () => {
        if (name === 'TODO') {
            return 'todo';
        } else if (name === 'In progress') {
            return 'in-progress';
        } else {
            return 'done';
        }
    }

    return (
        <div>
            <h2 className="mb-2 text-xl font-semibold">
                {status() === 'todo' && <BiTaskX className="inline-block text-2xl text-blue-300 align-text-top"/>}
                {status() === 'in-progress' && <BiDetail className="inline-block text-2xl text-yellow-300 align-text-top"/>}
                {status() === 'done' && <BiTask className="inline-block text-2xl text-green-300 align-text-top"/>}
                {name}
            </h2>
            <BoardTaskView status = {status()}/>
            <BoardTaskView status = {status()}/>
        </div>
    )
}

export default BoardColumnView;