import React from 'react'
import Dice from './Dice';
import NumberBox from './NumberBox';
import TickleBox from "./TickleBox";
import TickleBox2 from './TickleBox2';

export default function App() {
  return (
    <React.Fragment>
      <TickleBox/>
      <TickleBox2/>
      <NumberBox/>
      <Dice/>
    </React.Fragment>

  )
}