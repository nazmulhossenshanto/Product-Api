import React from 'react';
import Navigationbar from '../components/Navigationbar';
import {  Outlet } from 'react-router';
import HookForm from '../components/HookForm';
import ProductManagement from '../components/Product/ProductManagement';
import InputForm from '../components/InputForm';

const root = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <h1>This header</h1>
                <Navigationbar></Navigationbar>
            </header>
            <main className='flex justify-center gap-10 my-10 w-11/12 mx-auto '>
                <aside className='border border-purple-700 p-10'>
                    <h1>this is aside</h1>
                </aside>
                <div className='border border-cyan-600 p-10'>
                    <Outlet></Outlet>
                </div>
            </main>
            <footer>
               <InputForm></InputForm>
            </footer>
        </div>
    );
};

export default root;