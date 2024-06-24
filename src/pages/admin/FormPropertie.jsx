import React from 'react'
import Input from '../../components/forms/Input';

const FormPropertie = ({ property }) => {
    return (
        <div className="text-xl max-w-[1400px] mx-auto p-2">
            <div className="mx-auto pt-8">
                <h2 className="text-2xl font-semibold">{property ? 'Editer un bien' : 'Créer un bien'}</h2>

                <form class="space-y-4 mt-4">
                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/2 px-2">
                            <Input
                                name="title"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={property ? property.title : ''}
                                handleChange={() => ('')}
                                label="Titre"
                            />
                        </div>
                        <div className="w-full md:w-1/4 px-2">
                            <Input
                                name="surface"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={property ? property.surface : ''}
                                handleChange={() => ('')}
                                label="Surface"
                            />
                        </div>
                        <div className="w-full md:w-1/4 px-2">
                            <Input
                                name="price"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={property ? property.price : ''}
                                handleChange={() => ('')}
                                label="Prix"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/2 px-2">
                            <Input
                                type="textarea"
                                name="description"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={property ? property.description : ''}
                                handleChange={() => ('')}
                                label="Description"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <Input
                                type="file"
                                name="images[]"
                                multiple={true}
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                handleChange={() => ('')}
                                label="Images"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="rooms"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={property ? property.rooms : ''}
                                handleChange={() => ('')}
                                label="Pièces"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="bedrooms"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={property ? property.bedrooms : ''}
                                handleChange={() => ('')}
                                label="Chambres"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="floor"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={property ? property.floor : ''}
                                handleChange={() => ('')}
                                label="Etage"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="city"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={property ? property.city : ''}
                                handleChange={() => ('')}
                                label="Ville"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="address"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={property ? property.address : ''}
                                handleChange={() => ('')}
                                label="Adresse"
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <Input
                                name="postal_code"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={property ? property.postal_code : ''}
                                handleChange={() => ('')}
                                label="Code postal"
                            />
                        </div>
                    </div>

                    <Input
                        name="options"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        value={property ? property.options : ''}
                        handleChange={() => ('')}
                        label="Options"
                    />
                    <Input
                        type="checkbox"
                        name="sold"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        value={property ? property.sold : ''}
                        handleChange={() => ('')}
                        label="Vendu"
                    />
                        
                    <div>
                        <button class="bg-blue-600 w-full text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-blue-700 mt-2 md:mt-0">
                            {property ? 'Modifier' : 'Créer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormPropertie;
