import React from 'react'

const CardHero = ({bg , title , description }) => {
  return (
    <>
      <div className="relative h-96">
        <div className={`absolute inset-0 ${bg} opacity-60`}></div>
        <img
          src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
          alt="Mountain biking hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
             {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHero
