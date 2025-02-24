import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";
const TaskForm = ({ setTask, task }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item == tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    setTaskData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.task == "") {
      return alert("task cant be empty");
    }
    setTask((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="">
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={taskData.task}
          name="task"
          type="text"
          className="task_input"
          placeholder="enter your task"
        ></input>
        <div className="task_form_bottom_line">
          <div className="task_tags">
            <Tag
              name="HTML"
              selected={checkTag("HTML")}
              selectTag={selectTag}
            />
            <Tag name="CSS" selected={checkTag("CSS")} selectTag={selectTag} />
            <Tag name="JS" selected={checkTag("JS")} selectTag={selectTag} />
            <Tag
              name="REACT"
              selected={checkTag("REACT")}
              selectTag={selectTag}
            />
          </div>

          <div className="task_op">
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
              <option value={"todo"}>Todo</option>
              <option value={"doing"}>Doing</option>
              <option value={"done"}>Done</option>
            </select>
            <button type="submit" className="task_submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
