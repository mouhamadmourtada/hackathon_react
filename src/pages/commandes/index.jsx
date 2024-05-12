import React from 'react';

export default function Orders() {
    return (
        <div>
             <h1>Commandes</h1>
             <div className="flex flex-col  h-screen ">
                <div className='flex justify-between bg-green-50 p-4 rounded-xl shadow-sm border'>
                <span className='text-primary_jay font-bold'>Commande N°213242</span>
                    <span className='text-green-900 text-xs font-bold'>Passé le 02/05/2024</span>

                </div>
             </div>
            
        </div>
    );
}
