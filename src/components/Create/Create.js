import React, { useState, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Create = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [timestamp] = useState(Date.now());
  const dispatch = useDispatch();

  const [users, setUser] = useContext(UserContext);

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  // const updateTimestamp = (e) => {
  //   setTimestamp(e.target.value);
  // };

  const addUser = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "ADD_TASK",
      data: {
        id: id,
        title: title,
        timestamp: timestamp,
      },
    });
  };

  return (
    <div className="create">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>#</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={updateTitle}
            placeholder="Title"
          />
        </Form.Group>

        <Button className="action_btn" variant="primary" type="submit">
          Add
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="danger">
            cancel
          </Button>
        </Link>
        <Link to="/">
          <Button className="action_btn" variant="warning">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;
