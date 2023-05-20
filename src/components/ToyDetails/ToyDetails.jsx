import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  return (
    <div>
      
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Toy Name:
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-deep-purple-accent-400">
                    {toy.name}
                  </span>
                </span>
              </h2>
              
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn">
                  View Product Details
                </label>
                {/* Modal */}
                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box relative">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h3 className="text-lg font-bold">Product Details</h3>
                    <p className="py-4">{toy.details}</p>
                  </div>
                </div>
              
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm  border-fuchsia-600">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5 text-fuchsia-600">
                    Toy Ratings:
                  </h6>
                  <p className="text-sm text-gray-900">{toy.rating}</p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-fuchsia-600">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5 text-fuchsia-600">
                    Toy Price:
                  </h6>
                  <p className="text-sm text-gray-900">{toy.price} TK</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={toy.photo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
