import Image from "next/image";

function Card({ title , logo }) {
    return (
      <div className="bg-blue-200 inline-block w-72 h-auto hover:shadow-xl text-white hover:shadow-slate-200">
        <div className="glassmorphism h-56 border-b border-gray-200 flex flex-col justify-center items-center">
          <Image src={logo} height={180} width={180} />
        </div>
        <div className="flex flex-col text-center py-4 font-semibold text-lg">{title}</div>
      </div>
    );
}

export default Card
