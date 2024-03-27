const page = ({params}) => {
  return (
    <div className="min-h-screen">
        <div className="grid grid-cols-6 gap-4 mt-32 bg-slate-400 h-60">
            <div className="col-span-5 ml-24 flex flex-col justify-center">
                <div className="text-6xl">{params.appname}</div>
                <div className="text-xl">Published On play Store</div>
            </div>
            <div className="flex flex-col justify-center">Photo</div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-32 ml-24">
            <div className="col-span-2">
                <span className="text-4xl">Features</span>
                <ul className="list-disc pl-8 pt-8">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                </ul>
            </div>
            <div className="col-span-1 space-y-6">
                <div className="border-2 border-slate-800 inline-block py-2 px-1">
                    <div>⭐⭐⭐⭐⭐</div>
                    <div className="flex flex-col items-center justify-center"> 5/5</div>
                    <div>Review Rating</div>
                </div>
                <div className="block">
                    <div className="text-white rounded-md bg-red-500 inline-block py-2 px-1">View on playstore</div>
                </div>
                <div>Tags :</div>
                <div className="block">
                    <div className="text-white rounded-md bg-red-500 inline-block py-2 px-1">Download</div>
                </div>
                <div className="block">
                    <div className="text-white rounded-md bg-red-500 inline-block py-2 px-1">Privacy Policy</div>
                </div>
            </div>
        </div>

        <div className="pl-24 pb-16">
            <div className="text-4xl">Description</div>
            <div className="py-8 pr-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam esse architecto saepe velit fuga illo soluta ea unde distinctio deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium saepe atque porro, tempore sapiente ducimus architecto incidunt iusto accusantium magnam. Quisquam, alias cumque labore ex dignissimos facere quod, sint rerum maiores ea nulla quidem dolor animi deleniti voluptate unde adipisci perferendis distinctio quam qui consequuntur officia repellat. Mollitia, nobis ad!</div>
            <div className="font-semibold">For support, contact at support@tycoonhamlet.com</div>
        </div>

        <hr className="border"/>
        <div className="flex flex-col justify-center items-center my-16">
            <div className="text-4xl">Join Updates</div>
            <div className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, doloribus.</div>
            <form className="flex flex-row space-x-8">
                <input className="rounded-md border-black border" placeholder=" Your Email" />
                <button className="bg-red-500 px-4 py-2 rounded-full text-white">Join</button>
            </form>
        </div>
    </div>
  )
}

export default page;


