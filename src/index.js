import React from "react";
import ReactDom from "react-dom/client";
import { pizzaData } from "./data.ts";
import "./index.css";

function App() {
  const footerData = [
    "© 2025 El Italiano. All Rights reserved.",
    "🍕TEL: +2 123 456 789",
  ];
  return (
    <div>
      <Header header={"- El Italiano -"} />
      <div className="menu">
        {pizzaData.map((data) => (
          <Menu data={data} key={data.name} />
        ))}
      </div>
      <div className="footer">
        {footerData.map((data, idx) => (
          <Footer footer={data} key={idx} />
        ))}
      </div>
    </div>
  );
}

function Menu(item) {
  return (
    <div>
      <img src={item.data.src} alt={item.data.name} />
      <h2>{item.data.name}</h2>
      <p>
        <b>ingredients: </b>
        {item.data.ingredients}
      </p>
      <p>
        <b>region: </b>
        {item.data.region}
      </p>
      <p>
        <b>price: </b>
        {item.data.price}€
      </p>
    </div>
  );
}

function Header(data) {
  return <h1 className="header">{data.header}</h1>;
}

function Footer(data) {
  return <p>{data.footer}</p>;
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
