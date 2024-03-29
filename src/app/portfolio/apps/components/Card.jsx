import Link from "next/link";

function Card({ title, description }) {

  const url = `/portfolio/apps/${encodeURIComponent(title)}`;

    return (
      <Link href={url}>
      <div className="inline-block bg-red-300">
        <div className={`w-full rounded h-auto sm:h-80 hover:shadow-xl text-white shadow-black flex flex-col sm:flex-row items-center`}>
          <div className="flex-none p-8">
            <svg className="h-16 w-16 mx-auto sm:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v12a2 2 0 002 2h3m10 0a2 2 0 002-2V3m-5 7H5m14 0h-3m-1 0h-5a1 1 0 110-2h5a1 1 0 010 2zm-5 4h6a1 1 0 110 2h-6a1 1 0 010-2zm0-8h6a1 1 0 110 2h-6a1 1 0 010-2z" />
            </svg>
          </div>
          <div className="flex-grow border-t sm:border-t-0 sm:border-l border-gray-200 pt-4 sm:pt-0 pl-0 sm:pl-4">
            <div className="text-center font-semibold text-lg">{title}</div>
            <p className="p-4">{description}</p>
          </div>
        </div>
      </div>
    </Link>
    
    );
}

export default Card
