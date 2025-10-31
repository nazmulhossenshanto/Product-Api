import React from 'react';

const ProductForm = ({handleProducts}) => {
    const handleSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const newProduct = {
            name, email, password
        }
        handleProducts(newProduct);
    }
    return (
        <div className='ml-10 border-2 border-amber-700 p-10'>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='name' /><br />
                <input type="email" name='email' placeholder='email' /><br />
                <input type="password" name='password' placeholder='password' /><br />
                <input type="submit" value="submit" className='btn btn-active' />
            </form>
        </div>
    );
};

export default ProductForm;