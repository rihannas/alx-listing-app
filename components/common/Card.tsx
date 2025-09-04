import React from 'react';
import { CardProps } from '../../interfaces';

function Card(props: CardProps) {
  const { title, description } = props;

  return (
    <div className='border rounded-lg overflow-hidden shadow-lg'>
      <div className='p-4'>
        <h2 className='font-bold text-lg'>{title}</h2>
        <p className='text-gray-600'>{description}</p>
      </div>
    </div>
  );
}

export default Card;
