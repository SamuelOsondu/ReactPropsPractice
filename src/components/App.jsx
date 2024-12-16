import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        tel="+123 456 789"
        email="b@beyonce.com"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      />
      <Card name="" tel="" email="" img="" />
    </div>
  );
}

export default App;
