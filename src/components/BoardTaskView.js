
const BoardTaskView = ({status}) => {

    return (
        <div className={`mb-2 p-8 rounded-xl border border-gray-200 ${status === "todo" ? 'bg-yellow-200' : status === "in-progress" ? 'bg-blue-200' : 'bg-green-200'}`}>
            <h3 className="text-lg font-semibold rounded-md">Task summary</h3>
            <hr className="mb-2 border-black"/>
            <p className="text-base">Task description. Something very interesting about task. Where should I get this text - I don't know. Bla bla bla bla bla bla bla. Bla bla bla...</p>
            <span className="text-base float-right">01:01:2022 12:00</span>
        </div>
    )
}

export default BoardTaskView;