import "./App.css";
import wave1 from "./Images/wave1.png";
import wave2 from "./Images/wave2.png";

function App() {
  return (
    <div
      style={{
        maxHeight: "100vh",
        maxWidth: "100vw",
        backgroundColor: "#f7f7f7"
      }}
    >
      <p
        style={{
          padding: "0px 44px",
          position: "absolute",
          top: "0vw",
          left: "0vh",
          fontFamily: "Overpass",
          fontWeight: 900,
          fontSize: "44px",
          letterSpacing: "-2px",
          opacity: "0.33"
        }}
      >
        Mindlayer
      </p>
      <img
        src={wave2}
        alt="Background Mindlayer"
        style={{
          position: "absolute",
          bottom: "-5vw",
          left: "-10vh",
          transform: "rotate(270deg)",
          opacity: ".4"
        }}
      />
      <img
        src={wave1}
        alt="Background Mindlayer"
        style={{
          position: "absolute",
          top: "-20vw",
          right: "-20vh",
          transform: "rotate(0deg)",
          opacity: ".4"
        }}
      />
    </div>
  );
}

export default App;
