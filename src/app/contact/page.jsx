function page() {
  return (
    <div className="min-h-screen">
      
      <div className="mt-32">
        <div className="bg-orange-400 h-72 flex flex-col justify-center items-center">
            <span className="text-white text-7xl font-semibold">Contact Us</span>
        </div>
      </div>

    <div className="flex justify-center items-center bg-gray-100 my-16">
      <form className="bg-white p-8 shadow-lg rounded-3xl">
        <div className="space-y-6">
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
          <fieldset className="space-y-4">
            <legend className="text-sm font-medium text-gray-700 mb-2">Services</legend>
            <div className="md:flex md:flex-row md:space-x-4 grid sm:grid-cols-2 grid-cols-1">
              <label className="inline-flex items-center space-x-2">
                <input type="checkbox" name="services" value="app" />
                <span>Application Development</span>
              </label>
              <label className="inline-flex items-center space-x-2">
                <input type="checkbox" name="services" value="web" />
                <span>Website Development</span>
              </label>
              <label className="inline-flex items-center space-x-2">
                <input type="checkbox" name="services" value="logo" />
                <span>Logo</span>
              </label>
              <label className="inline-flex items-center space-x-2">
                <input type="checkbox" name="services" value="seo" />
                <span>SEO(Search Engine Optimization)</span>
              </label>
            </div>
          </fieldset>
          <button type="submit" className="w-full p-3 bg-blue-dark text-white rounded-md hover:bg-blue-800 transition-colors">
            Submit
          </button>
        </div>
      </form>
    </div>

    </div>
  )
}

export default page
