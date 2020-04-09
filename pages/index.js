import React, { Component } from 'react';
import Link from 'next/link';
import content from '../content/home.md';

export default class Home extends Component {
  render() {
    const { attributes, html } = content;
    return (
      <React.Fragment>
        <main>

          <section className="hero">
            <h1>{attributes.title}</h1>
            <h2>Get help from others in your community, or help someone in your community.</h2>
          </section>

          <section className="assistance-info">
            <h3>First, we need a little info....</h3>

            <form>
              <div className="info-input">
                <label htmlFor="fname">First name</label>
                <input type="text" id="fname" name="fname" />
              </div>

              <div className="info-input">
                <label htmlFor="lname">Last name</label>
                <input type="text" id="lname" name="lname" />
              </div>

              <div className="info-input">
                <label htmlFor="lname">Zip code</label>
                <input type="text" id="zcode" name="lname" />
              </div>

              <div className="info-input">
                <label htmlFor="lname">Phone number </label>
                <input type="text" id="pnumber" name="lname" />
              </div>

              <div className="info-input">
                <label htmlFor="lname">Email address<span className="italics"> (optional) </span></label>
                <input type="text" id="eaddress" name="lname" />
              </div>
            </form>
          </section>

          <div className="permission">
            <h4>Do we have your permission to send you text messages?</h4>

            <div className="contact-permission-box">
              <div>
                <input type="checkbox" id="yes-contact" name="yes-contact" />
                <label htmlFor="scales">Yes</label>
              </div>

              <div>
                <input type="checkbox" id="no-contact" name="no-contact" />
                <label htmlFor="no-contact">No</label>
              </div>

            </div>
          </div>

          <section className="need-want-help">
            <h5>Do you need help or are you offering help?</h5>

            <div className="help-buttons">
              <div className="button-div">
                <button className="need-help">I Need Help</button>
              </div>

              <div className="button-div">
                <button className="want-to-help">I Want To Help</button>
              </div>
            </div>
          </section>

          <section className="get-involved">
            <h3>Want To Get Involved?</h3>
            <div className="button-div">
              <button>Join Us Here!</button>
            </div>
          </section>

        </main>
      </React.Fragment>
    );
  }
}
