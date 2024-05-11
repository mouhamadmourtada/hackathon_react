import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import useAxios from '../../Hook/useAxios';
export function Create() {
    
    const links = [
        {
            label : "Todos",
            lien : "/todos",
            icon : "HomeIcon"
        },{
            label : "create",
            lien : "/todos/create",
            icon : "AddIcon"
        }
    ]


    const {responseAxios, loading, error, fetchData} = useAxios({
        url : 'http://localhost:8000/api/todos',
        method : "POST",
        
        headers : {
            "Content-type" : "application/json"
        }
    })
    

    const onSubmit = (e) => {
        e.preventDefault()
        // console le champ du formulaire
        fetchData(
            JSON.stringify({
                title: e.target.elements.title.value,
                description : e.target.description.value
                // password: password,
            }),
        )
        // console.log(e.target.elements.title.value)
        // console.log(e.target.elements.description.value)
        // console.log(e.target.elements.checkbox.checked)
        
    
        console.log("submit")
    }

    return (
        <div>
            <BreadCrumb links = {links} />

            <div className='mt-5 bg-white min-h-20 rounded shadow-xl border border-1 border-gray-200'>
                <form onSubmit={onSubmit} className='p-5'>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium text-gray-700'>Title</label>
                        <input name='title' type='text' className='mt-1 focus:ring-secondaire focus:border-secondaire block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                    </div>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium text-gray-700'>Description</label>
                        <textarea name='description' className='mt-1 focus:ring-secondaire focus:border-secondaire block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'></textarea>
                    </div>
                    <div className='mb-5'>
                        <label className='block text-sm font-medium text-gray-700'>Completed</label>
                        <input name='checkbox' type='checkbox' className='mt-1 focus:ring-secondaire focus:border-secondaire block w-full shadow-sm sm:text-sm border-gray-300 rounded-md' />
                    </div>
                    <div className='flex justify-end'>
                        <button className='bg-secondaire text-white px-4 py-2 rounded'>Save</button>
                    </div>
                </form>
            </div>
           
        </div>
    );
}

