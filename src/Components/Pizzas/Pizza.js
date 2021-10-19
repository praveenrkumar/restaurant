import React, { useState } from "react";
import swal from "sweetalert";

// Pizza (Child Component)

function Pizza({ pizza }) {
  const handleClick = () => {
    console.log("clicked");
    swal("Order Confirmed!", "Will be Delivered Soon", "success");
  };
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  return (
    // Destructing Data's

    <div>
      <div className="card mt-4 shadow p-3 mb-5 bg-body rounded ">
        <div className="card-body">
          {/* Pizza Name */}
          <h1 style={{ fontSize: "11px" }} className="text-center">
            {pizza.name}
          </h1>
          {/* Pizza Name Ends */}
          <img src={pizza.image} className="container" alt="" />

          {/* Varients & Quantity*/}
          <div className="flex-container">
            <div className="d-flex mt-3 ">
              <div className="w-100">
                <p>Varient</p>
                <select
                  style={{ borderColor: "black" }}
                  className="form-control-sm"
                  value={varient}
                  onChange={(e) => {
                    setvarient(e.target.value);
                  }}
                >
                  {pizza.varients.map((varient) => {
                    return <option value={varient}>{varient}</option>;
                  })}
                </select>
              </div>
              <div className="w-100">
                <p>Quantity</p>
                <select
                  style={{ borderColor: "black" }}
                  className="form-control-sm"
                  value={quantity}
                  onChange={(e) => {
                    setquantity(e.target.value);
                  }}
                >
                  {[...Array(10).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          {/* Varients & Quantity Ends*/}

          {/* Price and Cart */}
          <div className="flex-container mt-3">
            <div className="d-flex">
              <div className="mt-2 w-100">
                <p>Price : {pizza.prices[0][varient] * quantity} </p>
              </div>
              <div className="m-1 w-100">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleClick}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/* Price and Cart ends */}
        </div>
      </div>
    </div>
  );
}

export default Pizza;

// Before Outputing the code Run JASON-SERVER (Data's)

// npm run server --watch data2/db.json
// npm start
