import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../../components/Counter'

export function CounterGroup() {
  const initArray = [...Array(6).keys()];

  return (<div>{
      initArray.map(key => <Counter key={key}/>)
    }</div>);
}
