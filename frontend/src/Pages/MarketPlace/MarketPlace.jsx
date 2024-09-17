import CropCard from "../../components/CropCard/Cropcard";

const MarketPlace = () => {
  const crops = [
    {
      id: 1,
      name: 'Rice',
      description: 'Various categories of rice available',
      image: '/Crops/Rice.jpg',
    },
    {
      id: 2,
      name: 'Wheat',
      description: 'Various categories of wheat available',
      image: '/Crops/Wheat.jpg',
    },
    {
      id: 3,
      name: 'Maize',
      description: 'Various categories of maize available',
      image: '/Crops/Maize.jpg',
    },
  ];
  return (
    <section className="py-10 bg-gray-100">
      <div className="flex flex-col container mx-auto px-14">
      <h1 className="text-[3rem] font-bold text-[#2874fc] mb-[1rem] text-center">Market Place</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          crops.map((crop) => (
            <CropCard key={crop.id} crop={crop}/>
          ))
        }
      </div>
      </div>
    </section>
  )
}

export default MarketPlace