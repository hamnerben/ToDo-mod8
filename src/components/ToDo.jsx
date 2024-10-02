import { useState } from "react";

export default function ToDo ({title}) {

    const initialItems = ["Milk", "Eggs", "Bread", "leaves"];

    const [items, setItems] = useState(initialItems);

    return (
      <>
      <div style={{display: "flex", flexDirection: "column"}}>
        <h3>{title} list</h3>
        <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => handleRemoveItem(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      </div>
      </>
    );
}