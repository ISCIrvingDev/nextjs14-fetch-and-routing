'use client';

import React from 'react';

interface IExampleProp {
  unaVar: string;
  otraVar: number;
}

export const EjemploComponent: React.FC<IExampleProp> = ({ unaVar, otraVar }) => {
  // Handlers
  const exampleHandler = (id: number) => {
    console.log('Un handler de ejemplo: ', id);
  }

  return (
    <div>
      <p>Un componente de ejemplo</p>

      <button onClick={() => { exampleHandler(6) }}></button>
    </div>
  )
}

export default EjemploComponent