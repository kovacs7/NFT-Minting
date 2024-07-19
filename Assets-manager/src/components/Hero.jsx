const Hero = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1580638858617-ed8f4c3fa6d7?q=80&w=2755&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 sm:rounded-md">
      <div className="absolute inset-0 sm:bg-transparent"></div>

      <div className="relative backdrop-blur-md p-4 rounded-md w-[100%] sm:w-[50%]">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl text-gray-200 font-extrabold sm:text-5xl">
          Unlock Art's Digital Future in a 
            <strong className="block font-extrabold text-green-500">
              {" "}
              Marketplace{" "}
            </strong>
            Like No Other with
            <strong className="block font-extrabold text-green-500">
              {" "}
              CrypticNet NFTs{" "}
            </strong>
          </h1>

          <p className="text-gray-100 mt-4 max-w-lg sm:text-xl/relaxed">
          Discover CrypticNet's exclusive NFT marketplace, where digital art meets innovation in a vibrant community.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-green-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-100 hover:text-green-500 focus:outline-none focus:ring active:bg-green-500 active:text-white sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-gray-100 px-12 py-3 text-sm font-medium text-green-500 shadow hover:text-white hover:bg-green-500 focus:outline-none focus:ring active:bg-gray-100
              active:text-green-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
