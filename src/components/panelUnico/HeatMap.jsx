import React from "react";
export const HeatMap = () => {

  return (
    <section id="about">
      <div className="container flex px-5 py-3 md:flex-row flex-col items-center">
        <iframe src="https://tia.atalait.com.mx:5133/tia/login/?next=/"
          title="Heatmap Atalait"
          style={{ width: 'inherit' }}
          width="inherit" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen={true}></iframe>
      </div>
    </section>
  );
}