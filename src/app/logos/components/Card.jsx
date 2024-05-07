import Image from "next/image";

function Card({ title , logo , date }) {
    return (
      <div>
        <div className="flex flex-col bg-white rounded-3xl"> 
          <div className="flex flex-col h-56 items-center justify-center bg-sky-100 mx-4 mt-4 p-8 rounded-2xl relative">
            <Image src={logo} height={180} width={180} />
            <div className="text-xs font-semibold absolute bottom-2 right-2 p-2 rounded-3xl bg-yellow-50 shadow-md">{date}</div>
          </div>
          <div className="flex flex-col py-2 font-semibold text-lg text-center">{title}</div>
        </div>
      </div>
    );
}

export default Card
