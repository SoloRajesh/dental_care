import React from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
// import slider_one from "../Pages/images/slide_one.png";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="slider_container">
          <div className="slider-images">
            <div className="slider_image">
              <img
                className="w-100"
                src='https://img.freepik.com/free-vector/female-dentist-doing-dental-work-customers-medical-clinic_1150-50295.jpg?w=740&t=st=1708582789~exp=1708583389~hmac=906efefc4dc4ee14f03d8ef257a15233023ad9fe2897aad77973830c643f5c72' data-aos="fade-down"
              />
            </div>

            <div className="front_container">
              <div className="front_page_info">
                <h2
                  style={{
                    fontSize: "51px",
                    margin: "0",
                    textAlign: "left",
                    lineHeight: "1.2",
                    color: "hsl(218, 70%, 18%);",
                  }}
                >We love our job.<br/>
                It pays us with trust and smiles.
                </h2>
                <p>We believe that beautiful smile brings confidence</p>
              </div>
              <div className="slider_controls">
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
                <div className="circle_dot_class">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clinic_container">
          <div className="clinic_info">
            <div className="basic_info" id="info_01">
              <h2>In an emergency? Need help now?</h2>
              <p>
              Please feel free to reach us anytime. We are happy to help you.
              </p>

              <HashLink
                to={"/register"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn"><span class="material-symbols-outlined">
call
</span> 01429 820308</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_02">
              <h2>Are you looking to improve your oral health and smile?</h2>
              <p>
              There's no better option than INVISALIGN
              </p>
              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">Read More</div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_03">
              <h2>Opening Hours</h2>
              <p>
                Monday – Friday : 09.00 AM – 05.00 PM 
              </p>

              <HashLink
                to={"/"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn" id="tr_btn_01">
                  Book An Appointment
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
