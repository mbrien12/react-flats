import React from "react";

const Marker = (props) => {
  return (
    <div>
      <i class="fas fa-map-marker-alt fa-3x"></i>
        <div className="marker-content">
           {props.text}
        </div>
    </div>
 
  );
};

export default Marker;