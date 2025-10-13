import React from "react";
import inicio_panel from '../../assets/inicio_panel.png'
export const About = () => {

  return (
    <section id="about">
      <div className="container mx-auto flex px-5 py-3 md:flex-row flex-col items-center">

        <img
          alt="Panel de inicio"
          src={inicio_panel}
        />
      </div>
    </section>
  );
}