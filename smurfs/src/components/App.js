import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = e => {
    let value = e.target.value;
    if (e.target.name === "age") {
      value = parseInt(value, 10);
    }
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.smurf.name !== "" &&
      this.state.smurf.age !== "" &&
      this.state.smurf.height !== ""
    ) {
      this.props.addSmurf(this.state.smurf);
    } else {
      alert(
        `you cannot submit an empty form, please fill form out to add a smurf`
      );
    }
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>SMURFS!</h1>
          <div>
            <form className="add-smurf-form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.changeHandler}
                value={this.state.smurf.name}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                onChange={this.changeHandler}
                value={this.state.smurf.age}
              />
              <input
                type="text"
                name="height"
                placeholder="Height"
                onChange={this.changeHandler}
                value={this.state.smurf.height}
              />
              <button className="add-smurf-btn">Add Smurf</button>
            </form>
          </div>
          <div className="smurfs-list">
            {this.props.smurfs.map(smurf => {
              return (
                <div key={smurf.id} className="smurf">
                  <div className="smurf-name">Name: {smurf.name}</div>
                  <div className="smurf-age">Age: {smurf.age}</div>
                  <div className="smurf-height">Height: {smurf.height}</div>
                  <button className="md-button">Update</button>
                  <button className="md-button-danger">Delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
