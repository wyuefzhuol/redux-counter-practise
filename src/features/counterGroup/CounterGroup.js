import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../../components/Counter'

export function CounterGroup() {
  return (<Counter />);
}
