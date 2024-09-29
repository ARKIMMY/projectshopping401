'use client';
import React, { useState } from 'react';
import './index.css';


 const products = [ 
  {
    id: 1,
    name: 'กางเกงยีนส์ผู้หญิง ทรงตรง เอวกลาง สียีนส์อ่อน',
    href: '#',
    price: '฿1,395',
    imageSrc: 'https://lee.co.th/cdn/shop/files/8859286651916_02_4a4bc086-0d3d-4960-be2a-9777185b76ff_800x.jpg?v=1715325135',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'กางเกงยีนส์ผู้หญิง CARGO FIT เอวกลาง ทรงตรง สีขาว',
    href: '#',
    price: '฿2,243',
    imageSrc: 'https://lee.co.th/cdn/shop/files/8859152928982__2_bb638357-1322-4511-bf96-61bdc0cac2fc_900x.jpg?v=1726805144',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'กางเกงยีนส์ผู้หญิง ทรงตรง เอวกลาง สียีนส์เข้ม',
    href: '#',
    price: '฿1,395',
    imageSrc: 'https://lee.co.th/cdn/shop/files/8859286652074_01_8fa091e7-6c64-4081-9151-2708e3dc23bd.jpg?v=1715313224',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'กางเกงยีนส์ผู้หญิง ทรงตรง เอวกลาง สีดำ',
    href: '#',
    price: '฿1,395',
    imageSrc: 'https://assets.central.co.th/LEE-WomensJeansMidRegularFitBlack-MKP1723106-1?$JPEG$&wid=550',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'กางเกงยีนส์ผู้หญิง ทรงตรง เอวกลาง สีขาว',
    href: '#',
    price: '฿1,395',
    imageSrc: 'https://assets.central.co.th/LEE-WomensJeansMidRegularFitWhite-MKP1723109-1?$JPEG$&wid=550',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'กางเกงยีนส์ผู้หญิง เอวสูง ทรงกระบอก สียีนส์อ่อน',
    href: '#',
    price: '฿1,395',
    imageSrc: 'https://lee.co.th/cdn/shop/files/8859286670498_01_921c2e95-ab44-442b-a97d-c33a9295b1c5_900x.jpg?v=1717742028',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 7,
    name: 'กางเกงยีนส์ผู้หญิง เอวสูง ทรงกระบอก สียีนส์อ่อน',
    href: '#',
    price: '฿1,395',
    imageSrc: 'https://lee.co.th/cdn/shop/files/8859286642310_02_02d955d4-f11b-4d9e-ab3a-fe2c6839fd60_900x.jpg?v=1717742000',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 8,
    name: 'กางเกงยีนส์ผู้หญิง COMFORT FIT เอวกลาง ทรงกระบอก สียีนส์กลาง',
    href: '#',
    price: '฿1,395',
    imageSrc: 'https://lee.co.th/cdn/shop/files/8859286617288_02_ca07ba18-9126-46c7-bfdc-316b713d4063_900x.jpg?v=1716807992',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 9,
    name: 'กางเกงยีนส์ผู้หญิง CARGO FIT เอวกลาง ทรงตรง สีดำ',
    href: '#',
    price: '฿2,243',
    imageSrc: 'https://lee.co.th/cdn/shop/files/8859152929064__2_0e3a47bf-cbf9-4fa4-9794-4ba90c08782c_900x.jpg?v=1726740640',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 10,
    name: 'กางเกงยีนส์ผู้หญิง เอวสูง ทรงเข้ารูป สียีนส์กลาง',
    href: '#',
    price: '฿2,093',
    imageSrc: 'https://lee.co.th/cdn/shop/files/8859152915203__1_d0417478-8f97-4e97-b48a-16e6f9950175_900x.jpg?v=1726740621',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },

]

export default function Example() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white">
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between">
          <h1 className="text-xl">Lee Jeans</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Collection</a></li>
            <li><a href="#" className="hover:text-gray-300">New products</a></li>
          </ul>
        </nav>
      </header>

      <div className="container p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h1 className="text-2xl font-bold">ตะกร้าสินค้า</h1>
          {cartItems.length === 0 ? (
            <p className="mt-4 text-gray-700">เพิ่มสินค้าใหม่</p>
          ) : (
            <div className="mt-4">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b py-2">
                  <span className="text-lg">{item.name}</span>
                  <span>{item.price}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ลบ
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}