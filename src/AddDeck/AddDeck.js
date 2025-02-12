import React from "react";
import "./AddDeck.css";
import axios from "axios";

class AddDeck extends React.Component {
  state = {
    newDeck: {},
    userId: null
  };

  componentWillMount() {
    this.getUserId();
  }

  getUserId = () => {
    var parts = window.location.pathname.split("/");
    var userId = parts[parts.length - 1];
    this.setState({ userId });
  };

  createCard = event => {
    event.preventDefault();
    axios({
      method: "post",
      url: `https://github.com/gatlin-carrier/project3-frontend-starter/${this.state.userId}`,
      data: {
        title: this.state.title,
        description: this.state.description
      }
    }).then(response => {
      console.log(response);
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.title);
    console.log(this.state.description);
  };

  render() {
    console.log(this.state.userId);
    return (
      <div>
        <h1>Add Deck</h1>
        <div class="row">
          <form onChange={this.handleChange} class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">title</i>
                <input
                  id="icon_prefix"
                  type="text"
                  class="validate"
                  name="title"
                  onChange={this.handleChange}
                />
                <label for="icon_prefix">Title</label>
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">description</i>
                <input
                  id="icon_telephone"
                  type="tel"
                  class="validate"
                  name="description"
                  onChange={this.handleChange}
                />
                <label for="icon_telephone">Description</label>
              </div>
              <div class="input-field col s12">
                <a
                  class="btn waves-effect waves-light green accent-2"
                  type="submit"
                  onClick={this.createCard}
                  href={`/deck-list/${this.state.userId}`}
                >
                  Submit <i class="material-icons right ">send</i>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddDeck;
