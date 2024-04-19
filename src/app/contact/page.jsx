function page() {
  return (
    <div className="min-h-screen">
      
      <div className="my-32">
        <div className="bg-orange-400 h-72 flex flex-col justify-center items-center">
            <span className="text-white text-7xl">Contact Us</span>
        </div>
      </div>

        <div className="max-w-sm mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
            <form className="space-y-6">
                <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
                </div>
                <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                />
                </div>
                <div>
                <label htmlFor="service" className="text-sm font-medium text-gray-700 block mb-2">Service</label>
                <select
                    id="service"
                    name="service"
                    className="w-full p-2 border border-gray-300 rounded-md bg-white"
                    required
                >
                    <option value="">Select a Service</option>
                    <option value="app">App</option>
                    <option value="web">Web</option>
                    <option value="logo">Logo</option>
                    <option value="seo">SEO</option>
                </select>
                </div>
                <button type="submit" className="w-full p-3 bg-blue-dark text-white rounded-md hover:bg-blue-800 transition-colors">
                Submit
                </button>
            </form>
        </div> 

    </div>
  )
}

export default page
