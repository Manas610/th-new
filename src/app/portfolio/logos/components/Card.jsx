function Card({ color, title, description }) {
    return (
      <div className={`${color} inline-block w-auto rounded h-80 hover:shadow-xl text-white shadow-black`}>
        <div className="h-32 border-b border-gray-200"></div>
        <div className="flex flex-col text-center pt-4 font-semibold text-lg">{title}</div>
        <div>
          <p className="p-4">{description}</p>
        </div>
      </div>
    );
}

export default Card
