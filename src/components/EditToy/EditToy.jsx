
import Swal from 'sweetalert2';
import './EditToy.css'
import { Link, useLoaderData } from 'react-router-dom';
const EditToy = () => {
    const toy = useLoaderData();
  const {_id,name,sellername, selleremail, price, details, photo, rating, category, quantity} = toy
    
  const handleEditToy = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sellername = form.sellername.value;
    const selleremail = form.selleremail.value;
    const price = form.price.value;
    const category = form.category.value;
    const details = form.details.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;

    const updatedToy= {
        name,
        sellername,
        selleremail,
        price,
        category,
        details,
        photo,
        rating,
        quantity,
      };

    console.log(updatedToy);

    // send data to the server
    fetch(`http://localhost:5000/toy/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedToy)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Edited Successfully',
                    icon: 'success',
                    confirmButtonText:' Cool!'
                })
            }
        })
}

  
  return (
        <div className="bg-[#fdcb6e] p-24 text-center">
      

        <div className="bg-white p-10">
        <h2 className="text-3xl font-extrabold mb-5" style={{ transform: 'rotate(2deg)', padding: '0.2rem 1.2rem', borderRadius: '20% 5% 20% 5%/5% 20% 25% 20%', backgroundColor: '#fdcb6e', fontSize: '1.5rem', display: 'inline-block' }}>Add a New Toy</h2>
        <form onSubmit={handleEditToy}>
          {/* form name and sellerName row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Toy Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={sellername}
                  name="sellername"
                  placeholder="Seller Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form selleremail row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="selleremail"
                  defaultValue={selleremail}
                  placeholder="selleremail"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
          
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
              <select name="category" defaultValue={category} className="select select-bordered w-full max-w-xs">
                 
                  <option>Marvel</option>
                  <option>Avengers</option>
                  <option>DC</option>
                  <option>Star Wars</option>
                   </select>
              </label>
            </div> 
  
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Product Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form rating and available quantity */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={quantity}
                  name="quantity"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update Toy" className="btn btn-secondary " />
        </form>
        </div>
      </div>
    );
};

export default EditToy;