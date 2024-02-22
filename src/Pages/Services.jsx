import React from "react";
import ServiceData from "./ServiceData";
import "./Services.css";
const Services = () => {
  return (
    <>
      <section id="our-services">
        <div className="services_container">
          <h2 className="services_header">
            <span>
              <i class="fa-solid fa-angles-right"></i>
            </span>
            Our Treatments
          </h2>
          <div className="service_info_container">
            {ServiceData.map((e, index) => (
              <div
                className="service_info"
                key={index}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="service_image_details">
                  <img
                    className="service_img"
                    src={e.img_src}
                    alt="dental images"
                  />
                </div>
                <div className="service_description">
                  <h3 className="service_title">{e.title}</h3>
                  <p className="service_detail_info">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
