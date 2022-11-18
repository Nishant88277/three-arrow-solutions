import React from "react";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {

  
  return (
    <div className="container">
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};
