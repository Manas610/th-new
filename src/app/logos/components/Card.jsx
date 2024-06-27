import Image from "next/image";

function Card({ title , logo , date }) {
    return (
      <div>
        <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:bg-opacity-80 group"> 
          <div className="flex flex-col h-56 items-center justify-center bg-sky-100 mx-4 mt-4 px-8 pt-8 group-hover:pt-4 pb-8 ease-linear duration-200 rounded-2xl relative">
            <Image className="group-hover:drop-shadow-xl ease-linear duration-200" alt="Logo" src={logo} height={180} width={180} />
            <div className="text-xs font-semibold absolute bottom-3 right-3 p-2 rounded-xl glassmorphism-xl shadow-md">{date}</div>
          </div>
          <div className="flex flex-col py-4 font-semibold text-lg text-center">{title}</div>
        </div>
      </div>
    );
}

export default Card
