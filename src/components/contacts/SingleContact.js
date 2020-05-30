import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";

class SingleContact extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          const contact = contacts.filter(
            (contact) => contact.id === Number(this.props.match.params.id)
          );
          const singleContact = contact[0];
          return (
            <div className="container single">
              <div className="contact-app">
                <div className="top">
                  <Link to="/" className="close" title="back">
                    <i className="fa fa-arrow-left"></i>
                  </Link>
                  <h2>Contact</h2>
                  <Link
                    to={`/contact/edit/${
                      singleContact ? singleContact.id : null
                    }`}
                    title="edit contact"
                  >
                    <i className="fa fa-pencil"></i>
                  </Link>
                </div>
                <hr />
                <div className="contact-box">
                  <div className="contact-icon">
                    <i className="fa fa-user fa-3x"></i>
                  </div>
                  <div className="contact-name">
                    {singleContact ? singleContact.name : null}
                  </div>
                </div>
                <hr />
                <div className="action">
                  <div className="action-call">
                    <div className="action-icon">
                      <i className="fa fa-phone fa-2x"></i>
                    </div>
                    <div className="action-text">Call</div>
                  </div>
                  <div className="action-sms">
                    <div className="action-icon">
                      <i className="fa fa-comment fa-2x"></i>
                    </div>
                    <div className="action-text">Text</div>
                  </div>
                  <div className="action-video">
                    <div className="action-icon">
                      <i className="fa fa-video-camera fa-2x"></i>
                    </div>
                    <div className="action-text">Video</div>
                  </div>
                </div>
                <hr />
                <div className="contact-number">
                  {singleContact ? singleContact.phone : null}
                </div>
                <hr />
                <div className="contact-email">
                  {singleContact ? singleContact.email : null}
                </div>
                <hr />
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default SingleContact;
