import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);


  return (
    <div>
      <h1>All Toys</h1>
    
      {/*============= map=============== */}
       {/* ============================table================================== */}
       <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th colSpan="2">
               
              </th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Render table rows */}
            {toys.map((toy) => (
              <tr key={toy._id}>
                <td colSpan="2">
                  
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={toy.photo} alt="Avatar Tailwind CSS Component" />
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
                <Link to={`/toy/${toy._id}`}> <button className="btn btn-secondary btn-xs">details</button></Link> 
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
