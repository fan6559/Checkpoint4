import React from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";

import Celebrite2 from "../Celebrite/Celebrite2";
import "./Celebrite2.css";

class Celebrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celebrites: [],
      isLoading: false
    };
    this.handledelete = this.handledelete.bind(this);
  }

  componentDidMount() {
    console.log("sortie");
    this.setState({ isLoading: true });
    axios.get("http://localhost:8000/celebrite").then(response => {
      const sortie = response.data;
      console.log(sortie);

      this.setState({ celebrites: sortie });
    });
  }

  handledelete(index) {
    const filtered = this.state.celebrite.filter((_, i) => i !== index);
    this.setState({
      celebrite: filtered
    });
  }

  render() {
    return (
      <Container fluid={true} style={{ backgroundColor: "black" }}>
        {/* <Container> */}
        <Row className="bruh">
          {this.state.celebrites.map((celebrite, index) => {
            return (
              <Celebrite2
                {...celebrite}
                key={index}
                delete={this.handledelete.bind(this, index)}
              />
            );
          })}
        </Row>
        {/* </Container> */}
      </Container>
    );
  }
}

export default Celebrite;
