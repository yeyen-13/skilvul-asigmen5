import { useState } from "react";
import { Card } from "react-bootstrap";
function Profile() {
  let [profile, setProfile] = useState({
    username: "Nama : ",
    password: "password anda : ",
    email: "Email :  ",
    addres: " Addres : ",
    birthdate: "Birth Date :  ",
    gender: " Gender : ",
    skills: " Skills :  ",
  });

  let takeLocal = localStorage.getItem("user");
  console.log(takeLocal);
  let profileLocal = JSON.parse(takeLocal);
  console.log(profileLocal);
  return (
    <>
      <h1>hallo {profileLocal.username}</h1>
      <Card className="text-center">
        <Card.Header>My Profile</Card.Header>
        <Card.Body>
          <Card.Title>My Data</Card.Title>
          <p>
            {profile.username}
            {profileLocal.username}
          </p>
          <p>
            {profile.password}
            {profileLocal.password}
          </p>
          <p>
            {profile.email}
            {profileLocal.email}
          </p>
          <p>
            {profile.addres}
            {profileLocal.addres}
          </p>
          <p>
            {profile.birthdate}
            {profileLocal.birthdate}
          </p>
          <p>
            {profile.gender}
            {profileLocal.gender}
          </p>
          <p>
            {profile.skills}
            {profileLocal.skills}
          </p>
        </Card.Body>
      </Card>
    </>
    
  );
}
export default Profile;
