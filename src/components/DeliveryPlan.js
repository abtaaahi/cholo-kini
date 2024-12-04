import React, { useState } from "react";
import "./DeliveryPlan.css"; 

const DeliveryPlan = () => {
  const [category, setCategory] = useState("inside");

  const deliveryData = {
    inside: {
      heading: "Delivery Inside Chattogram City Area",
      deliveryTime: "Delivery Time: 24 Hours",
      plans: [
        { weight: "Upto 500 gm", cost: "BDT 60" },
        { weight: "500 gm to 1 Kilo", cost: "BDT 70" },
        { weight: "1 Kilo to 2 Kilo", cost: "BDT 90" },
      ],
      notes: [
        "1% COD charge will be applicable",
        "This price is exclusive of any VAT/TAX.",
        "For weight more than 2KG, additional 15TK/Per KG (SAME CITY) will be applicable.",
      ],
    },
    outside: {
      heading: "Delivery Outside Chattogram City Area",
      deliveryTime: "Delivery Time: 72 Hours",
      plans: [
        { weight: "Upto 500 gm", cost: "BDT 120" },
        { weight: "500 gm to 1 Kilo", cost: "BDT 145" },
        { weight: "1 Kilo to 2 Kilo", cost: "BDT 180" },
      ],
      notes: [
        "2% COD charge will be applicable",
        "This price is exclusive of any VAT/TAX.",
        "For weight more than 2KG, additional 20TK/Per KG will be applicable.",
      ],
    },
  };

  const currentData = deliveryData[category];

  return (
    <div className="delivery-plan">
      <h1>Delivery Charge</h1>
      <div className="category-select">
        <button
          className={category === "inside" ? "active" : ""}
          onClick={() => setCategory("inside")}
        >
          Inside Chattogram City Area
        </button>
        <button
          className={category === "outside" ? "active" : ""}
          onClick={() => setCategory("outside")}
        >
          Outside Chattogram City Area
        </button>
      </div>
      <h2>{currentData.heading}</h2>
      <p className="delivery-time">{currentData.deliveryTime}</p>
      <table>
        <thead>
          <tr>
            <th>Weight</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {currentData.plans.map((plan, index) => (
            <tr key={index}>
              <td>{plan.weight}</td>
              <td>{plan.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
        {currentData.notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryPlan;
