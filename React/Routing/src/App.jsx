// // // import './App.css'

// // import axios from "axios";
// // import { useEffect } from "react";

// // function App() {
// //   // async function data(){
// //   //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
// //   //   const data = await response.json()
// //   //   console.log(data)
// //   // }
// //   // useEffect(()=>{
// //   //    data();
// //   // },[])

// //   const data = async () => {
// //     const response = await axios.post(
// //       "http://localhost:3000/api/v1/auth/send-otp",
// //       {
// //         email: "nitinmohanbhatt@gmail.com",
// //       },
// //     );
// //     console.log("THIS IS MY DATA", response);
// //   };
// //   useEffect(() => {
// //     data();
// //   }, []);

// //   return (
// //     <main className="flex min-h-screen items-center justify-center px-6">
// //       <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-900">
// //         Hello, World!
// //       </h1>
// //     </main>
// //   );
// // }

// // export default App;

// // import { useEffect, useState } from "react";

// // const Products = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetch("https://dummyjson.com/products")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setProducts(data.products);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         console.error("Error fetching products:", err);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="flex h-screen items-center justify-center">
// //         <h1 className="text-2xl font-semibold">Loading...</h1>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 py-10 px-5">
// //       <div className="max-w-7xl mx-auto">
// //         <h1 className="mb-10 text-center text-4xl font-bold text-gray-800">
// //           Products
// //         </h1>

// //         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
// //           {products.map((product) => (
// //             <div
// //               key={product.id}
// //               className="rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-2xl"
// //             >
// //               <img
// //                 src={product.thumbnail}
// //                 alt={product.title}
// //                 className="h-56 w-full rounded-t-xl object-cover"
// //               />

// //               <div className="p-5">
// //                 <h2 className="text-xl font-bold text-gray-800">
// //                   {product.title}
// //                 </h2>

// //                 <p className="mt-2 text-sm text-gray-600 line-clamp-3">
// //                   {product.description}
// //                 </p>

// //                 <div className="mt-4 space-y-2 text-sm text-gray-700">
// //                   <p>
// //                     <span className="font-semibold">Category:</span>{" "}
// //                     {product.category}
// //                   </p>

// //                   <p>
// //                     <span className="font-semibold">Brand:</span>{" "}
// //                     {product.brand}
// //                   </p>

// //                   <p>
// //                     <span className="font-semibold">Price:</span>
// //                     <span className="ml-2 text-lg font-bold text-green-600">
// //                       ${product.price}
// //                     </span>
// //                   </p>

// //                   <p>
// //                     <span className="font-semibold">Discount:</span>{" "}
// //                     {product.discountPercentage}%
// //                   </p>

// //                   <p>
// //                     <span className="font-semibold">Rating:</span> ⭐{" "}
// //                     {product.rating}
// //                   </p>

// //                   <p>
// //                     <span className="font-semibold">Stock:</span>{" "}
// //                     {product.stock}
// //                   </p>

// //                   <p>
// //                     <span className="font-semibold">Availability:</span>{" "}
// //                     <span className="text-green-600 font-medium">
// //                       {product.availabilityStatus}
// //                     </span>
// //                   </p>

// //                   <p>
// //                     <span className="font-semibold">Warranty:</span>{" "}
// //                     {product.warrantyInformation}
// //                   </p>

// //                   <p>
// //                     <span className="font-semibold">Shipping:</span>{" "}
// //                     {product.shippingInformation}
// //                   </p>

// //                   <p>
// //                     <span className="font-semibold">Return:</span>{" "}
// //                     {product.returnPolicy}
// //                   </p>
// //                 </div>

// //                 {/* Tags */}
// //                 <div className="mt-4 flex flex-wrap gap-2">
// //                   {product.tags.map((tag, index) => (
// //                     <span
// //                       key={index}
// //                       className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
// //                     >
// //                       #{tag}
// //                     </span>
// //                   ))}
// //                 </div>

// //                 {/* Reviews */}
// //                 <div className="mt-6">
// //                   <h3 className="mb-3 text-lg font-semibold">Reviews</h3>

// //                   {product.reviews.slice(0, 3).map((review, index) => (
// //                     <div
// //                       key={index}
// //                       className="mb-3 rounded-lg border p-3 bg-gray-50"
// //                     >
// //                       <p className="font-semibold">
// //                         {review.reviewerName}
// //                       </p>

// //                       <p className="text-yellow-500">
// //                         ⭐ {review.rating}
// //                       </p>

// //                       <p className="text-sm text-gray-600">
// //                         {review.comment}
// //                       </p>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 <button className="mt-5 w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700">
// //                   View Details
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Products;

// import React from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import Home from "./component/home";
// import About from "./component/about";
// import NotFound from "./component/not-found";
// import Header from "./component/header";
// import Footer from "./component/footer";
// import Products from "./pages/products";
// import Mens from "./pages/mens";
// import Womens from "./pages/womens";
// import Courses from "./component/courses";
// import CourseDetails from "./component/courseDetails";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         {/* <Route path="/products" element={<Products />} /> */}
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/courses/:id" element={<CourseDetails />} />

//       {/* <Route path="/products/mens" element={<Mens />} />
//       <Route path="/products/womens" element={<Womens />} /> */}
//         <Route path="/products" element={<Products />}>
//           <Route path="mens" element={<Mens />} />
//           <Route path="womens" element={<Womens />} />
//         </Route>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/ab/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-8 text-center text-4xl font-bold">
          DummyJSON Products
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-60 w-full object-cover"
              />

              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                    {product.category}
                  </span>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {product.availabilityStatus}
                  </span>
                </div>

                <h2 className="line-clamp-1 text-xl font-bold">
                  {product.title}
                </h2>

                <p className="line-clamp-3 text-sm text-gray-600">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-gray-200 px-2 py-1 text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-2xl font-bold text-green-600">
                      ${product.price}
                    </p>
                    <p className="text-sm text-red-500">
                      {product.discountPercentage}% OFF
                    </p>
                  </div>

                  <div className="text-right">
                    <p>⭐ {product.rating}</p>
                    <p className="text-sm text-gray-500">
                      Stock: {product.stock}
                    </p>
                  </div>
                </div>

                <hr />

                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Brand:</strong> {product.brand}
                  </p>
                  <p>
                    <strong>SKU:</strong> {product.sku}
                  </p>
                  <p>
                    <strong>Warranty:</strong>{" "}
                    {product.warrantyInformation}
                  </p>
                  <p>
                    <strong>Shipping:</strong>{" "}
                    {product.shippingInformation}
                  </p>
                  <p>
                    <strong>Return:</strong> {product.returnPolicy}
                  </p>
                  <p>
                    <strong>Min Order:</strong>{" "}
                    {product.minimumOrderQuantity}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Reviews</h3>

                  <div className="space-y-2">
                    {product.reviews?.slice(0, 2).map((review, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-gray-100 p-3"
                      >
                        <div className="flex justify-between">
                          <span className="font-semibold">
                            {review.reviewerName}
                          </span>

                          <span>⭐ {review.rating}</span>
                        </div>

                        <p className="text-sm text-gray-600">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}