import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, Nav, Link } from "react-bootstrap";
function Login() {
  let history = useHistory();
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  // let [checkLogin, setCheckLogin]=useState("")
  // console.log(checkLogin)

  //     let userJSON = JSON.stringify(user);
  // console.log(userJSON);

  // localStorage.setItem("user", userJSON);

  let handleUser = (event) => {
    let { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  // console.log(user);

  let handleLogin = (e) => {
    e.preventDefault();
    //membuat variabel untuk mengambil nilai yang sudah di input
    console.log(user);

    //mengambildata user yang tersimpn di local
    let local = localStorage.getItem("user");
    console.log(local);
    //mengunah data data string ke objeck
    let userlocal = JSON.parse(local);
    console.log(userlocal);
    
    if (
      user.email === userlocal.email &&
      user.password === userlocal.password
    ) {
     

    localStorage.setItem("isLogin","true")

      //untuk berpidah ke halam yang di inginkan
      history.push("/profile");
    } else {
      alert("email dan fasswoard salah");
    
    }
  };

  return (
    <>
      <Card className="col-md-5 mx-auto">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Card.Title>Plese Login</Card.Title>

          <input
            type="email"
            placeholder="Email"
            onChange={handleUser}
            label="email"
            name="email"
            value={user.email}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={handleUser}
            label="password"
            name="password"
            value={user.password}
          />

          <br />
          <br />
          <Button
            variant="primary"
            onClick={handleLogin}
            // onSubmit={handleLogin}
            type="submit"
            // () => console.log(user.username , user.password)
          >
            login
          </Button>
          <p>
            <a href="#">forget Fasswoard ?</a>
          </p>
          <p>
            {" "}
            <a href="./Register">cread acun</a>
          </p>

          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
}
export default Login;
