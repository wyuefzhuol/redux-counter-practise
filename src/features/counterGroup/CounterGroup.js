import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Counter } from '../counter/Counter'

export function CounterGroup() {
  return (<Counter />);
}
