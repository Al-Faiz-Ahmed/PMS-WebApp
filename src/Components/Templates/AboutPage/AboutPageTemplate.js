import React from "react";
import "./style.scss";
import { BreadCrumbs } from "Components/UI Components/Molecules";
import { DashboardHeader, SideBar } from "Components/UI Components/Organisms";

const AboutPageTemplate = () => {
  return (
    <div className="main_body">
      <div className="dashboard_main">
        <SideBar />
        <div className="dashboard">
          <DashboardHeader />
          <div className="breadCrumbSection">
            <BreadCrumbs pageHistory={[["Home", "/"]]} currentPage={"about"} />
          </div>

          <div className="aboutSection">
            <h3>I&apos;m Muhammad Faiz Ahmed.</h3>
            <div className="feildSection">
              <h4>Web Developer</h4>
              <p>
                Web Developer with excellent standard of experience in HTML5,
                CSS3, JavaScript, ECMA Script 5+, Worked with CSS and JavaScript
                Libraries, CSS Pre Processor.
              </p>
            </div>
            <div className="feildSection">
              <h4>MERN Stack Developer</h4>
              <p>
                MERN Stack Developer with excellent experience in{" "}
                <a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/">React js </a> &#34;Front-end
                Library&#34;, <a rel="noopener noreferrer" target="_blank" href="https://expressjs.com/">Express js</a>{" "}
                &#34;Node js Framework&#34;,{" "}
                <a rel="noopener noreferrer" target="_blank" href="https://nodejs.org/en/">Node js</a> &#34;JavaScript
                Engine and also Backend Handler&#34;,{" "}
                <a rel="noopener noreferrer" target="_blank" href="https://www.mongodb.com/">Mongo DB</a> &#34;A No-SQL
                Database used by Giant compnay&#34; and JavaScript Libraries,
                CSS Pre Processor.
              </p>
            </div>
            <div className="feildSection">
              <h4>Ui / UX Designer</h4>
              <p>
                A Standard UI/UX Designer, who understand principle and
                Requirement of UI and UX. Experience in using Prototyping tools
                like{" "}
                <a rel="noopener noreferrer" target="_blank" href="https://www.adobe.com/products/xd.html">Adobe XD</a>{" "}
                and <a rel="noopener noreferrer" target="_blank" href="https://www.figma.com/">Figma</a>
              </p>
            </div>
            <div className="feildSection">
              <h4>React Native Developer</h4>
              <p>
                React Native Developer with good experience in crud App,
                E-commerce App, Guide Apps etc. The best Part of React Native
                its build create both android and ios at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageTemplate;
