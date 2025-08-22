import React from "react";
import "../css/Dashboard.css";
import { Area } from "./Area";
import { Pie } from "./Pie";
import { Tree } from "./Tree";
import { Bar } from "./Bar";
import { Line } from "./Line";

export const Dashboard = () => {
  return (
    <div className="Contenedor">
      <div className="contenedor-graficas">
        <div className="grafica">
          <Tree />
        </div>
        <div className="grafica">
          <Line />
        </div>
        <div className="grafica">
          <Bar />
        </div>
        <div className="grafica">
          <Area />
        </div>
        <div className="grafica">
          <Pie />
        </div>
      </div>
    </div>
  );
};
