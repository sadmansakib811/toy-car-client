// eslint-disable-next-line no-unused-vars
import React from "react";
import Swal from "sweetalert2";
const AddNewToy = () => {
  const handleAddToy = (event) => {
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

    const newToy = {
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
    console.log(category)
    fetch("https://toyland-server-jade.vercel.app/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "New Toy Added SuccessFully",
            icon: "success",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };
  return (
    <div className="bg-[#fdcb6e] p-24 text-center">
      

      <div className="bg-white p-10">
      <h2 className="text-3xl font-extrabold mb-5" style={{ transform: 'rotate(2deg)', padding: '0.2rem 1.2rem', borderRadius: '20% 5% 20% 5%/5% 20% 25% 20%', backgroundColor: '#fdcb6e', fontSize: '1.5rem', display: 'inline-block' }}>Add a New Toy</h2>
      <form onSubmit={handleAddToy}>
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
                placeholder="selleremail Name"
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
            <select name="category" defaultValue="marvel" className="select select-bordered w-full max-w-xs">
               
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
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Toy" className="btn btn-block btn-secondary" />
      </form>
      </div>
    </div>
  );
};

export default AddNewToy;
