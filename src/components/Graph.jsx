import React from "react";
import "../assets/styles/Graph.css";

const Graph = () => {
  return (
    <div>
      <div className="graph-container"  data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" href="#collapseGraph">
        <p className="graph-title" > Transaction Graph</p>
      </div>
      <div id="collapseGraph" class="collapse">
        
      </div>
    </div>
  );
};

export default Graph;
