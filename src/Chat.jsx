import React from 'react';
import img from './assets/bharat.png'

function Chat() {
    return (
        <div className="h-screen flex">
            <img
                className="hidden lg:block w-1/2 bg-gradient-to-tr from-blue-300 via-white to to-white"
                src={img}
                alt=""
            />
            {/* login section */}
            <div className="flex flex-col float-right w-full lg:w-1/2 bg-gradient-to-tr from-white via-white to to-blue-300">
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-5xl font-extrabold ... tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-400">
                            <span className="text-red-400 text-6xl">C</span>HAT{' '}
                            <span className="text-6xl text-yellow-300">R</span>
                            <span className="text-green-400">OO</span>M
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-gray-900 sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-400">
                            Empowering Indian Farmers through a Unified Chat Room Platform
                        </p>
                    </div>
                    <br />
                    <button type="submit" class="block w-full rounded-full bg-gradient-to-r from-fuchsia-700 to-fuchsia-500 px-3.5 py-2.5 text-center  font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-16 text-2xl mt-5">East</button>
                    <br />
                    <button type="submit" class="block w-full rounded-full bg-gradient-to-r from-pink-700 to-pink-500 px-3.5 py-2.5 text-center  font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-16 text-2xl mt-5">West</button>
                    <br />
                    <button
                        type="submit"
                        className="block w-full rounded-full bg-gradient-to-r from-amber-700 to-amber-400 px-3.5 py-2.5 text-center font-semibold text-white shadow-sm hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-16 text-2xl mt-5"
                    >
                        North
                    </button>
                    <br />
                    <button type="submit" class="block w-full rounded-full bg-gradient-to-r from-sky-700 to-sky-500 px-3.5 py-2.5 text-center  font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-16 text-2xl mt-5">South</button>
                    <br />

                </form>
            </div>
        </div>
    );
}

export default Chat;