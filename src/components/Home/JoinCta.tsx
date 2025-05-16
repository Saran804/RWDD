import React from 'react';
import { Link } from 'react-router-dom';

const JoinCta = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-800 to-green-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Community Today</h2>
            <p className="text-green-100 max-w-xl">
              Together, we can make a meaningful impact on our environment. 
              Sign up now to access all our resources, connect with like-minded 
              individuals, and start your sustainable living journey.
            </p>
          </div>
          <div className="md:w-2/5 flex flex-col space-y-4">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Create Your Account</h3>
              <form className="space-y-3">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 py-2 rounded bg-white/5 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-2 rounded bg-white/5 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full px-4 py-2 rounded bg-white/5 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <button 
                  type="button" 
                  className="w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded font-medium transition-colors duration-300"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-sm text-center mt-4 text-white/80">
                Already have an account? <Link to="#" className="text-white underline">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCta;