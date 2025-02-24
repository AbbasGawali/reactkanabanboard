import { useEffect, useState } from "react";
import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";

const oldTask = localStorage.getItem("kanabanTask");
function App() {
  const [task, setTask] = useState(JSON.parse(oldTask) || []);
  const [activeCard, setActiveCard] = useState(null);

  const handleDelete = (taskIndex) => {
    setTask(task.filter((item, index) => index !== taskIndex));
  };

  const handleEdit = (taskIndex, taskData) => {
    setTask((prev) =>
      prev.map((item, index) =>
        index == taskIndex ? { ...item, task: taskData } : item
      )
    );
  };

  const onDrop = (status, index) => {
    if (activeCard == null || activeCard == undefined) return;

    const taskToMove = task[activeCard];
    const updatedTask = task.filter((item, index) => index !== activeCard);
    updatedTask.splice(CaretPosition, 0, { ...taskToMove, status: status });

    setTask(updatedTask);
  };

  useEffect(() => {
    localStorage.setItem("kanabanTask", JSON.stringify(task));
  }, [task]);

  return (
    <div className="app">
      <header className="app_header">
        {/* sending prop from parent */}
        <TaskForm setTask={setTask} task={task} />
      </header>
      <main className="app_main">
        <TaskColumn
          task={task}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          status="todo"
          setActiveCard={setActiveCard}
          title="Todo"
          onDrop={onDrop}
          img={"🎯"}
        />
        <TaskColumn
          task={task}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          onDrop={onDrop}
          status="doing"
          setActiveCard={setActiveCard}
          title="In Progress"
          img={"🚀"}
        />
        <TaskColumn
          task={task}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          status="done"
          onDrop={onDrop}
          setActiveCard={setActiveCard}
          title="Done"
          img={"✅"}
        />
      </main>
    </div>
  );
}

export default App;
