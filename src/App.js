import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPen } from "react-icons/fa";
function App() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);

  const getData = () => {
    fetch("https://6300763b34344b643108c047.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  };


  useEffect(() => {
     getData();
    // axios
    //   .get("https://6300763b34344b643108c047.mockapi.io/users")
    //   .then((data) => setStudents(data.data));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("https://6300763b34344b643108c047.mockapi.io/users/" + id)
      .then((data) => getData());
  };

  return (
    <div className="container  ">
      <Button color="primary" onClick={() => navigate("/action")}>
        Create Student
      </Button>
      <Table bordered>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Batch</th>
            <th>Status</th>
            <th>Program</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((value, index) => {
            return (
              <tr key={value.id}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.mobileNumber}</td>
                <td>{value.batch}</td>
                <td>{value.status}</td>
                <td>{value.program}</td>
                <td>
                  <Button
                    color="primary"
                    onClick={() => navigate("/action/" + value.id)}
                  >
                    <FaPen />
                  </Button>
                  <Button color="danger" onClick={() => handleDelete(value.id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
