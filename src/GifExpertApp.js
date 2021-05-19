import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Mad Men']);

      return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategrs = {setCategories}/>
            <hr />            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;