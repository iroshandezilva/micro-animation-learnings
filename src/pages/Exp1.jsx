import React from "react";
import { TrashIcon } from "@phosphor-icons/react";
import "./Exp1.css";

function Exp1() {
  return (
    <div>
      <div className="button">
        <div className="on-hold">
          <TrashIcon size={24} /> Hold to delete
        </div>
        <TrashIcon size={24} /> Hold to delete
      </div>
    </div>
  );
}

export default Exp1;
