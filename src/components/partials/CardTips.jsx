import React from 'react'

const CardTips = ({number, tip, description}) => {
  return (
    <>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="text-green-600 text-4xl font-bold mb-4">{number}</div>
        <h3 className="text-xl font-bold mb-3">{tip}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </>
  );
}

export default CardTips
