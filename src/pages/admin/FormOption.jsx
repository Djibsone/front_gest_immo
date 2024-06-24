import React from 'react';
import Input from '../../components/forms/Input';

const FormOption = ({ option }) => {
    return (
        <div className="text-xl max-w-[1400px] mx-auto p-2">
            <div className="mx-auto pt-8">
                <h2 className="text-2xl font-semibold">{option ? 'Editer une option' : 'Créer une option'}</h2>

                <form class="space-y-4 mt-4">

                    <Input
                        name="option"
                        className="block w-full p-2 border border-gray-300 rounded-md"
                        value={option ? option.name : ''}
                        handleChange={() => ('')}
                        label="Nom"
                    />
                        
                    <div>
                        <button class="bg-blue-600 w-full text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-blue-700 mt-2 md:mt-0">
                            {option ? 'Modifier' : 'Créer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormOption;
