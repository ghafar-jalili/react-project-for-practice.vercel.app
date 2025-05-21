import React from 'react';
import img1 from "../../img/images (1).jpeg";
import img2 from "../../img/images (2).jpeg";
import img from "../../img/images.jpeg";
import img4 from "../../img/images (4).jpeg";
import img5 from "../../img/images (5).jpeg";
import img6 from "../../img/images (1).png";

function Maincontent({ onClick }) {
    const items = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit.",
            p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla deleniti libero. Cupiditate impedit maxime sit eos asperiores ab reprehenderit.",
            img: img1,
            button: "add to cart",
            price: 199.99
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit.",
            p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla deleniti libero. Cupiditate impedit maxime sit eos asperiores ab reprehenderit.",
            img: img2,
            button: "add to cart",
            price: 19.3
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit.",
            p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla deleniti libero. Cupiditate impedit maxime sit eos asperiores ab reprehenderit.",
            img: img,
            button: "add to cart",
            price: 19.99
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit.",
            p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla deleniti libero. Cupiditate impedit maxime sit eos asperiores ab reprehenderit.",
            img: img4,
            button: "add to cart",
            price: 10.3
        },
        {
            id: 5,
            title: "Lorem ipsum dolor sit.",
            p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla deleniti libero. Cupiditate impedit maxime sit eos asperiores ab reprehenderit.",
            img: img5,
            button: "add to cart",
            price: 190.99
        },
        {
            id: 6,
            title: "Lorem ipsum dolor sit.",
            p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla deleniti libero. Cupiditate impedit maxime sit eos asperiores ab reprehenderit.",
            img: img6,
            button: "add to cart",
            price: 122.4
        }
    ];

    return (
        <>
            <h2 className='text-xl font-bold text-yellow-200'>
                LEGEND CLOTHES FOR EVERYONE
            </h2>
            <div className='grid grid-cols-3 gap-4 py-20 overflow-x-hidden'>
                {items.map((item) => (
                    <div key={item.id} className='relative w-full'>
                        <img src={item.img} alt="" className='w-full rounded-t-md' />
                        <div className='p-5 space-y-4 bg-yellow-950 rounded-b-md'>
                            <h3 className='text-2xl font-bold text-blue-300'>{item.title}</h3>
                            <p className='text-stone-100'>{item.p}</p>
                            <span className='block text-red-400'>{item.price}$</span>
                            <button
                                onClick={() => onClick(item)} // Call the function to add to cart
                                className='absolute p-2 bg-yellow-700 rounded right-3 bottom-3'>
                                {item.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Maincontent;
