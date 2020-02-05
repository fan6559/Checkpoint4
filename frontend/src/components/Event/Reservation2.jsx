import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Reservation2.css";

const Reservation2 = props => {
  return (
    <Form className="back">
      <FormGroup>
        <h4>Réservation</h4>
        <Label className="lab" for="exampleprix">
          Prix
        </Label>
        <Input className="in" type="prix" name="prix" id="exampleprix" />
      </FormGroup>
      <FormGroup>
        <Label className="date" for="exampledate">
          Date
        </Label>
        <Input className="bloc" type="date" name="date" id="exampledate" />
      </FormGroup>
      <FormGroup>
        <Label className="ville" for="exampleSelect">
          Veuillez choisir la ville où se trouve l'évenement :
        </Label>
        <Input className="carre" type="select" name="select" id="exampleSelect">
          <option>Bordeaux</option>
          <option>Lyon</option>
          <option>Marseille</option>
          <option>Paris</option>
          <option>Rennes</option>
          <option>Bayonne</option>
          <option>Tours</option>
          <option>Dijon</option>
          <option>Reims</option>
          <option>Toulouse</option>
          <option>Montpellier</option>
          <option>Lille</option>
          <option>Nice</option>
          <option>Brest</option>
          <option>Clermont-Ferrand</option>
        </Input>
      </FormGroup>
      <div className="reserve">
        <Button>Reserver</Button>
      </div>
    </Form>
  );
};

export default Reservation2;
