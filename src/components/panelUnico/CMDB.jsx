import React from "react";
import {Dashboard} from "../cmdb/Dashboard"
export const CMDB = () => {

  return (
    <section id="about">
      <div className="container flex px-1 py-1 md:flex-row flex-col items-center">
      <Dashboard></Dashboard>
      </div>
    </section>
  );
}