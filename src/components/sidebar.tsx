import { useState } from "react"

export function Sidebar(){
    const [sidebarOpen, setSidebarOpen] = useState(false)
    
    return (
        <div className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>

            <div className="flex h-16 items-center justify-between px-4">
                <span className="text-2xl font-semibold">Admin</span>
                <button className="lg:hidden" onClick={() => setSidebarOpen(false)}></button>
            </div>

            <nav className="mt-8 px-4">
                <a 
                href="#" 
                className="mb-4 flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                    <Dashboard className="mr-3 h-6 w-6" ></Dashboard>
                    Dashboard
                </a>
                <SidebarUsers></SidebarUsers>
            </nav>

        </div>
    )
}

export function SidebarUsers(){
    return(
        <a
            href="#"
            className="mb-4 flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200"
        >
            <User className="mr-3 h-6 w-6"></User>
            Users
        </a>
    )
}

interface PropsType{
    className:string
}

function Dashboard(props:PropsType){
    return (
        <svg 
            {...props}
            xmlns="http://www.w3.org/2000/svg" 
            width="24"
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        >
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M9 21V9"></path>
        </svg>
    )
}


function User(props:PropsType) {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
        >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M4 22a8 8 0 1116 0h-2a6 6 0 10-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        </svg>
    );
  }
  