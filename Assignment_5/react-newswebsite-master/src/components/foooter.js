import React, { useState } from "react";
import useGetRequest from "./useGetRequest";

const Footer = ({ id }) => {
	

	const {
		data: article,
		isLoading,
		errorMessage,
	} = useGetRequest("http://localhost:7000/articles/" + id);

	return (
		
		<footer>
          <div className="row">
            <div
              className="column"
              style={{ backgroundColor: "rgb(51,51,51)" }}
            >
              <img
                className="first_image"
                style={{ width: "100px" }}
                src="images/white_logo.png"
              />
              
              <img />
              <p className="first_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
                impedit libero, beatae animi provident nesciunt molestias ipsam
                nemo ad.
              </p>
            </div>
            <div
              className="column"
              style={{ backgroundColor: "rgb(51,51,51)" }}
            >
              <h2>Subscribe to our Newsletter</h2>
              <p className="news_sub_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
                impedit libero, beatae animi provident nesciunt molestias ipsam
                nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Et ea impedit libero, beatae animi provident nesciunt
                molestias ipsam nemo ad.
              </p>
              <form>
                <input type="textbox" placeholder="Enter your email address" />
                <button
                  className="sub_button"
                  style={{ backgroundColor: "red" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div
              className="column"
              style={{ backgroundColor: "rgb(51,51,51)" }}
            >
              <h2 className="contact">Connect with us</h2>
              <ul>
                <li className="contacts">
                  <a className="footer-links" href="#">
                    Contact
                  </a>
                  
                </li>
                <li className="contacts">
                  <a className="footer-links" href="#">
                    Careers
                  </a>
                </li>
                <li className="contacts">
                  <a className="footer-links" href="#">
                    Subscriptions
                  </a>
                </li>
                <li className="contacts">
                  <a className="footer-links" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </footer>
	);
};

export default Footer;
