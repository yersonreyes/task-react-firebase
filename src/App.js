import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { map } from "lodash";
import firebase from "./utils/firebase";
import "firebase/firestore";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import "./App.scss";
import { database } from "firebase";

const db = firebase.firestore(firebase);

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    db.collection("task")
      .orderBy("completed")
      .get()
      .then((response) => {
        const arrayTasks = [];
        map(response.docs, (task) => {
          const data = task.data();
          data.id = task.id;
          arrayTasks.push(data);
        });
        setTasks(arrayTasks);
      });
  }, []);
  return (
    <Container fluid className="app">
      <div className="title">
        <h1>Yerson Reyes</h1>
      </div>
      <Row className="todo">
        <Col
          className="todo__title"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <h2>Today</h2>
        </Col>
        <Col
          className="todo__list"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          {map(tasks, (task, index) => (
            <Task key={index} task={task} />
          ))}
        </Col>
        <Col
          className="todo__input"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddTask />
        </Col>
      </Row>
    </Container>
  );
}
