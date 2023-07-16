import "./App.css";
import qrcode from "./images/qrcode.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <img src={qrcode} alt="QR code" className="qrcode" />
        </div>
        <h1>Improve your front-end skills by building projects</h1>
        <p className="light-txt">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
      <span className="attribution">
        Challenge by {""}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          <span className="credits"> Frontend Mentor </span>
        </a>
      </span>

      <span className="attribution-me">
        <a
          href="https://www.linkedin.com/in/eerkekoglou/"
          target="_blank"
          rel="noreferrer"
        >
          Coded by <span className="me"> Elisabeth Erkekoglou </span>{" "}
        </a>
      </span>
    </div>
  );
}

export default App;
