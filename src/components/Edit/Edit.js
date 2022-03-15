import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Edit.css";
import { useState } from "react";

const Edit = () => {
  const [users, setUser] = useContext(UserContext);
  console.log(users);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);
  const [name, setName] = useState(user[0].name);
  const [lname, setLname] = useState(user[0].lname);
  const [email, setEmail] = useState(user[0].email);
  const [state, setState] = useState(user[0].state);
  const [city, setCity] = useState(user[0].city);
  const [pincode, setPincode] = useState(user[0].pincode);

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    user[0].name = edited_name;
  };
  const editLname = (e) => {
    setLname(e.target.value);
    const edited_lname = lname;
    user[0].lname = edited_lname;
  };

  const editEmail = (e) => {
    setEmail(e.target.value);
    const edited_email = email;
    user[0].email = edited_email;
  };

  const editState = (e) => {
    setState(e.target.value);
    const edited_state = state;
    user[0].state = edited_state;
  };
  const editCity = (e) => {
    setCity(e.target.value);
    const edited_city = city;
    user[0].city = edited_city;
  };
  const editPincode = (e) => {
    setPincode(e.target.value);
    const edited_pincode = pincode;
    user[0].pincode = edited_pincode;
  };

  const editUser = (e) => {
    e.preventDefault();
    setUser([...users]);
  };

  return (
    <div className="edit">
      <Form onSubmit={() => editUser}>
        <Form.Group>
          <Form.Label>
            <h1>#: {user[0].id}</h1>
          </Form.Label>
        </Form.Group>

        {/* <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="fname"
            value={name}
            onChange={editName}
            placeholder={user[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lname"
            value={lname}
            onChange={editLname}
            placeholder={user[0].lname}
          />
        </Form.Group>


        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={email}
            onChange={editEmail}
            placeholder={user[0].email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control
            type="Text"
            name="state"
            value={state}
            onChange={editState}
            placeholder={user[0].state}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={city}
            onChange={editCity}
            placeholder={user[0].city}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Pincode</Form.Label>
          <Form.Control
            type="text"
            name="pincode"
            value={pincode}
            onChange={editPincode}
            placeholder={user[0].pincode}
          />
        </Form.Group> */}
        <Link to="/">
          <Button variant="primary" type="submit">
            Update
          </Button>
          <Button className="action_btn" variant="danger">
            cancel
          </Button>
          <Button className="home_btn" variant="">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
