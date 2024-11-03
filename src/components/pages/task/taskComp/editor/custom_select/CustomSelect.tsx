import React, {useEffect, useState} from 'react'
import "./select.less"

interface CustomSelectProps {
    options: { value: string; label: string }[];
    selectedOption: string;
    onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, selectedOption, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value: string) => {
        onChange(value);
        setIsOpen(false);
    };

    return (
        <div className="custom-select-container">
            <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
                {options.find(option => option.value === selectedOption)?.label || 'Select an option'}
                <img className='triangle' src="https://cdn0.iconfinder.com/data/icons/arrow-153/20/triangle_bottom-1024.png"  />
            </div>
            {isOpen && (
                <div className="custom-select-options">
                    {options.map(option => (
                        <div
                            key={option.value}
                            className="custom-select-option"
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect