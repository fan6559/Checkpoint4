import React from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";

import Celebrite2 from "../Celebrite/Celebrite2";

class Celebrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seance: [],
      isLoading: false
    };
    this.handledelete = this.handledelete.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get("http://localhost:8000/celebrite").then(response => {
      const sortie = response.data;
      this.setState({ seance: sortie });
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
      <Container>
        <Row>
          {this.state.seance.map((celebrite, index) => {
            return (
              <Celebrite2
                {...celebrite}
                key={index}
                delete={this.handledelete.bind(this, index)}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Celebrite;
