import React from "react";
import "./Profile.css";
import Marquee from "react-fast-marquee";

const Profile = () => {
  const your_profile_details = [
    {
      id: 1,
      photo: 'https://wheatleyhilldental.co.uk/img/profile/keerthi.jpg',
      name: "Keerthi Kumar Ujjini Basavaiah",
      occupation: "Principal Dentist",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 2,
      photo: 'https://wheatleyhilldental.co.uk/img/profile/beverly.jpg',
      name: "Beverley Watson",
      occupation: "Practice Manageress",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 3,
      photo: 'https://wheatleyhilldental.co.uk/img/profile/megan_jones.jpeg',
      name: "Megan Jones",
      occupation: "Trainee Dental Nurse",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 4,
      photo: 'https://wheatleyhilldental.co.uk/img/profile/kate.jpeg',
      name: "Kate Charlton",
      occupation: "Dental Therapist & Hygienist",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 5,
      photo: 'https://wheatleyhilldental.co.uk/img/nonamewhds.jpg',
      name: "Alberta Marlene Da Cunha Ribeiro",
      occupation: "Dentist",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 6,
      photo: 'https://wheatleyhilldental.co.uk/img/profile/ashleigh.jpeg',
      name: "Ashleigh Rowell",
      occupation: "Dental Nurse",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 7,
      photo: 'https://wheatleyhilldental.co.uk/img/profile/favour.jpeg',
      name: "Favour Nwokeji",
      occupation: "Trainee Dental Nurse",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 8,
      photo: 'https://wheatleyhilldental.co.uk/img/profile/poulter.jpeg',
      name: "Miss Frances Poulter (FD)",
      occupation: "Dentist",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },{
      id: 9,
      photo: 'https://wheatleyhilldental.co.uk/img/profile/metcalfe.jpg',
      name: "Joanne Metcalfe",
      occupation: "Receptionist",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
  ];
  return (
    <>
      <section id="our-team">

      <div className="profile_section_container">
        <h2 className="services_header">
          <span>
            <i className="fa-solid fa-angles-right"></i>
          </span>
          Our Teem
        </h2>
        <Marquee pauseOnHover	>
        <div className="p_info_container">
          {your_profile_details.map((e, index) => (
            <div className="profile_details" key={index}>
              <img src={e.photo} alt="profile_image" id="your_profile_image" />
              <div className="profile_info">
                <h3 className="profile_name">{e.name}</h3>
                <h4 className="profile_occupation">{e.occupation}</h4>
              </div>
            </div>
          ))}
        </div>
        </Marquee>
      </div>
      </section>
    </>
  );
};

export default Profile;
