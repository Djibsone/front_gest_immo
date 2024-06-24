import React, { useState } from 'react';
import { Edit, Trash } from 'lucide-react';
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';

const Properties = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const properties = [
        {title:"Soluta totam ut et sed ea maxime deserunt maiores.", surface:62, price:12000, city:"Bouvet"},
        {title:"Nobis quasi sit ut ut.", surface:40, price:10000, city:"Moreau"},
        {title:"Sint ut et quam voluptatum mollitia ipsum ut.", surface:38, price:8000, city:"Noel"},
        {title:"Aliquid odit dolorem quae maxime quaerat eveniet sint.", surface:98, price:15000, city:"Lagarde"},
        {title:"Est hic ipsa et.", surface:110, price:20000, city:"Nguyennec"},
    ];

    return (
        <div className="mx-auto max-w-7xl py-6">
            <div className="relative shadow-m sm:rounded-lg py-6">
                <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <p className="inline-flex items-center bg-white font-medium text-sm px-3 py-1.5 border rounded-md overflow-hidden shadow">
                        Tous les biens
                    </p>
                    <label className="sr-only">Search</label>
                    <div className="relative">
                        <Link to={'/admin/propertie'} className='bg-blue-600 text-white md:ml-8 px-3 py-1 rounded-md duration-500 md:static'>Ajouter un bien</Link>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-white border rounded-md overflow-hidden shadow-md">
                        <thead className="text-xs text-gray-700 uppercase bg-white border rounded-sm overflow-hidden shadow">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    N°
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Titre
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Surface
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Prix
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ville
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties && properties.map((propertie, index) => (
                                <tr className="bg-transparent text-gray-700 border rounded-md overflow-hidden shadow-md" key={index}>
                                    <td className="px-6 py-4">
                                        {index}
                                    </td>
                                    <td className="px-6 py-4">
                                        {propertie.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        {propertie.surface} m²
                                    </td>
                                    <td className="px-6 py-4">
                                        {propertie.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {propertie.city}
                                    </td>
                                    <td className="px-6 py-4 flex items-center space-x-2">
                                        <button className="text-blue-500 hover:text-blue-700" onClick={toggleModal}>
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                            <Trash className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal isOpen={isOpen} toggleModal={toggleModal} />
        </div>
    )
}

export default Properties;
