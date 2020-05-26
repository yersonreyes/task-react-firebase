import React from "react";
import { Form, Button } from "react-bootstrap";
import { ReactComponent as Send } from "../../assets/original.svg";
import "./AddTask.scss";

export default function AddTask() {
  const onSubmit = () => {
    console.log("formulario enviado.....");
  };
  return (
    <Form onSubmit={onSubmit} className="add-task">
      <input type="text" placeholder="New Task" />
      <Button type="submit">
        <Send />
      </Button>
    </Form>
  );
}
