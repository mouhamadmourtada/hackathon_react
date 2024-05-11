import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import { gsap } from "gsap";

export function Show(){
    gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
    const links = [
        {
            label : "Todos",
            lien : "/todos",
            icon : "HomeIcon"
        },{
            label : "show",
            lien : "/todos/show",
            icon : "ShowIcon"
        }
    ]
    return (
        <div>
            <BreadCrumb links = {links} />
            <div className='box mt-5 bg-white min-h-20 rounded shadow-xl border border-1 border-gray-200'>
                hgjhgjhgjhg
            </div>

        </div>
    );
}

