import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import axios from "axios"
import Footer from '../Home/Footer';

function Products() {

  const [prod, setproduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const gender = location.state?.gender;
  const material = location.state?.material;

  const [mainImg, setMainImg] = useState({});
  const [buy, setbuy] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://amaxvision.onrender.com/product");

        let data = Array.isArray(res.data) ? res.data : [];

        if (gender) {
          data = data.filter(
            item => item.gender?.toLowerCase() === gender.toLowerCase()
          );
        }
        
       
        console.log("before filter:", res.data);
        setproduct(data);
        setAllProducts(data);
        setLoading(false);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [gender, material]);

 function price100(range) {
  let result = [];

  if (range === 1000) {
    result = allProducts.filter(item => item.price <= 1000);
  } else if (range === 2000) {
    result = allProducts.filter(item =>
      item.price > 1000 && item.price <= 1400
    );
  } else if (range === 3000) {
    result = allProducts.filter(item =>
      item.price > 2000 && item.price <= 3000
    );
  }

  console.log("Filtered:", result); 

  setproduct(result);
}

  function mainimg(id, img) {
    setMainImg(prev => ({
      ...prev,
      [id]: img
    }))
  }

  function selected(product) {
    setSelectedProduct(product)
  }

  if (loading) return <h1>Loading...</h1>;
  if (!prod.length) return <h1>No products found</h1>;


  return (
    <div className='h-screen w-full border-t-2 border-gray-500'>
      <div className='relative h-7vh w-full border-gray-500 border-b-2 flex justify-evenly mt-2 p-1 items-center space-x-20'>
        <h2 className='text-3xl text-slate-950 font-bold '>Sort By <i className="ri-arrow-right-fill  text-amber-300  text-2xl "></i></h2>
        <div className='h-12 relative group  flex justify-center z-10'>
          <Link className='hover:border-b-2 hover:border-b-cyan-900 p-2 cursor-pointer ml-3 text-2xl ' >
            Price
          </Link>
          <div className='absolute left-0 top-full hidden group-hover:block bg-amber-50 w-70 shadow-lg rounded-md'>
            <ul className='flex flex-col'>
              <li className='p-2 hover:bg-gray-200 cursor-pointer ' onClick={() => price100(2000)}>0 - 1000</li>
              <li className='p-2 hover:bg-gray-200 cursor-pointer' >1000 - 2000</li>
              <li className='p-2 hover:bg-gray-200 cursor-pointer' >2000 - 3000</li>
            </ul>
          </div>
        </div>
        <div className='h-12 relative group  flex justify-center z-10'>
          <Link className='hover:border-b-2 hover:border-b-cyan-900 p-2 cursor-pointer ml-3 text-2xl ' to={'/Product'}>
            Brand
          </Link>
          <div className='absolute left-0 top-full hidden group-hover:block bg-amber-50 w-70 shadow-lg rounded-md'>
            <ul className='flex flex-col'>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>0 - 1000</li>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>1000 - 2000</li>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>2000 - 3000</li>
            </ul>
          </div>
        </div>
        <div className='h-12 relative group  flex justify-center z-10'>
          <Link className='hover:border-b-2 hover:border-b-cyan-900 p-2 cursor-pointer ml-3 text-2xl ' to={'/Product'}>
            Material
          </Link>
          <div className='absolute left-0 top-full hidden group-hover:block bg-amber-50 w-70 shadow-lg rounded-md'>
            <ul className='flex flex-col'>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>0 - 1000</li>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>1000 - 2000</li>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>2000 - 3000</li>
            </ul>
          </div>
        </div>
        <div className='h-12 relative group  flex justify-center z-10'>
          <Link className='hover:border-b-2 hover:border-b-cyan-900 p-2 cursor-pointer ml-3 text-2xl ' to={'/Product'}>
            Size
          </Link>
          <div className='absolute left-0 top-full hidden group-hover:block bg-amber-50 w-70 shadow-lg rounded-md'>
            <ul className='flex flex-col'>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>0 - 1000</li>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>1000 - 2000</li>
              <li className='p-2 hover:bg-gray-200 cursor-pointer'>2000 - 3000</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=' w-full relative mb-20'>
        <div className='grid grid-cols-4 gap-6 p-2 relative '>
          {prod.map((item) => {
            return (
              <div key={item._id} className='h-[60vh] rounded-2xl  shadow-xl flex items-center justify-center flex-col space-y-2'>
                <div className='h-[60%] w-full bg-white flex space-x-5'>
                  <div className='h-[95%] w-[70%]  '>
                    <img
                      src={mainImg[item._id] || item.image || "https://via.placeholder.com/150"}
                      className='h-full w-full object-fill'
                    />
                  </div>
                  <div className='h-full w-[25%] flex flex-col space-y-1'>
                    {item.subimage?.map((img1) => {
                      return (
                        <img
                          key={img1}
                          src={img1}
                          onClick={() => mainimg(item._id, img1)}
                          className='h-22 w-25'
                        />
                      )
                    })}
                  </div>
                </div>
                <div className='h-[30%] w-full flex'>
                  <div className='flex h-full w-[70%] items-start justify-evenly flex-col ml-1 '>
                    <h2 className='text-[18px] font-bold'>Name : {item.name}</h2>
                    <h2 className='text-[18px] font-bold'>Price : ${item.price}</h2>
                    <h2 className='text-[18px] font-bold'>Brand : {item.brand}</h2>

                  </div>
                  <div className='h-full w-[25%]  font-medium flex items-center flex-col justify-between mt-1'>
                    <h2 className='capitalize text-[15px]'><i className="ri-poker-hearts-line  text-amber-300  text-2xl"></i> </h2>
                    <h2 onClick={() => {
                      setbuy(!buy), selected(item)
                    }} className='capitalize text-[15px] cursor-pointer'>buy now <i className="ri-arrow-right-fill text-xl "></i></h2>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {buy && (<div className="fixed top-18 right-0 h-[90vh] w-[50%] bg-white shadow-2xl p-5">
          <h2 className="text-2xl font-bold"> {selectedProduct?.name} </h2>
          <img src={selectedProduct?.image} className="w-full h-60 object-contain" />
          <h3 className="text-xl mt-3"> ${selectedProduct?.price}
          </h3> <button onClick={() => setbuy(false)} className="mt-4 bg-red-500 text-white px-4 py-2">Close</button>
        </div>)}
      </div>
          <Footer/>
    </div>
  )
}

export default Products

