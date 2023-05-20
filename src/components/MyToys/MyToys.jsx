import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    
    
    const url = `http://localhost:5000/mytoys?selleremail=${user?.email}`;
    useEffect(() => {
             fetch(url)
        
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setMyToys(data)
                }
                
            })
    }, [url]);

    // handle delete:
    const handleDelete = id =>{
     console.log(id);
     Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/dlttoys/${id}`,
        {
          method:'DELETE',
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         
        }
        )
        .then(res=> res.json)
        .then(data => {
          console.log(data);
          // Remove the deleted item from the state array
          setMyToys(prevMyToys => prevMyToys.filter(toy => toy._id !== id));
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      })}
    return (
        <div>
      <h1>My Toys</h1>
    
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
            {myToys.map((toy) => (
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
                   <Link   to={`/updatetoy/${toy._id}`}> <button className="btn btn-warning btn-xs m-1 hover:bg-orange-600 hover:text-white "> <FaRegEdit/>  Edit</button> </Link>
              
                   <button className="btn btn-error btn-xs text-white hover:bg-red-700" onClick={()=>handleDelete(toy._id)}> <FaTrashAlt/> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   
    </div>
    );
};

export default MyToys;