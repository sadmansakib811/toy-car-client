import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(false);

  useEffect(() => {
    fetch("https://toyland-server-jade.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedToys = limit ? filteredToys.slice(0, 20) : filteredToys;

  const toggleLimit = () => {
    setLimit((prevLimit) => !prevLimit);
  };

  return (
    <div className="mt-5">
      
      <div className="text-center">
        <h2
          className="text-3xl font-extrabold mb-5 MT-10 text-center"
          style={{
            transform: "rotate(2deg)",
            padding: "0.2rem 1.2rem",
            borderRadius: "20% 5% 20% 5%/5% 20% 25% 20%",
            backgroundColor: "#fdcb6e",
            fontSize: "1.5rem",
            display: "inline-block",
          }}
        >
          ALL TOYS
        </h2>
      </div>

      {/* Search Input */}
      <div className="text-center mt-10 mb-10 ">
        <input
          className="border border-fuchsia-600"
          type="text"
          placeholder="Search toy"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Limit Button */}
      <div className="text-center mb-10">
        <button className="btn btn-primary" onClick={toggleLimit}>
          {limit ? "Show All" : "Limit to 20"}
        </button>
      </div>
     <h1 className="text-fuchsia-600 text-3xl text-center mb-1">Total Toys: {displayedToys.length}</h1>
      {/* Table */}
      <div className="overflow-x-auto w-full  ">
        <table className="table w-full">
          {/* Table Head */}
          <thead >
            <tr >
              <th colSpan="2"></th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {/* Render table rows */}
            {displayedToys.map((toy) => (
              <tr key={toy._id}>
                <td colSpan="2"></td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toy.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toy.name}</div>
                    </div>
                  </div>
                </td>
                <td>{toy.sellername}</td>
                <td>{toy.category}</td>
                <td>{toy.price} Tk</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/toy/${toy._id}`}>
                    <button className="btn btn-secondary btn-xs">
                      details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
