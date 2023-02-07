import { useState } from 'react'

function AddCategory({ onNewCategory }) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e) => {
         e.preventDefault();
         const newInput = inputValue.trim();
         if(newInput.length <= 1) return;
        //  setCategories( (categories) => [ ...categories, inputValue]);
        setInputValue('');

        onNewCategory(newInput)
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder='Buscar gif'
                value={ inputValue }
                onChange={ onInputChange } />
        </form>

    )
}

export default AddCategory