import wave1 from "./Images/wave1.png";
import wave2 from "./Images/wave2.png";
import { Button } from "./Button";

function App() {
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
          top: "-7vh",
          left: "-3vw",
          transform: "rotate(0deg)",
          opacity: 0.3
        }}
      />
      <img
        src={wave1}
        alt="Background Mindlayer"
        style={{
          position: "absolute",
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
          cursor: "default"
        }}
      >
        Mindlayer
      </p>
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
            fontSize: "50px",
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
            brain data analysis
          </span>
        </p>
        <p style={{ fontFamily: "Open Sans" }}>
          Mindlayer makes it super-easy to analyse compex EEG data using AI.
          <br />
          All without coding. In a collaborative way.
        </p>
        <div style={{ display: "flex" }}>
          <Button onClick={() => {}} color={"#1731B1"}>
            Request more info
          </Button>
          <Button onClick={() => {}} color={"rgba(0,0,0)"}>
            Keep in touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
