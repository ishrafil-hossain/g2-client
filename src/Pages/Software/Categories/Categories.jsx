import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Categories = () => {
    const projects = useLoaderData()
    return (
        <div className='customContainer'>
            <h2 className=' mt-12 mb-3 text-end'>
                <Link className='text-red-600 font-bold'>See all Project Management Software</Link>
            </h2>
            <div className="grid grid-cols-3 gap-4 ">
                {
                    projects.map((project, index) => <Link
                        to={`/project/${project.id}`}
                        key={index}>

                        <div className="card bg-base-100 border-2 rounded-none text-sm text-black">
                            <h2 className="px-3">{project.name}</h2>
                            <div className="rating rating-sm mb-3">
                                {[...Array(5)].map((rat, ind) => <input key={ind} type="radio" name="rating-2" className={`mask mask-star-2 mr-1 ${project.rating >= ind + 1 ? "bg-orange-600" : "bg-orange-200"}`} />)}
                            </div>
                            <div className='mx-auto p-6'>
                                <img className='w-20 h-20' src={project.img} alt="" />
                            </div>
                        </div>

                    </Link>)
                }
            </div>

        </div>
    );
};

export default Categories;