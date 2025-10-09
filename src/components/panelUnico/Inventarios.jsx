import React from "react";
import {Dashboard} from "../controlInventarios/Dashboard"
export const Inventarios = () => {

  return (
    <section id="about">
      <div className="container flex px-1 py-3 md:flex-row flex-col items-center">
      <Dashboard></Dashboard>
      </div>
    </section>
  );
}