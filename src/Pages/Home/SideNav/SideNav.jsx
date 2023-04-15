import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='text-black mt-14 mb-4'>
            <h3 className='text-3xl font-bold'>Most Popular Software</h3>
            <h3 className='text-3xl font-bold mb-4'>Categories</h3>
            <ul className="menu w-56">
                {
                    categories.map((category, index) => <p key={index}>
                        <Link to={`/category/${category.id}`}>{category.category}</Link>
                    </p>)
                }
            </ul>
        </div>
    );
};

export default SideNav;