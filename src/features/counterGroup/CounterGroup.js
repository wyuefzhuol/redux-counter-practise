import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../../components/Counter'
import {
  handleResize,
  groupSize,
  totalNumber,
} from './counterGroupSlice'

export function CounterGroup() {
  const dispatch = useDispatch();
  const actualGroupSize = useSelector(groupSize);
  const actualTotalNumber = useSelector(totalNumber);

  const initArray = [...Array(actualGroupSize).keys()];

  return (<div>
    <label>
      Group Size:
      <input onBlur={e=>dispatch(handleResize(parseInt(e.target.value)))} defaultValue="0" />
    </label><br />
    <label>
      Total Number:
      {actualTotalNumber}
    </label><br />
    {
      initArray.map(key => <Counter key={key}/>)
    }</div>);
}
