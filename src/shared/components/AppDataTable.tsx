'use client';

import React from 'react';

interface IExampleProp {
  unaVar: string;
  otraVar: number;
}

export const AppDataTable: React.FC<IExampleProp> = ({ unaVar, otraVar }) => {
  // Handlers
  const exampleHandler = (id: number) => {
    console.log('Un handler de ejemplo: ', id);
  }

  return (
    <div>
      <p>Un componente compartido de ejemplo</p>

      <button onClick={() => { exampleHandler(6) }}></button>
    </div>
  )
}

export default AppDataTable