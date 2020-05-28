import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { isEmpty } from "lodash";
import firebase from "../../utils/firebase";
import "firebase/firestore";
import { ReactComponent as Send } from "../../assets/original.svg";
import "./AddTask.scss";

const db = firebase.firestore(firebase);

export default function AddTask() {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty(task)) {
      db.collection("task")
        .add({
          name: task,
          completed: false,
        })
        .then(() => {
          setTask("");
          console.log("tarea creada");
        });
    }
  };
  return (
    <Form onSubmit={onSubmit} className="add-task">
      <input
        type="text"
        placeholder="New Task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <Button type="submit">
        <Send />
      </Button>
    </Form>
  );
}
