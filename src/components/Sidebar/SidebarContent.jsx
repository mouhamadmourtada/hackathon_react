import React from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'
import { Button } from '@windmill/react-ui'
import Logo from '../Logo'
import MdIcon from '../MdIcon'

// function Icon({ icon, ...props }) {
//   const Icon = Icons[icon]
//   return <Icon {...props} />
// }

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 ">
      
      <Logo/>

      
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative py-1  hover:bg-slate-10" key={route.name}>
              <NavLink
                exact
                to={route.path}
                
                className={({ isActive }) => 
                  isActive ? "py-3  rounded px-5 inline-flex items-center w-full text-xm font-semibold transition-colors duration-150 bg-primary text-white hover:text-white" : "py-3  rounded px-5 inline-flex items-center w-full text-xm font-semibold transition-colors duration-150 hover:text-secondary text-primary"
                }                
              >
               
                <MdIcon className="w-6 h-6" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      {/* <div className="px-6 my-6">
        <Button>
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div> */}
    </div>
  )
}

export default SidebarContent
