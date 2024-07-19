const Faqs = () => {
  return (
    <div className="space-y-4 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mb-8 sm:mb-12">
      <details
        className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900 sm:text-2xl">
            What are NFT drops?
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700 text-md sm:text-lg">
          An NFT drop happens when a new NFT collection is released. NFT drops
          can vary in both how the NFTs are sold (listed for sale or auction),
          and in who they’re released to (the public, or a specific list called
          an “allowlist”). 
          <br />
          Often, NFT drops coincide with when the NFTs in the
          collection are minted, that is, written to the blockchain. You might
          hear these terms used interchangeably— a drop might be referred to as
          the project’s mint.
        </p>
      </details>

      <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900 sm:text-2xl">
          What are blockchain gas fees?
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700 text-md sm:text-lg">
        In web3, the term “gas fee” refers to the payment needed to execute transactions on the blockchain. These payments compensate the node operators who keep the blockchain functioning. This validation helps ensure the blockchain has a permanent, immutable record. 
        </p>
      </details>

      <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium text-gray-900 sm:text-2xl">
          How to buy an NFT?
          </h2>

          <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700 text-md sm:text-lg">
        In order to buy an NFT, you'll need a crypto wallet and cryptocurrency (or, in some cases, just a credit or debit card). Using OpenSea, you can buy items listed for sale instantly, bid in auctions, or make offers on any NFTs.
        </p>
      </details>
    </div>
  );
};

export default Faqs;
