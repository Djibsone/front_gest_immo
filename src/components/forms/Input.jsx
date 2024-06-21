/**
 * @param {string} placeholder 
 * @param {string} type
 * @param {string} name 
 * @param {string} className 
 * @param {string} value 
 * @param {string} label 
 * @param {(s: string) => void} handleChange  
 */

const Input = ({ type, name, className, value, placeholder, handleChange, label }) => (
    <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        {type === 'textarea' ? (
            <textarea
                name={name}
                className={`block w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-400 rounded-md ${className}`}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
        ) : (
            <input
                type={type ?? 'text'}
                name={name}
                className={`block w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-400 rounded-md ${className}`}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
        )}
    </div>
);

export default Input;
