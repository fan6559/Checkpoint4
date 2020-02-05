import React from "react";
import { Col } from "reactstrap";
import "./AlbumPhoto2.css";

class AlbumPhoto2 extends React.Component {
  render() {
    return (
      <Col lg="3" md="6" className="mb-4 ">
        <img src={this.props.photo} className="lulu w-100 h-100" alt="" />
      </Col>
    );
  }
}

export default AlbumPhoto2;
