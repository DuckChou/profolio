import React from 'react';

import myImage from '../assets/image/myphoto.png';

import linkedinIcon from '../assets/image/linkedin.png';

import githubIcon from '../assets/image/github.png';

import arrowIcon from '../assets/image/arrow.png';

import experienceIcon from '../assets/image/experience.png';

import educationIcon from '../assets/image/education.png';

import checkmarkIcon from '../assets/image/checkmark.png';

import emailIcon from '../assets/image/email.png';

import phoneIcon from '../assets/image/phone-call.png';

import Weather_app from '../assets/image/weatherapp.png';

import keren_aware from '../assets/image/keren_aware.png';

import jason_shop from '../assets/image/jason_shop.png';

import cv from '../assets/files/CVJason.pdf';

function Content() {
  const handleDownloadCV = () => {
    // window.open('../../public/files/CVJason.pdf', '_blank');
    const fileUrl = cv;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.download = 'CVJason.pdf';
    link.click();
  };

  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img src={myImage} alt="Jason Zhou" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Jason Zhou</h1>
          <p className="section__text__p2">Fullstack Developer</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={handleDownloadCV}>
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = './#contact')}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedinIcon}
              alt="My Linkedin"
              className="icon"
              onClick={() =>
                (window.location.href =
                  'https://www.linkedin.com/in/keren-zhou-040325267/')
              }
            />
            <img
              src={githubIcon}
              alt="My Github profile"
              className="icon"
              onClick={() =>
                (window.location.href =
                  'https://github.com/DuckChou?tab=repositories')
              }
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>

        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Professional Experience</h3>
              <div style={{ textAlign: 'start', marginTop: '15px' }}>
                <p>2022.12 - 2023.3 &nbsp; &nbsp; (Canberra, Australia)</p>
                <p style={{ fontWeight: 'bold' }}>
                  Osky Interactive - Internship
                </p>
                <p style={{ fontWeight: 'bold' }}>Frontend Developer</p>
              </div>
              <div style={{ textAlign: 'start', marginTop: '15px' }}>
                <p>2023.3 - 2023.4 &nbsp; &nbsp; (Canberra, Australia)</p>
                <p style={{ fontWeight: 'bold' }}>
                  Osky Interactive - Employee
                </p>
                <p style={{ fontWeight: 'bold' }}>Frontend Developer</p>
              </div>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <div style={{ textAlign: 'start', marginTop: '15px' }}>
                <p>2021 - 2023 &nbsp; &nbsp; (Canberra, Australia)</p>
                <p style={{ fontWeight: 'bold' }}>
                  Australian National University - Master
                </p>
                <p style={{ fontWeight: 'bold' }}>Master of Computing</p>
              </div>
              <div style={{ textAlign: 'start', marginTop: '15px' }}>
                <p>2016 - 2020 &nbsp; &nbsp; (Dalian, China)</p>
                <p style={{ fontWeight: 'bold' }}>
                  Dalian Maritime University - Bachelors
                </p>
                <p style={{ fontWeight: 'bold' }}>
                  Information Technology and Information System
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = './#skills')}
        />
      </section>

      <section id="skills">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>CSS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>SASS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>React</h3>
                    <p>Intermediate</p>
                  </div>
                </article>

                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>React Native</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">
                Backend & Devops Development
              </h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>Django</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>Python</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>AWS CE2</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>AWS RDS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmarkIcon}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div className="text-container">
                    <h3>AWS S3</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = './#projects')}
        />
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={Weather_app}
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Weather App
              </h2>

              <p style={{ marginBottom: '10px' }}>React+TypeScript+Sass</p>
              <p style={{ marginBottom: '10px' }}>Deployed on AWS Amplify</p>
              <p style={{ marginBottom: '10px' }}>
                weather app that can show the weather of the city you search for
                or your current location.
              </p>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    window.location.href =
                      'https://github.com/DuckChou/Weather_app';
                  }}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    window.location.href =
                      'https://main.d2ptziliarbev6.amplifyapp.com/';
                  }}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={jason_shop} alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Jason Shop</h2>
              <p style={{ marginBottom: '10px' }}>
                React+Python Django+PostgreSQL+Paypal
              </p>
              <p style={{ marginBottom: '10px' }}>
                Deployed with AWS EC2, AWS RDS, AWS S3
              </p>
              <p style={{ marginBottom: '10px' }}>
                An e-commerce website that allows users to browse products, add
                products to cart, and checkout with Paypal.
              </p>
              <p style={{ marginBottom: '10px' }}>
                Admin can manage products, orders, and users in the admin panel.{' '}
                <br />
                (username: admin@admin.com <br /> password: admin)
              </p>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    window.location.href =
                      'https://github.com/DuckChou/JasonShopBackend';
                  }}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    window.location.href =
                      'https://main.d1qiuxeis8lh6i.amplifyapp.com/';
                  }}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={keren_aware}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Aware App</h2>
              <p style={{ marginBottom: '10px' }}>Vue+Python Flask</p>
              <p style={{ marginBottom: '10px' }}>
                Aware app is a web application that can help people to be more
                aware of their exercise.
              </p>
              <p style={{ marginBottom: '10px' }}>
                (username:keren_Aware, password:971227)
              </p>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    window.location.href =
                      'https://github.com/DuckChou/flaskbe';
                  }}
                  // onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => {
                    window.location.href = 'https://duckchou.github.io/Aware/';
                  }}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = './#contact')}
        />
      </section>

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={emailIcon}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:jason.keren.zhou@outlook.com">
                jason.keren.zhou@outlook.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedinIcon}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/keren-zhou-040325267/">
                My LinkedIn
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={phoneIcon}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>0432231694</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
