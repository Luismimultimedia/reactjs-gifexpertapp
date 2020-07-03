import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = (value) => {
    //     setCategories([...categories, value]);
    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map ( (category) => 
                        <GifGrid key={category} category = {category} />
                    )
                }
            </ol>
        </>
    );

}

export default GitExpertApp;