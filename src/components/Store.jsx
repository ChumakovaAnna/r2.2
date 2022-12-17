import React, {useState} from "react";
import data from './data';
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardView from "./CardView";

export default function Store() {
  const [icon, setIcon] = useState('view_list');
  const products = data;

  const onSwitchIcon = () => {
    setIcon(prev => prev === 'view_list' ? 'view_module' : 'view_list');
  }

  return (
    <>
      <IconSwitch icon={icon} onSwitchIcon={onSwitchIcon}/>
      {icon === 'view_list' ? <CardView products={products}/> : <ListView products={products}/> }
    </>
  )
}