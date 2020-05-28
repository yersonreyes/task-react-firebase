import React from "react";
import {} from "react-bootstrap";
import "./Task.scss";

export default function Task(props) {
  const { task } = props;
  console.log(task);
  return (
    <div className="task">
      <div>
        <h3>{task.name}</h3>
      </div>
    </div>
  );
}
