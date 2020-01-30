import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";
import "./Celebrite2.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Celebrite2 = props => {
  console.log(props);
  return (
    <Col lg={3} className="mb-3">
      <Card className="jeux">
        <CardImg className="adventure" src={props.image} alt="" />
        <CardBody>
          <CardTitle>{props.nom}</CardTitle>
          <CardText>{props.biographie}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Celebrite2;
