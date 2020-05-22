import React, { Component } from "react";
import { Consumer } from "../../context";
import { v1 as uuidv1 } from "uuid";
import TextInput from "../layout/TextInput";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
    success: { name: false, email: false, phone: false },
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuidv1(),
      name,
      email,
      phone,
    };
    //validation check
    if (name === "") {
      this.setState({
        errors: { name: "Name cannot be empty" },
      });
      return;
    } else {
      this.setState({
        success: { name: true },
      });
    }
    if (email === "") {
      this.setState({
        errors: { email: "Email cannot be empty" },
      });
      return;
    } else {
      this.setState({
        success: { name: true, email: true },
      });
    }
    if (phone === "") {
      this.setState({
        errors: { phone: "Phone cannot be empty" },
      });
      return;
    } else {
      this.setState({
        success: { phone: true },
      });
    }

    dispatch({ type: "ADD_CONTACT", payload: newContact });
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
      success: { name: false, email: false, phone: false },
    });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors, success } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3" id="add-contact-form">
              <div
                className="card-header text-center"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  letterSpacing: "0.2rem",
                }}
              >
                Add Contact
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInput
                    label="Name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                    success={success.name}
                  />
                  <TextInput
                    label="Email"
                    name="email"
                    placeholder="Enter email"
                    type="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                    success={success.email}
                  />
                  <TextInput
                    label="Phone"
                    name="phone"
                    placeholder="Enter phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                    success={success.phone}
                  />
                  <input
                    type="submit"
                    value="Save"
                    className="btn btn-block btn-primary"
                    style={{ letterSpacing: "0.2rem" }}
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
