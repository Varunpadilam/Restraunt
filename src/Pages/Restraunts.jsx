import React from "react";
import List from "../Component/List";
import { items } from "../Configure/Data";

const Restraunts = () => {
  return (
    <div className="flex gap-6 flex-wrap p-5 justify-center">
      {items.map((hii) => {
        return <List item={hii} />;
      })}
    </div>
  );
};

export default Restraunts;
