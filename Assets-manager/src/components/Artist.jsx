const Artist = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 lg:h-[50%] lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-[100%]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1650783756107-739513b38177?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-green-500">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-green-300"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl text-gray-100">
              Empowering Artists, Transforming Futures: Join CrypticNet's Artist Support Program Today!
              </h2>

              <p className="mt-4 text-green-700 bg-gray-100 p-2 rounded-md">
              CrypticNet's Artist Support Program is a nurturing platform designed to empower emerging artists. We provide resources, guidance, and a supportive community to help you thrive in the world of NFT art. Join us and turn your creativity into a sustainable career.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-black hover:text-gray-500 focus:outline-none focus:ring active:text-green-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
