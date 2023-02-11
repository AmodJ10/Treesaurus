import "./App.css";
import { useState } from "react";
import axios from "axios";
import Image from "./image";

function App() {
  const [fact1, setfact1] = useState("");
  const [fact2, setfact2] = useState("");
  const [fact3, setfact3] = useState("");
  const [fact4, setfact4] = useState("");
  const [text, settext] = useState("");
  const [sol, setsol] = useState("");
  const [area, setarea] = useState("");
  const [n1, setn1] = useState("");
  const [a1, seta1] = useState("");
  const [c1, setc1] = useState("");
  const [n2, setn2] = useState("");
  const [a2, seta2] = useState("");
  const [c2, setc2] = useState("");
  const [p1, setp1] = useState("");
  const [p2, setp2] = useState("");
  const [p3, setp3] = useState("");
  const [p4, setp4] = useState("");

  const handleSubmit = () => {
    axios
      .get(
        "http://127.0.0.1:5000/foresttype/" +
        fact1 +
        "/" +
        fact2 +
        "/" +
        fact3 +
        "/" +
        fact4
      )
      .then((response) => {
        console.log(response);
        settext(response.data.ForestType);
        setsol(response.data.Solution);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleHumidity1 = (event) => {
    setfact1("veryHigh");
    console.log(fact1);
  };
  const handleHumidity2 = (event) => {
    setfact1("high");
    console.log(fact1);
  };
  const handleHumidity3 = (event) => {
    setfact1("medium");
    console.log(fact1);
  };
  const handleHumidity4 = (event) => {
    setfact1("low");
    console.log(fact1);
  };
  const handleHumidity5 = (event) => {
    setfact1("veryLow");
    console.log(fact1);
  };
  const handleTemp1 = (event) => {
    setfact2("veryHigh");
    console.log(fact2);
  };
  const handleTemp2 = (event) => {
    setfact2("high");
    console.log(fact2);
  };
  const handleTemp3 = (event) => {
    setfact2("medium");
    console.log(fact2);
  };
  const handleTemp4 = (event) => {
    setfact2("low");
    console.log(fact2);
  };
  const handleTemp5 = (event) => {
    setfact2("veryLow");
    console.log(fact2);
  };

  const handleRainfall1 = (event) => {
    setfact3("veryHigh");
    console.log(fact3);
  };
  const handleRainfall2 = (event) => {
    setfact3("high");
    console.log(fact3);
  };
  const handleRainfall3 = (event) => {
    setfact3("medium");
    console.log(fact3);
  };
  const handleRainfall4 = (event) => {
    setfact3("low");
    console.log(fact3);
  };
  const handleRainfall5 = (event) => {
    setfact3("veryLow");
    console.log(fact3);
  };
  const handleElevation1 = (event) => {
    setfact4("veryHigh");
    console.log(fact4);
  };
  const handleElevation2 = (event) => {
    setfact4("high");
    console.log(fact4);
  };
  const handleElevation3 = (event) => {
    setfact4("medium");
    console.log(fact4);
  };
  const handleElevation4 = (event) => {
    setfact4("low");
    console.log(fact4);
  };
  const handleElevation5 = (event) => {
    setfact4("veryLow");
    console.log(fact4);
  };

  const handleOnChange = (event) => {
    setarea(event.target.value);
  };

  const handleFinal = () => {
    axios
      .get("http://127.0.0.1:5000/treedensity/" + text + "/" + area)
      .then((response1) => {
        console.log(response1);
        setn1(response1.data.Tree1.Name);
        seta1(response1.data.Tree1.Area);
        setc1(response1.data.Tree1.Quantity);
        setn2(response1.data.Tree2.Name);
        seta2(response1.data.Tree2.Area);
        setc2(response1.data.Tree2.Quantity);
        setp1(response1.data.Plants[0]);
        setp2(response1.data.Plants[1]);
        setp3(response1.data.Plants[2]);
        setp4(response1.data.Plants[3]);
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="overlay shadow-lg">
            <div className="container1">
              <h1 className=" text-center ">
                <strong>Treesaurus</strong>
              </h1>
              <h5 className="d-flex justify-content-end">By CrankLever</h5>
            </div>
            <div className="container2 ">
              <p>
                Beginner Forester's Guide to Afforestation

              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="overlay shadow-lg">
            <div className="container3">
              <div className="container4 d-flex justify-content-around">
                <div class="dropdown">
                  <button
                    class="btn btn-outline-dark dropdown-toggle btn-lg"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <strong>Humidity</strong>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button class="dropdown-item " onClick={handleHumidity1}>
                        very high
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleHumidity2}>
                        high
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleHumidity3}>
                        medium
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleHumidity4}>
                        low
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleHumidity5}>
                        very low
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button
                    class="btn btn-outline-success dropdown-toggle btn-lg"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <strong>Temp</strong>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button class="dropdown-item" onClick={handleTemp1}>
                        very high
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleTemp2}>
                        high
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleTemp3}>
                        medium
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleTemp4}>
                        low
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleTemp5}>
                        very low
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button
                    class="btn btn-outline-success dropdown-toggle btn-lg"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <strong>Rainfall</strong>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button class="dropdown-item" onClick={handleRainfall1}>
                        very high
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleRainfall2}>
                        high
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleRainfall3}>
                        medium
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleRainfall4}>
                        low
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleRainfall5}>
                        very low
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button
                    class="btn btn-outline-success dropdown-toggle btn-lg"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <strong>Elevation</strong>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button class="dropdown-item" onClick={handleElevation1}>
                        very high
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleElevation2}>
                        high
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleElevation3}>
                        medium
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleElevation4}>
                        low
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" onClick={handleElevation5}>
                        very low
                      </button>
                    </li>
                  </ul>
                  <div className="result">
                    <h3 className="mx-3 my-3">
                      ForestType : <strong>{text}</strong>
                    </h3>
                    <h3 id="sol" className="mx-3 my-3 ">
                      <strong>Solution</strong> :{" "}
                    </h3>
                    <p>{sol}</p>
                  </div>
                </div>
                <button
                  id="submit"
                  className="btn btn-outline-success btn-lg"
                  onClick={handleSubmit}
                >
                  <strong>Submit</strong>
                </button>
                <button
                  id="submit1"
                  className="btn btn-outline-success btn-lg"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <strong>Get Miyawaki Solution</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="overlay1 shadow-lg">
            <div className="container5">
              <label for="inputPassword5" class="form-label mx-3">
                Area
              </label>
              <input
                id="inputPassword5"
                class="form-control mx-3"
                placeholder="Enter area in sq.ft"
                value={area}
                onChange={handleOnChange}
              />
              <label for="inputPassword5" class="form-label mx-3">
                ForestType
              </label>
              <input
                id="inputPassword5"
                class="form-control mx-3"
                placeholder={text}
              />
              <button
                className="btn btn-success mx-3 my-3"
                onClick={handleFinal}
              >
                <strong>Submit</strong>
              </button>
            </div>
            <div className="container6">
              <Image text={text} />
              <h2 className="mx-1 my-1">Tree 1</h2>
              <h5 className="mx-1">Name :{n1} </h5>
              <h5 className="mx-1">Area :{a1} </h5>
              <h5 className="mx-1 my-1">Quantity : {c1}</h5>
              <h2 className="mx-1 my-1">Tree 2</h2>
              <h5 className="mx-1">Name : {n2}</h5>
              <h5 className="mx-1">Area : {a2}</h5>
              <h5 className="mx-1">Quantity : {c2} </h5>
              <h4>
                Plants : {p1} , {p2} , {p3} , {p4}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default App;
