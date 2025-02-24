import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
const TaskCard = ({
  title,
  tags,
  handleDelete,
  setActiveCard,
  handleEdit,
  index,
}) => {
  const handleEditFunction = () => {
    const data = prompt("enter new Data ");
    if (data) {
      handleEdit(index, data);
    }
  };

  return (
    <div
      className="task_card"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{title} </p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {/* <Tag name={"HTML"} /> */}

          {tags.map((item, index) => (
            <Tag key={index} name={item} selected />
          ))}
        </div>
        <div className="task_operation">
          <div className="task_delete" onClick={() => handleDelete(index)}>
            <span className="delete_icon">❌</span>
          </div>
          <div className="task_edit" onClick={() => handleEditFunction()}>
            <span className="edit_icon">📝</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
