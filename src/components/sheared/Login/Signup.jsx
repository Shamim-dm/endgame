import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="form-containers bg-cyan-950 pt-10 ">
        <div className="w-10/12 md:w-4/12 grid items-center rounded-lg align-middle mx-auto min-h-screen ">
          <div className="">
            <div className=" rounded-lg shadow-2xl bg-slate-900">

              <div className="card-body text-white ">
                <h2 className="text-center font-bold text-sky-400 text-4xl">Please Register</h2>
                <div className="form-control">
                  <label className="label">
                    <span className="">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="User name"
                    className="input input-bordered text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered text-black"
                  />
                 
                </div>
                <div className="form-control mt-2">
                  <button className="btn btn-primary">Sign up</button>
                </div>

                {/* social login start from her */}
                <div className="text-center mt-4 ">
                  <p>Or sign up using</p>
                </div>

                <div className="divider text-white">
                  <button className="btn btn-circle">
                    <img
                      className="btn-circle h-6 w-6"
                      src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo.png"
                      alt=""
                    />
                  </button>

                  <button className="btn btn-circle">
                    <img
                      className="btn-circle h-6 w-6"
                      src="https://w7.pngwing.com/pngs/670/396/png-transparent-computer-icons-github-icon-design-logo-github-cat-like-mammal-carnivoran-logo-thumbnail.png"
                      alt=""
                    />
                  </button>
                </div>
                <div className="text-center mt-2">
                    <p>Already have an account? <Link className="text-red-500 font-bold text-xl" to='/login'><button>Log in</button></Link></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;