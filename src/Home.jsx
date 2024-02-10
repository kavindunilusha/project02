import React from "react";
import { Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>This is home page</h1>
      <Link to="/Profile">Go to profile page</Link>
      <br />
      <Link to="/Create">Go to create page</Link>
      <br />

      <Button onClick={() => Navigate("/Create")}>Create page</Button>
    </div>
  );
}

export default Home;
