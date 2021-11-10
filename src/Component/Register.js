import { Form, Col, Button, Row, Alert, NavItem, Card } from "react-bootstrap";
import { useState } from "react";
import { useAlert } from "react-alert";

// import Alert from "./Alert";
import { useHistory } from "react-router-dom";
function Register() {
  // const [show, setShow] = useState(true);
  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    addres: "",
    birthdate: "",
    gender: "",
    skills: "",
  });

  let handleChangeUser = (event) => {
    let { name, value } = event.target;
    //event.target.value= berisi apa yang di klik isi dari varibel yang di klik
    setUser((preUser) => ({
      //preuser parameter
      ...preUser,
      //spread operator =mengambil semua  isi data dari setUser ,setuser berisi data user yang mau diubah
      [name]: value,
    }));
    // setUser((preUser)=>{
    //   ...preUser,
    //   [name]: value,
    // });
  };
  console.log(user);

  let history = useHistory();
  let handleRegis = (e) => {
    // even(e) bisa di ganti dengan apa aja= parameter adalah nilai semntara
    e.preventDefault();
    // preventDefault=mengubah kebiasan dasar suatu fungsi agar tidak merifres ulang saat di submid
    // alert("nama :" + user.username + "   "+ "email:" + user.email)
    alert(
      ` nama: ${user.username}\n email: ${user.email}\n password: ${user.password}\n addres: ${user.addres}\n  birthdate: ${user.birthdate}\n gender: ${user.gender}\n skills: ${user.skills}`
    );
    let userJSON = JSON.stringify(user);
    //stringdifi = merubah data objek ke json
    console.log(userJSON);

    localStorage.setItem("user", userJSON);
    //printah menyimpan data user ke dalam local torage

    history.push("/login");
    //untuk berpidah ke halam yang di inginkan
  };

  return (
    <>
      <Card className="col-md-8 mx-auto">
        <Card.Header>Register</Card.Header>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Your name"
              value={user.username}
              name="username"
              onChange={handleChangeUser}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={handleChangeUser}
              name="email"
              value={user.email}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChangeUser}
              name="password"
              value={user.password}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              placeholder="Your address"
              onChange={handleChangeUser}
              name="addres"
              value={user.addres}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Birthdate
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              placeholder="Date of Birth"
              onChange={handleChangeUser}
              name="birthdate"
              value={user.birthdate}
            />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Gender
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="L/Male"
                name="gender"
                onChange={handleChangeUser}
                value="L/Male"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="P/Female"
                name="gender"
                onChange={handleChangeUser}
                value="P/Female"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Skills
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="Checkbox"
                label="Coding"
                name="skills"
                onChange={handleChangeUser}
                value="Coding"
                id="formHorizontalCheckbox1"
              />
              <Form.Check
                type="Checkbox"
                label=" Design"
                name="skills"
                onChange={handleChangeUser}
                value="Design"
                id="formHorizontalCheckbox1"
              />
              <Form.Check
                type="Checkbox"
                label="Gaming"
                name="skills"
                onChange={handleChangeUser}
                value="Gaming"
                id="formHorizontalCheckbox1"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submid" onClick={handleRegis}>
              Register
            </Button>
          </Col>
        </Form.Group>
      </Card>
    </>
  );
}
export default Register;
