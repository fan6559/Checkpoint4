import React from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";

import AlbumPhoto2 from "../AlbumPhoto/AlbumPhoto2";

class Celebrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumPhoto: [],
      isLoading: false
    };
    this.handledelete = this.handledelete.bind(this);
  }

  componentDidMount() {
    console.log("image");
    this.setState({ isLoading: true });
    axios.get("http://localhost:8000/albumPhoto").then(response => {
      const image = response.data;
      console.log(image);

      this.setState({ albumPhoto: image });
    });
  }

  handledelete(index) {
    const filtered = this.state.albumPhoto.filter((_, i) => i !== index);
    this.setState({
      albumPhoto: filtered
    });
  }

  render() {
    return (
      <Container fluid={true} className="mt-4">
        <Row>
          {this.state.albumPhoto.map((albumPhoto, index) => {
            return (
              <AlbumPhoto2
                {...albumPhoto}
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
