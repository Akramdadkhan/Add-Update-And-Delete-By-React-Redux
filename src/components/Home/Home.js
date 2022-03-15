import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import { Button, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Home = () => {
  const [users, setUser] = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(users);
  const selector = useSelector((state) => state.tasksReducer.data);
  const dispatch = useDispatch();
  const searchHandle = (e) => {
    const filter = users.filter((item) => {
      return item.name.startsWith(searchText);
    });
    setData(filter);
  };
  const handleRefresh = () => {
    dispatch({
      type: "CLEAR_TASKS",
      data: "",
    });
  };
  const handleChecked = (id) => {
    dispatch({
      type: "COMPLETE_TASK",
      data: id,
    });
  };
  useEffect(() => {
    const newData = [];
    selector.forEach((element) => {
      if (element !== undefined) newData.push(element);
    });
    setData([...newData]);
  }, [selector]);

  return (
    <div>
      <Link to="/create">
        <Button id="addr" className="create__btn" variant="">
          + Add Record
        </Button>
      </Link>
      <Button
        id="addr"
        className="create__btn"
        variant=""
        onClick={handleRefresh}
      >
        Refresh
      </Button>

      <Table striped bordered>
        <thead className="table_hed">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Time Stamp</th>
            <th>Is Complete</th>
            <th>Make Changes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.timestamp}</td>
              <td>
                <input
                  type="checkbox"
                  checked={user.iscomplete}
                  onClick={() => handleChecked(user.id)}
                ></input>
              </td>
              <td>
                <Link to={"/edit/" + user.id}>
                  <Button className="action__btn" variant="info">
                    Update
                  </Button>
                </Link>
                <Link to={"/delete/" + user.id}>
                  <Button className="action__btn" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
