import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

type InputProps = {};

const Search: React.FC<InputProps> = (props: InputProps) => {
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchInput("");
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={searchInput}
                onChange={handleInputChange}
                className={'pl-12 rounded-xl dark:active:bg-dark dark:bg-gray-900 dark:text-white'}
            />
            <FaSearch className="absolute top-1/3 left-3 dark:text-white" />
            {searchInput && (
                <FaTimes
                    className={'absolute top-1/3 right-3 cursor-pointer dark:text-white'}
                    onClick={handleClearSearch}
                />
            )}
        </div>
    );
};

export default Search;
