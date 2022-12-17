import React from "react";

export default function IconSwitch({icon, onSwitchIcon}) {
  return(
    <div className="iconSwitch">
      <div className="material-icons" onClick={onSwitchIcon}>{icon}</div>
    </div>
  )
}