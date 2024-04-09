import Link from "next/link";

function Card({ title, description , image }) {

  const url = `/apps/${encodeURIComponent(title)}`;

    return (
      <div className="bg-white hover:shadow-xl hover:shadow-slate-200 rounded-lg overflow-hidden sm:h-72">
        <div className="grid sm:grid-cols-5 gap-4">
          <div className="sm:col-span-2 flex flex-col justify-center items-center rounded-lg h-72">
            <div className="p-8 rounded-lg bg-sky-100">
              <img src={image} alt="App Logo" className="w-40 h-40 object-contain" />
            </div>
          </div>
          <div className="sm:col-span-3 p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
            <div>
              <Link href={url}>
                <button className="mt-4 mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    
    );
}

export default Card
