import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ property }) => {
  return (
    // <div className='rounded-xl p-2 shadow-md bg-slate-50 flex flex-col justify-end select-none'>
    //     <Link to={`/property`} className=' h-56 border border-white overflow-hidden rounded-xl block'>
    //         <img src={property.image} alt={property.tilte} className='w-full h-full object-cover hover:scale-110 transition ease-in-out' />
    //     </Link>
    //     <div className='flex justify-between items-center'>
    //         <Link to={`/property`} className='text-blue-600 py-2 font-semibold truncate'>
    //             <h2>{property.title}</h2>
    //         </Link>
    //         <div className='flex items-center gap-1'>
    //             <span>{property.surface} - {property.price}</span>
    //         </div>
    //     </div>
    //     <div className='border-t border-gray-300 p-1 flex justify-between items-center'>
    //         <div className='flex text-gray-500 text-sm items-center gap-2'>
    //             {property.price} XOF
    //         </div>
    //     </div>
    // </div>

    <div className="w-full md:w-full mb-4">
        <div className="flex flex-col h-full">
            <div className="bg-white rounded-lg shadow-md flex-grow">
                <div className="p-2 h-48 overflow-hidden">
                    <Link to={`/property`} className='h-56 border border-white overflow-hidden rounded-xl block'>
                        <img src={property.image} className="w-full h-full object-cover hover:scale-110 transition ease-in-out" alt="Image Téléchargée" />
                    </Link>
                </div>
                <div className="p-4">
                    <h5 className="text-lg text-blue-600 font-semibold mb-2 overflow-hidden line-clamp-2">
                        <Link to={`/property`}>
                            { property.title }
                        </Link>
                    </h5>
                    <p className="text-gray-700 mb-2">{ property.surface } m² - { property.city } ({ property.postal_code })</p>
                    <p className="text-gray-500">
                        <small>
                            { property.price } XOF
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>

    // <div class="bg-gray-100 md:px-10 px-4 py-1 font-[sans-serif]">
    //   <div class="container mx-auto">
    //     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       <div class="bg-white rounded-lg overflow-hidden shadow-lg">
    //         <img src={property.image} alt="Blog Post 1" class="w-full h-52 object-cover" />
    //         <div class="p-6">
    //           <h3 class="text-xl font-bold text-gray-800 mb-2">Lorem Ipsum Dolor</h3>
    //           <p class="text-gray-600 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
    //           <a href="javascript:void(0);" class="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Card;
