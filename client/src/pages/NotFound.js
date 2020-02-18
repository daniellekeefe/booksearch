import React from "react";
import Header from "../components/Header";

//Handle error in the chance there are no books to return. 
function NotFound() {
  return (
    <div>
      <Header>
        <h1>404 Page Not Found</h1>
      </Header>
    </div>
  );
}

export default NotFound;
