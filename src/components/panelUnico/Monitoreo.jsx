import React from "react";
export const Monitoreo = () => {

  return (
    <section id="about">
      <div className="container flex px-1 py-3 md:flex-row flex-col items-center">
        <iframe style={{ width: 'inherit' }}
          title="Monitoreo"
          src="https://sm-engine.atalait.com.mx:5601/s/sat-sari/app/canvas/workpad/a56795db-d110-5b62-8dac-04799966e7e8/page/1?__fullScreen=true"
          height="700" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen={true}></iframe>
      </div>
    </section>
  );
}