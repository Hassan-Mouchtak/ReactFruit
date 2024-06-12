

export default function Body(){
    return (
        <>

        {/* les deux premiere card */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 px-36 mt-10 ">
            
            <a href="#" className="group relative block overflow-hidden rounded shadow-2xl">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 "
            >
                <span className="sr-only">Wishlist</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>

          
            <img src={require('./image/image7.jpg')} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"/>
            

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 rounded px-3 py-1.5 text-xs font-medium"> New </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">Dragon fruit</h3>

                <p className="mt-1.5 text-sm text-gray-700">$20.00</p>

                <form className="mt-4">
                <button
                    className="block w-full rounded border-2 border-yellow-400 hover:bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                    data-name="Orange" data-price="0.5">
                    Add to Cart
                </button>
                </form>
            </div>
            </a>
            


            <a href="#" className="group relative block overflow-hidden rounded shadow-2xl">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 "
            >
                <span className="sr-only">Avocadro</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>

          
            <img src={require('./image/image2.jpg')} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"/>
            

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-white-400 rounded px-3 py-1.5 text-xs font-medium"> </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">Avocadro</h3>

                <p className="mt-1.5 text-sm text-gray-700">$2.59</p>

                <form className="mt-4">
                <button
                    className="block w-full rounded border-2 border-yellow-400 hover:bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                >
                    Add to Cart
                </button>
                </form>
            </div>
            </a>


        </div>












        



        {/* la deuxieme card */}
        <div class="grid gap-4 grid-cols-4 px-36 mt-20">
           

            <a href="#" className="group relative block overflow-hidden rounded shadow-2xl">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Noix de coco</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>

          
            <img src={require('./image/image3.jpg')} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"/>

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium rounded"> New </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">Noix de coco</h3>

                <p className="mt-1.5 text-sm text-gray-700">$3.99</p>

                <form className="mt-4">
                <button
                    className="block w-full rounded border-2 border-yellow-400 hover:bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                >
                    Add to Cart
                </button>
                </form>
            </div>
            </a>

            

            <a href="#" className="group relative block overflow-hidden rounded shadow-2xl">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Wishlist</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>

          
            <img src={require('./image/image4.jpg')} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"/>
            

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 rounded px-3 py-1.5 text-xs font-medium"> New </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>

                <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

                <form className="mt-4">
                <button
                    className="block w-full rounded border-2 border-yellow-400 hover:bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                >
                    Add to Cart
                </button>
                </form>
            </div>
            </a>

           

            <a href="#" className="group relative block overflow-hidden rounded shadow-2xl">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Wishlist</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>

          
            <img src={require('./image/image5.jpg')} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"/>
            

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-white-400 rounded px-3 py-1.5 text-xs font-medium">  </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">Clémentine</h3>

                <p className="mt-1.5 text-sm text-gray-700">$1.99</p>

                <form className="mt-4">
                <button
                    className="block w-full rounded border-2 border-yellow-400 hover:bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                >
                    Add to Cart
                </button>
                </form>
            </div>
            </a>

            

            

            

           
            <a href="#" className="group relative block overflow-hidden rounded shadow-2xl">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Wishlist</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>

          
            <img src={require('./image/image6.jpg')} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"/>
            

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-white-400 rounded px-3 py-1.5 text-xs font-medium">  </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">Citron</h3>

                <p className="mt-1.5 text-sm text-gray-700">$4.75</p>

                <form className="mt-4">
                <button
                    className="block w-full rounded border-2 border-yellow-400 hover:bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                >
                    Add to Cart
                </button>
                </form>
            </div>
            </a>
        </div>





        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 px-36 mt-10 mb-40">
            
        <a href="#" className="group relative block overflow-hidden rounded shadow-2xl">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Wishlist</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>

          
            <img src={require('./image/image8.jpg')} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"/>
            

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-white-400 rounded px-3 py-1.5 text-xs font-medium">  </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">Clémentine</h3>

                <p className="mt-1.5 text-sm text-gray-700">$1.99</p>

                <form className="mt-4">
                <button
                    className="block w-full rounded border-2 border-yellow-400 hover:bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                >
                    Add to Cart
                </button>
                </form>
            </div>
            </a>

          
            <a href="#" className="group relative block overflow-hidden rounded shadow-2xl">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Wishlist</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>

          
            <img src={require('./image/image10.jpg')} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"/>
            

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-white-400 rounded px-3 py-1.5 text-xs font-medium">  </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">Clémentine</h3>

                <p className="mt-1.5 text-sm text-gray-700">$9.99</p>

                <form className="mt-4">
                <button
                    className="block w-full rounded border-2 border-yellow-400 hover:bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                >
                    Add to Cart
                </button>
                </form>
            </div>
            </a>

           
            <a href="#" className="group relative block overflow-hidden rounded shadow-2xl">
            <button
                className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Wishlist</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>

          
            <img src={require('./image/image9.jpg')} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"/>
            

            <div className="relative border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 rounded px-3 py-1.5 text-xs font-medium"> New </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">Clémentine</h3>

                <p className="mt-1.5 text-sm text-gray-700">$1.99</p>

                <form className="mt-4">
                <button
                    className="block w-full rounded border-2 border-yellow-400 hover:bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                >
                    Add to Cart
                </button>
                </form>
            </div>
            </a>
        </div>



        <div class="modal fade" id="cart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="show-cart table">
          
        </table>
        <div>Total price: $<span class="total-cart"></span></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Order now</button>
      </div>
    </div>
  </div>
</div> 
        <script src='page/Centent.js'></script>
        
</>
    )
}