import React from 'react';

const CardComponent = props => (
  <div>
    <svg width="400" height="50">
      <g>
        <rect x="0" y="0" width="120" height="50" fill="#fff" stroke="red"></rect>
        <text x="10" y="20" fontSize="20" fill="#000">{props.data.firstName} {props.data.lastName}</text>
        <text x="10" y="40" fontSize="15" fill="#000">Age:{props.data.age}</text>
      </g>
    </svg>
  </div>
);

export default CardComponent;