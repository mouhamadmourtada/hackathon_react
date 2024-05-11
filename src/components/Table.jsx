import  React, { useState } from 'react';
import ActionComponent from './ActionComponent';
import Modal from './Modal';
import MdCloseButton from './MdCloseButton';
import Drawer from './Drawer';




const Table = ({data, columns, actions}) => {
    
    return (
        <div>
            <div className="overflow-x-auto rounded shadow-xl">
                <table className="table-auto w-full">
                    <thead className='align-left' >
                        <tr className='bg-secondaire  text-white text-xs font-semi-bold tracking-wide uppercase'>
                            {columns.map((column, index) => (
                                <th className='px-2 text-left py-3 uppercase'  key={index}>{column.title}</th>
                            ))}
                            <th className='max-w-20' key={-1}> action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {columns.map((column, index2) => (                                
                                    <Td classes={"py-3"} libelle={row[column.attribute]} type={column.type} key={index2}/>
                                    
                                ))}
                                
                                <ActionComponent actions = {actions} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>            
        </div>
    );
}

const Td = ({libelle, type, classes}) => {
    classes = classes ? "${classes} px-3 py-3 border-b" : "px-3 py-3 border-b";
    if(type === "boolean")
        return (
            <td 
                className={classes}
            
            >
                <span className={ libelle ? 'bg-green-100 px-5 py-1 rounded-lg text-xs text-green-800 font-bold' : 'bg-red-100 px-5 py-1 rounded-lg text-xs text-red-800 font-bold'}>
                {libelle ? "Oui" : "Non"}

                </span>
            </td>
        );

    if(type === "Date"){
        return (
            <td 
                className={classes}
            >
                {libelle ? libelle.split('T')[0] : "Non défini"}

            </td>
        );
    }
    return (
        <td 
        className={classes}
        >
            {libelle}
        </td>
    );
}


export default Table