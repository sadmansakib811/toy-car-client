import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import bg from '../../assets/avengersbg.jpg'



const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL)


        createUser(email, password, photoURL)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
            })
            .catch(error => console.log(error))

    }

    return (
      <div
        className="hero min-h-screen bg-base-200"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-content flex-col lg:flex-row">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
            <div className="card-body md:w-96 lg:w-96 sm:w-60">
              <h1 className="text-3xl text-center font-bold">Sign Up</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label"></label>
                </div>
                {/* photo url */}
                <div className="mb-8">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      name="photoURL"
                      placeholder="Photo URL"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                Already Have an Account?{" "}
                <Link className="text-orange-600 font-bold" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;