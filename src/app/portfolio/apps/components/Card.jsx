import Link from "next/link";

function Card({ title, description , image }) {

  const url = `/portfolio/apps/${encodeURIComponent(title)}`;

    return (
      <div className="bg-white hover:shadow-xl hover:shadow-slate-200 rounded-lg overflow-hidden">
        <div className="grid sm:grid-cols-5 gap-4">
          <div className="md:col-span-2 flex flex-col justify-center items-center rounded-lg bg-sky-100">
            <img src={image} alt="App Logo" className="w-40 h-40 object-cover" />
          </div>
          <div className="md:col-span-3 p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
            <div>
              <Link href={url}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    
    );
}

export default Card
