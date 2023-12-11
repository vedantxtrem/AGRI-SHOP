import React from 'react';
import img2 from './assets/ferti2.webp';


function CropRecommendationForm() {
    return (
        <div>
            <div className="flex sm:h-fit md:h-screen">
                <img
                    className="hidden lg:block w-1/2"
                    src="https://img.freepik.com/free-photo/vertical-shot-person-holding-wheat-field-sunlight-cadiz-spain_181624-24388.jpg?size=626&ext=jpg&ga=GA1.1.332611339.1702151175&semt=sph"
                    alt=""
                />
                <div className="flex  flex-col items-center   w-full lg:w-1/2 mx-5 my-3">
                    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-5xl font-extrabold ... tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-400">
                                Crop Recommendation
                            </h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600 sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-400">
                                Give The Required Information For Crop Recommendation
                            </p>
                        </div>
                        <br />
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            {/* Input fields */}
                            <div>
                                <input
                                    type="text"
                                    name="Nitrogen"
                                    className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    placeholder="Nitrogen"
                                />
                            </div>
                            <div>
                                <input type="text" name="Phosphorus"
                                    class="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10  text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    placeholder="Phosphorus" />
                            </div>
                            <div>
                                <input type="text" name="Potasium"
                                    class="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10  text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    placeholder="Potasium" />
                            </div>
                            <div>
                                <input type="text" name="PH level"
                                    class="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10  text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    placeholder="PH level" />
                            </div>
                            <div>
                                <input type="password" name="Rain-fall"
                                    class="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10  text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    placeholder="Rain-fall(in mm)" />
                            </div>
                            <div>
                                <input type="password" name="City"
                                    class="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10  text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    placeholder="City" />
                            </div>
                            <div>
                                <input type="text" name="State"
                                    class="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10  text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    placeholder="State" />
                            </div>
                            <div>
                                <button
                                    className="ring-1 rounded-full w-full px-4 py-3 ring-gray-900/10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-green-500 hover:bg-green-400 text-white"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div className=" w-full">
                <div className="w-full bg-green-600 p-5 text-black text-center text-3xl font-bold ">
                    <span >RESULT</span>
                </div>
                <div className="w-full p-5  md:flex md:justify-between">

                    <div className="flex justify-center flex-col items-center  p-5 border-solid border-gray-600 rounded-2xl lg:pr-10 text-2xl sm:w-full md:w-2/3">
                        <h1 className='font-bold text-green-700 text-4xl'>Crop Name</h1>
                        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ab rerum iusto quam labore est repellat, temporibus dicta, nesciunt modi nihil alias, quisquam provident! Quae maxime reiciendis nihil? Accusamus, ullam!</p>
                    </div>

                    <img className='rounded-2xl  sm:w-full md:w-1/3' src={img2} alt="" />

                </div>
                <div className="w-full p-5  md:flex md:justify-between">
                    <img className='rounded-2xl  sm:w-full md:w-1/3' src={img2} alt="" />
                    <div className="flex justify-center flex-col items-center  p-5 text-2xl sm:w-full md:w-2/3">

                        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ab rerum iusto quam labore est repellat, temporibus dicta, nesciunt modi nihil alias, quisquam provident! Quae maxime reiciendis nihil? Accusamus, ullam!lorem300
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed modi quis doloribus quibusdam temporibus omnis molestias reiciendis, eos aut voluptas officiis commodi corporis in sit ex minus impedit eius perspiciatis beatae! Quos, omnis? Quia impedit quaerat, reiciendis eaque voluptas maiores autem adipisci nam soluta fugiat quisquam, ea unde laboriosam qui quae? Animi  pariatur atque, vel dolore sequi porro veniam las corrupti. Aut, eaque odit. Deserunt autem laboriosam animi adipisci atque error placeat esse nobis repudiandae amet, porro sit minus, sunt nulla officia corporis dolore ex necessitatibus dolorum, provident dolor voluptatum tenetur. Quam, quae!
                        </p>
                    </div>
                </div>
                <div className='w-full p-5 flex justify-center' >
                    <table className="table-auto rounded-xl border-collapse w-full">
                        <thead>
                            <tr className="bg-green-200">
                                <th className="border-2 border-gray-500 px-4 py-2">Column 1</th>
                                <th className="border-2 border-gray-500 px-4 py-2">Column 2</th>
                                <th className="border-2 border-gray-500 px-4 py-2">Column 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-green-100">
                                <td className="border-2 border-gray-500 px-4 py-2">Data 1</td>
                                <td className="border-2 border-gray-500 px-4 py-2">Data 2</td>
                                <td className="border-2 border-gray-500 px-4 py-2">Data 3</td>
                            </tr>
                            <tr className="bg-green-200">
                                <td className="border-2 border-gray-500 px-4 py-2">Data 4</td>
                                <td className="border-2 border-gray-500 px-4 py-2">Data 5</td>
                                <td className="border-2 border-gray-500 px-4 py-2">Data 6</td>
                            </tr>
                            <tr className="bg-green-100">
                                <td className="border-2 border-gray-500 px-4 py-2">Data 7</td>
                                <td className="border-2 border-gray-500 px-4 py-2">Data 8</td>
                                <td className="border-2 border-gray-500 px-4 py-2">Data 9</td>
                            </tr>
                        </tbody>
                    </table>    
                </div>

            </div>

        </div>
    );
}

export default CropRecommendationForm;
