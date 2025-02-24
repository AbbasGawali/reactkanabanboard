import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({
  title,
  img,
  setActiveCard,
  handleDelete,
  handleEdit,
  onDrop,
  task,
  status,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <span className="task_column_icon">{img}</span>
        {title}
      </h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {task?.map(
        (item, index) =>
          item.status === status && (
            <div key={index}>
              <TaskCard
                index={index}
                title={item.task}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                setActiveCard={setActiveCard}
                tags={item.tags}
                key={index}
              />
              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </div>
          )
      )}
    </section>
  );
};

export default TaskColumn;
