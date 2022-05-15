import React from "react";

const Bar = ({ value: { icon, name, level } }) => {
  const bar_with = `${level}%`;

  return (
    <div className="bar">
      <div className="bar__wrapper bkg-gradient" style={{ width: bar_with }}>
        <span className="bar__name">
          <img src={icon} alt="icon" className="bar__icon" />
          {name}
        </span>
      </div>
    </div>
  );
};

export default Bar;
