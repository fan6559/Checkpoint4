import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormContact.css";

const FormContact = props => {
  return (
    <Form className="dodo">
      <h5>Formulaire de Contact :</h5>
      <FormGroup>
        <Label className="name" for="examplenom">
          Nom
        </Label>
        <Input className="meduza" type="nom" name="nom" id="examplenom" />
      </FormGroup>
      <FormGroup>
        <Label className="lettre" for="exampleprenom">
          Prénom
        </Label>
        <Input
          className="regard"
          type="prenom"
          name="prenom"
          id="exampleprenom"
        />
      </FormGroup>
      <FormGroup>
        <Label className="email" for="examplemails">
          Adresse mail
        </Label>
        <Input className="weeknd" type="mails" name="mails" id="examplemails" />
      </FormGroup>
      <FormGroup>
        <Label className="texto" for="exampletext">
          Message
        </Label>
        <Input
          className="bakermat"
          type="textarea"
          name="text"
          id="exampletext"
        />
      </FormGroup>
      <div className="bouton">
        <Button color="primary" size="sm">
          Envoyer
        </Button>
      </div>
    </Form>
  );
};

export default FormContact;
