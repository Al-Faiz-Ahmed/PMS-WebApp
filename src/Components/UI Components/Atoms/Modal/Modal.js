import React from "react";
import "./style.scss";
const Container = (props) => {
  const { DisplayModal } = props;

  return (
    <div className={`modalContainer ${DisplayModal}`}>
      <div className={`contentSection ${DisplayModal}`}>{props.children}</div>
    </div>
  );
};
const Header = (props) => {
  return <div className="headerSection">{props.children}</div>;
};
const Body = (props) => {
  return <div className="bodySection">{props.children}</div>;
};
const Footer = (props) => {
  return <div className="footerSection">{props.children}</div>;
};

export default {
  Container,
  Header,
  Body,
  Footer,
};
