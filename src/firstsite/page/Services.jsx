export default function Services(){
    return(
        <>
            <div className="space-y-4 px-10 mt-10 mx-32">







  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">Fast delivery and excellent service make this company the...</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <div className="mt-4 px-4 leading-relaxed text-gray-700 ">
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique! */}
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit */}
                Quick delivery, great service: <strong><i><b>top choice!</b></i></strong>
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
                
                This sentence emphasizes that due to its fast delivery and excellent service, this company
                 stands out as the optimal option for fulfilling all of your shipping requirements.
            </p>

            <div className="mt-4 md:mt-8">
                <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                Get Started Today
                
                </a>
                
            </div>
            </div>
        </div>

        <img
            alt=""
            src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-56 w-full object-cover sm:h-full"
        />
        </section>
    </div>
  </details>







  <details className="group [&_summary::-webkit-details-marker]:hidden">
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
    >
      <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

      <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <div className="mt-4 px-4 leading-relaxed text-gray-700">
      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique! */}

            <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                className="h-32 w-full object-cover md:h-full"
            />

            <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                <p className="text-sm font-semibold uppercase tracking-widest">Run with the pack</p>

                <h2 className="mt-6 font-black uppercase">
                <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> Get 20% off </span>

                <span className="mt-2 block text-sm">On your next order over $50</span>
                </h2>

                <a
                className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
                href="#"
                >
                Get Discount
                </a>

                <p className="mt-8 text-xs font-medium uppercase text-gray-400">
                Offer valid until 24th March, 2021 *
                </p>
            </div>
            </section>
    </div>
  </details>
</div>
        
        
        </>
    )
}