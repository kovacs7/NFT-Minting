import i1 from "../assets/1.jpg"
import i2 from "../assets/2.jpg"
import i3 from "../assets/3.jpg"

const Collection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <p className="mx-auto mt-4 max-w-xl sm:max-w-3xl text-gray-500 text-lg">
          Discover the extraordinary world of exclusive NFT collections at CrypticNet. Dive into a realm where digital art meets innovation, featuring unique pieces crafted by talented artists. Own a piece of digital history with our one-of-a-kind NFTs. Stay tuned for updates on how you can be part of this groundbreaking opportunity! #NFT #DigitalArt #ExclusiveCollection
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <a href="#" className="group relative block">
              <img
                src={i1}
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 sm:rounded-r-lg"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white backdrop-blur-md">
                  Vikings
                </h3>

                <span className="mt-1.5 inline-block bg-green-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group relative block">
              <img
                src={i2}
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 sm:rounded-r-lg"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white backdrop-blur-md">
                  Mystic goofer
                </h3>

                <span className="mt-1.5 inline-block bg-green-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="group relative block">
              <img
                src={i3}
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 sm:rounded-l-lg"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white backdrop-blur-md">
                  Dragon warrior
                </h3>

                <span className="mt-1.5 inline-block bg-green-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Collection;
