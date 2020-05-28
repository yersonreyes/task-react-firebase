import React from "react";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import firebase from "../../utils/firebase";
import {} from "react-bootstrap";

import "./Task.scss";

const db = firebase.firestore(firebase);

export default function Task(props) {
  const { task, setReloadTask } = props;
  const completeTask = () => {
    db.collection("task")
      .doc(task.id)
      .update({
        completed: !task.completed,
      })
      .then(() => {
        setReloadTask(true);
      });
  };
  return (
    <div className="task">
      <div>
        <Check
          className={task.completed ? "completed" : ""}
          onClick={completeTask}
        />
      </div>
      <div>{task.name}</div>
      <div>
        <Delete />
      </div>
    </div>
  );
}
