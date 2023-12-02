"use client";
import { useState } from "react";
import CheckBox from "./CheckBox";
import List from "./List";

export default function Home() {
  const [items, setItems] = useState([
    { id: 1, name: "Hello World", checked: false },
    { id: 2, name: "Hello World 2", checked: false },
    { id: 3, name: "Hello World 3", checked: false },
  ]);

  const toggleChecked = (id: number) => {
    return () => {
      setItems(
        items.map((item) => {
          if (item.id === id) {
            return { ...item, checked: !item.checked };
          } else {
            return item;
          }
        })
      );
    };
  };

  return (
    <div>
      <CheckBox items={items} toggleChecked={toggleChecked} />
      <List items={items} />
    </div>
  );
}
