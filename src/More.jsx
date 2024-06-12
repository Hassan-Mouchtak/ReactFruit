import React from "react";
import photo1 from "./firstsite/image/More1.jpg";
import photo2 from "./firstsite/image/More2.jpg";
import photo3 from "./firstsite/image/More3.jpg";


export default function More(){
    return(
        <>
        
        <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 ">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2  px-10 mt-10 mx-32">
                    <div className="relative z-10 lg:py-16 ">
                        <div className="relative h-64 sm:h-80 lg:h-full shadow-2xl ">
                        {/* <img
                            alt=""
                            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="absolute inset-0 h-full w-full object-cover"
                        /> */}
                        <img src={photo3} alt="" className="absolute inset-0 h-full w-full object-cover rounded-lg"/>
                        </div>
                        
                    </div>

                    <div className="relative flex items-center bg-gray-100 shadow-2xl ">
                        <span
                        className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24 rounded-lg">
                        <h2 className="text-2xl font-bold sm:text-3xl">
                            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis. */}
                            A Fruitful Fashionista: Embracing Fruity Fashion with Flair.



                        </h2>

                        <p className="mt-4 text-gray-600">
                            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                            esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                            architecto eius quis quibusdam fugiat dicta. */}
                            Dive into the vibrant world of fruity fashion with our trendsetter extraordinaire! From 
                            bold pineapple prints to zesty lemon patterns, she effortlessly embodies the essence of 
                            summer in her fruity ensembles. 
                        </p>

                        <a
                            href="#"
                            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                            Get in Touch
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
        </section>




        <span className="flex items-center  px-10 mt-10 mx-32">
  <span className="h-px flex-1 bg-black"></span>
  <span className="shrink-0 px-6">The highest quality fruits</span>
  <span className="h-px flex-1 bg-black"></span>
</span>



















   <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 px-10 mt-10 mx-32 rounded-lg">
                    

                    <div className="relative flex items-center bg-gray-100 shadow-2xl">
                        <span
                        className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                        <h2 className="text-2xl font-bold sm:text-3xl">
                            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis. */}
                            Fruit Chic: Embracing Sweetness in Style
                        </h2>

                        <p className="mt-4 text-gray-600">
                            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                            esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                            architecto eius quis quibusdam fugiat dicta. */}

                            A style icon who wears her love for all things fruity with pride. Picture her strolling 
                            through the streets, adorned in outfits bursting with the colors and flavors of summer.
                        </p>

                        <a
                            href="#"
                            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                            Get in Touch
                        </a>
                        </div>
                    </div>


                    <div className="relative z-5 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full shadow-2xl">
                        {/* <img
                            alt=""
                            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="absolute inset-0 h-full w-full object-cover"
                        /> */}
                        <img src={photo2} alt="" className="absolute inset-0 h-full w-full object-cover rounded-lg"/>
                        </div>
                        
                    </div>
                    </div>
                </div>
        </section>
        </>

    )
}