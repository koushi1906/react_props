import CardData from "./CardData";

const Card = () => {
  const data = CardData.map((item,id) => {
    return(
      <div className="max-w-sm rounded overflow-hidden shadow-lg" key={item.id}>
        <img
          src={item.img}
          className="w-full object-cover p-4"
          alt={item.alt}
        />
        <div className="px-4">
          <div className="flex items-center mb-2">
            <img src="https://raw.githubusercontent.com/somadisingh/airbnb/master/src/images/star.png" alt="star" className="w-4 object-contain mr-1" />
            <div className="text-gray-700">{item.stars} .{item.country}</div>
          </div>
          <div className="font-bold text-xl mb-2">{item.title}</div>
          <div className="text-gray-700"><span className="font-bold">From ${item.price}</span>/ person</div>
        </div>
      </div>
    )
  })
    return (
      <div key={data.id} className="grid pt-4 grid-cols-3 pl-16">
        {data}
      </div>
    );
  };
  
  export default Card;
  