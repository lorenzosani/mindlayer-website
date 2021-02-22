import React, { useState } from "react";
import wave1 from "./Images/wave1.png";
import wave2 from "./Images/wave2.png";
import { Button } from "./Button";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      style={{
        maxHeight: "100vh",
        maxWidth: "100vw",
        backgroundColor: "#f7f7f7"
      }}
    >
      <img
        src={wave2}
        alt="Background Mindlayer"
        style={{
          position: "absolute",
          display: window.innerWidth < 700 ? "none" : "block",
          top: "-7vh",
          left: window.innerWidth < 700 ? "-15vw" : "-3vw",
          transform: "rotate(0deg)",
          opacity: 0.3
        }}
      />
      <img
        src={wave1}
        alt="Background Mindlayer"
        style={{
          position: "absolute",
          display: window.innerWidth < 700 ? "none" : "block",
          bottom: "-30vh",
          right: "-15vw",
          transform: "rotate(90deg)",
          opacity: 0.3
        }}
      />
      <p
        style={{
          padding: "0px 44px",
          position: "absolute",
          top: "0vw",
          left: "0vh",
          fontFamily: "Overpass",
          color: "#1731b1",
          fontWeight: 900,
          fontSize: "32px",
          letterSpacing: "-2px",
          opacity: "0.66",
          cursor: "pointer"
        }}
        onClick={() => setShowForm(false)}
      >
        Mindlayer
      </p>
      {!showForm && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "25vh",
            textAlign: "center"
          }}
        >
          <p
            style={{
              fontFamily: "Overpass",
              fontWeight: 900,
              fontSize: window.innerWidth < 700 ? "40px" : "50px",
              letterSpacing: "-2px",
              opacity: 0.8,
              marginBlockEnd: 0
            }}
          >
            Next-generation{" "}
            <span
              style={{
                color: "#1731B1"
              }}
            >
              human data analysis
            </span>
          </p>
          <p style={{ fontFamily: "Open Sans", margin: "16px 25px" }}>
            Mindlayer makes it super-easy to analyse complex biomedical data
            using AI.
            <br />
            All without coding. In a collaborative way.
          </p>
          <div
            style={{
              display: window.innerWidth < 700 ? "block" : "flex",
              margin: "30px 25px"
            }}
          >
            <Button onClick={() => setShowForm(true)} color={"#1731B1"}>
              Request a demo
            </Button>
            <a
              href="http://eepurl.com/hmVFNz"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              <Button onClick={() => {}} color={"rgba(0,0,0)"}>
                Keep in touch
              </Button>
            </a>
          </div>
        </div>
      )}
      {showForm && (
        <div
          style={{
            overflowX: "scroll",
            position: "relative",
            width: "100vw",
            height: "100vh",
            margin: "15vh 0",
            zIndex: 200
          }}
        >
          <iframe
            title="Request a demo"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfUb-vAqUOIVWKa1VCf2nxrDwrcacttp0ndV2p0qSiN1NEpEQ/viewform?embedded=true"
            width="100%"
            height="1500px"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      )}
    </div>
  );
};

export default App;
