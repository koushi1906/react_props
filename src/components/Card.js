const Card = () => {
    return (
      <div className="max-w-sm pl-16 pt-8 rounded overflow-hidden shadow-lg">
        <img
          src="https://www.athletespeakers.com/storage/celebrities/1627410490_Katie-Zaferes-Banner-1.jpg"
          className="w-full object-cover"
          alt="Katie Zaferes, professional swimmer"
        />
        <div className="px-6 py-4">
          <div className="flex items-center mb-2">
            <img src="https://raw.githubusercontent.com/somadisingh/airbnb/master/src/images/star.png" alt="star" className="w-4 object-contain mr-1" />
            <div className="text-gray-700">5.0 .USA</div>
          </div>
          <div className="font-bold text-xl mb-2">Life Lessons with Katie Zaferes</div>
          <div className="text-gray-700"><span className="font-bold">From $136</span>/ person</div>
        </div>
      </div>
    );
  };
  
  export default Card;
  