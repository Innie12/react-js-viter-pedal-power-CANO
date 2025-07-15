import React from 'react'

const CardRoutes = ({img, alt, place, miles, level, ft}) => {
  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <img
          src={img}
          alt={alt}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{place}y</h3>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div>
              <p className="text-sm text-gray-500">Distance</p>
              <p className="font-medium">{miles}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Difficulty</p>
              <p className="font-medium">{level}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Elevation</p>
              <p className="font-medium">{ft}</p>
            </div>
          </div>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
            View Route
          </button>
        </div>
      </div>
    </>
  );
}

export default CardRoutes
