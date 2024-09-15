
const MarketPlace = () => {
  const crops = [
    {
      id: 1,
      name: 'Rice',
      description: 'Various categories of rice available',
      image: 'frontend/public/Crops/Rice.jpg',
    },
    {
      id: 2,
      name: 'Wheat',
      description: 'Various categories of wheat available',
      image: 'frontend/public/Crops/Wheat.jpg',
    },
    {
      id: 3,
      name: 'Maize',
      description: 'Various categories of maize available',
      image: 'frontend/public/Crops/Maize.jpg',
    },
  ];
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
      <h1 className="text-[3rem] font-bold text-[#2874fc] mb-[1rem] text-center">Market Place</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* here will be the cards */}
      </div>
      </div>
    </section>
  )
}

export default MarketPlace