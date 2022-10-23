
import toast, { Toaster } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';
import { XButton } from '../components/ui';
import { HiRefresh } from "react-icons/hi";

import useAuth from '../utils/hooks/useAuth';

function HomePage(props) {


    const { signOut } = useAuth()

    useEffect(() => {
        return () => {

        }
    }, []);

    const  handleclick = async ()=>{
         await signOut()
    }


    return (
        <div>
            HomePage

            <div className='bg-red-600'></div>
            <XButton size='sm' shape='round' block={false} variant='solid' loading={false} onClick={handleclick}>
            <HiRefresh className='mr-1'/>
            Refresh</XButton>
           
        </div>
    )
}


export default HomePage;