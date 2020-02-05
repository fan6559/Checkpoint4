import React from "react";
import HeaderExampleInverted from "../src/components/Header/Header";
import "./App.css";
import Celebrite from "../src/components/Celebrite/Celebrite";
import AlbumPhoto from "../src/components/AlbumPhoto/AlbumPhoto";
import Reservation2 from "../src/components/Event/Reservation2";
import FormContact from "../src/components/Contact/FormContact";
function App() {
  return (
    <div className="App">
      <HeaderExampleInverted />
      <Celebrite />
      <AlbumPhoto />
      <Reservation2 />
      <FormContact />
    </div>
  );
}

export default App;
