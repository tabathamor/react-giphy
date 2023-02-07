import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

function GifExpertApp() {

  const [categories, setCategories] = useState(['One punch']);
  console.log(categories);


  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])

  }
  return (
    <>
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory
        onNewCategory={onAddCategory}
        currentCategory={categories}
      />

      {/* listado de gif */}

        {
          categories.map(category =>  (
              <GifGrid  
              key={ category } 
              category={ category } />
            )
          )
        }
    </>
  )
}

export default GifExpertApp