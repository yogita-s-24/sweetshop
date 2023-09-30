import React from "react";
import Config from "./../../utils/config.json";

function Home() {
  return (
    <>
      <div className="container px-5">
        <div
          className="container  p-5 "
          style={{ backgroundColor: Config.theme.accentColor }}
        >
          <h1
            className="text-center mt-3 "
            style={{ color: Config.theme.primaryColor }}
          >
            {" "}
            {Config.title}
          </h1>
          <p
            className="text-center mt-4 fs-5 fw-bold"
            style={{ color: Config.theme.secondaryColor }}
          >
            {Config.description}
          </p>

          <h2 style={{ color: Config.theme.secondaryColor }}>Services</h2>
          <div
            style={{
              display: "flex",
              flexDirection: Config.servicesCardDirection,
            }}
          >
            {Config.services.map((seviceData, i) => {
              const { title, description, price } = seviceData;

              return (
                <div className="card m-3 shadow" key={i}>
                  <div className="card-body">
                    <h3 className="card-title text-center" style={{ color: Config.theme.secondaryColor }}>{title}</h3>
                    <p className="card-text" >{description}</p>
                    <p className="card-text text-center">Price: <span style={{ color: Config.theme.secondaryColor }}>{price}</span> </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;