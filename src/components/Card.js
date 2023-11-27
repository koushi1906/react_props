import CardData from "./CardData";

const Card = () => {
  const data = CardData.map((item,id) => {
    return(
      <div className="max-w-sm rounded overflow-hidden relative shadow-lg" key={item.id}>
        <div className="absolute p-4">
          {item.openSpots === 0 && <div className="border border-black bg-red-700 font-bold md:ml-2 md:mt-2 md:py-0.5 md:px-2 text-white">Sold Out</div>}
          {item.country === 'Online'&& item.openSpots !== 0 && <div className="border border-black bg-gray-100 font-bold md:ml-2 md:mt-2 md:py-0.5 px-0.5 md:px-2 text-black">Online</div>}
        </div>
        <img
          src={item.img}
          className="w-full object-cover p-4"
          alt={item.alt}
        />
        <div className="px-4">
          <div className="flex items-center mb-2">
            <img src="https://raw.githubusercontent.com/somadisingh/airbnb/master/src/images/star.png" alt="star" className="w-4 object-contain mr-1" />
            <div className="text-gray-700">{item.stars} 📍<span className="font-bold">{item.country}</span></div>
          </div>
          <div className="font-bold text-xl mb-2">{item.title}</div>
          <div className="text-gray-700"><span className="font-bold">From ${item.price}</span>/ person</div>
        </div>
      </div>
    )
  })
    return (
      <div className="grid pt-4 grid-cols-3 md:pl-16">
        {data}
      </div>
    );
  };
  
  export default Card;
  