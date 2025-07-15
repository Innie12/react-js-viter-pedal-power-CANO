import React from 'react'
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import CardRoutes from '../../partials/CardRoutes';
import CardGear from '../../partials/CardGear';
import CardTips from '../../partials/CardTips';
import CardHero from '../../partials/CardHero';

const RoadBiking = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div>
            <CardHero
              bg={"bg-green-900"}
              title={"Road Biking"}
              description={
                "Speed, endurance, and the freedom of the open road"
              }
            />
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              {/* Featured Routes */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Featured Road Routes
                  </h2>
                  <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <CardRoutes
                    img={
                      "https://images.unsplash.com/photo-1531045535792-b515d59c3d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=8"
                    }
                    alt={"Coastal Highway"}
                    place={"Coastal Highway"}
                    miles={"75 miles"}
                    level={"Intermediate"}
                    ft={"1,200 ft"}
                  />
                  <CardRoutes
                    img={
                      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt={"Mountain Pass"}
                    place={"Mountain Pass"}
                    miles={"42 miles"}
                    level={"Advanced"}
                    ft={"5,800 ft"}
                  />
                  <CardRoutes
                    img={
                      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt={"Countryside Loop"}
                    place={"Countryside Loop"}
                    miles={"30 miles"}
                    level={"Beginner"}
                    ft={"500 ft"}
                  />
                </div>
              </div>

              {/* Gear Guide */}
              <div className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-20">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Essential Road Biking Gear
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Having the right equipment can make all the difference in
                      your riding experience and safety.
                    </p>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition">
                      View Full Gear Guide
                    </button>
                  </div>
                  <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                      <CardGear gear={"Helmet"} />
                      <CardGear gear={"Bike Shoes"} />
                      <CardGear gear={"Jersey"} />
                      <CardGear gear={"Bottles"} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Tips */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Training Tips
                  </h2>
                  <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <CardTips
                    number={"01"}
                    tip={"Cadence Matters"}
                    description={
                      "Aim for a cadence of 80-100 RPM to improve efficiency and reduce fatigue. Use your gears to maintain this range on different terrain."
                    }
                  />
                  <CardTips
                    number={"02"}
                    tip={"Fuel Properly"}
                    description={
                      "Consume 30-60g of carbohydrates per hour on rides longer than 90 minutes to maintain energy levels."
                    }
                  />
                  <CardTips
                    number={"03"}
                    tip={"Group Riding"}
                    description={
                      "When drafting, maintain a consistent speed and avoid sudden braking. Communicate clearly with hand signals and verbal calls."
                    }
                  />
                  <CardTips
                    number={"04"}
                    tip={"Hill Climbing"}
                    description={
                      "Shift before you need to, stay seated on moderate grades, and focus on steady breathing and pedal strokes."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default RoadBiking
