import React, { useState } from "react";
import Data from "./Data";
const App = () => {
  const [result, setResult] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div className="row" id="main">
        <dic class="col-md-12 col-sm-12 my-5 text-center fs-1 mb-3 fw-bolder">Calculator</dic>
          <div className="col-md-4 col-sm-3"></div>
          <div className="col-md-4 col-sm-6 p-3 bg-dark">
            <div id="screen" className="col-12 bg-dark text-light text-end p-3">
              <input
                placeholder="0"
                value={result}
                className="fs-1 fw-bold mx-3 col-12 bg-dark text-light border-0 text-end bg"
              />
            </div>
            <input
              type="button"
              value="Del"
              className="input btn btn-secondary text-dark fw-bold fs-5 px-3 ms-1 mt-2"
              onClick={(e) => setResult(result.slice(0, -1))}
            />
            <input
              type="button"
              value="C"
              className="input btn btn-secondary text-dark fw-bold fs-5 px-3 ms-1 mt-2"
              onClick={() => setResult("")}
            />
            {Data.map((Val) => {
              const { symbol, className } = Val;
              return (
                <>
                  <input
                    type="button"
                    value={symbol}
                    className={`${className}`}
                    onClick={(e) => setResult(result.concat(e.target.value))}
                  />
                </>
              );
            })}
            <input
              type="button"
              value="="
              className="input btn btn-warning text-dark fs-5 px-3 ms-1 mt-2"
              onClick={() => setResult(eval(result).toString())}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
