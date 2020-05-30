import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="mb-4">
                <span className="text-primary">Contact </span>List
              </h1>
              <hr className="border-primary" style={{ width: "100%" }} />
              <input
                className="mb-4 text-center"
                type="search"
                name="search"
                id="search"
                placeholder="Search Contacts"
              />
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
              <Link to="/contact/add">
                <button
                  className="btn-primary text-light text-center btn-rounded"
                  id="btn-add"
                  title="Add Contact"
                  style={{
                    borderRadius: "50%",
                    padding: "15px 25px",
                    fontSize: "1.5rem",
                    position: "fixed",
                    bottom: "10%",
                    right: "15%",
                  }}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </Link>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
