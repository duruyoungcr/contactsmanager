import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom";

class Contact extends Component {
  state = {
    showInfo: false,
  };
  onClickDelete = (id, dispatch) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE", payload: id });
  };

  render(props) {
    const { contact } = this.props;
    const { showInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3" id="contact-box">
              <div>
                <h5>
                  <Link
                    to={`/contact/${contact.id}`}
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    onClick={this.handleclick}
                  >
                    {contact.name}
                  </Link>

                  <i
                    onClick={() => {
                      this.setState({
                        showInfo: !this.state.showInfo,
                      });
                    }}
                    className="fa fa-sort-down"
                    style={{ cursor: "pointer" }}
                  ></i>
                  <i
                    className="fa fa-times"
                    style={{
                      color: "red",
                      float: "right",
                      cursor: "pointer",
                      opacity: 0.7,
                    }}
                    onClick={this.onClickDelete.bind(
                      this,
                      contact.id,
                      dispatch
                    )}
                  ></i>
                </h5>
                {showInfo ? (
                  <ul className="list-group">
                    <li className="list-group-item">Email: {contact.email}</li>
                    <li className="list-group-item">Phone: {contact.phone}</li>
                  </ul>
                ) : null}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
