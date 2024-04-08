function Card({ title }) {
    return (
      <div className="bg-blue-300 inline-block w-auto rounded h-auto hover:shadow-xl text-white hover:shadow-slate-200">
        <div className="glassmorphism h-32 border-b border-gray-200"></div>
        <div className="flex flex-col text-center py-4 font-semibold text-lg">{title}</div>
      </div>
    );
}

export default Card
