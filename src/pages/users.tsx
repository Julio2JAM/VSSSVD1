import { Modal } from "../components/modal";
import { Sidebar } from "../components/sidebar";
import { Table, TableData } from "../components/table";
import { useState } from "react";

export default function UsersPage() {

    const tableConfig:TableData = {
        headers: [
            { name: "ID", type: "button", code:"id"},
            { name: "Nombre", type: "button", code:"nombre"},
            { name: "Edad", type: "text", code:"edad"},
        ],
        rows: [
            { id: 1, nombre: 'Juan', edad: 28 },
            { id: 2, nombre: 'Ana', edad: 22 },
            { id: 3, nombre: 'Lorem ipsum', edad: 35 },
            { id: 4, nombre: 'María', edad: 30 },
            { id: 5, nombre: 'Pedro', edad: 26 },
            { id: 6, nombre: 'Laura', edad: 24 },
            { id: 7, nombre: 'Carlos', edad: 29 },
            { id: 8, nombre: 'Marta', edad: 31 },
            { id: 9, nombre: 'Luis', edad: 27 },
            { id: 10, nombre: 'Sofía', edad: 25 },
            { id: 11, nombre: 'Miguel', edad: 32 },
            { id: 12, nombre: 'Elena', edad: 28 },    
            { id: 13, nombre: 'Lucía', edad: 23 },
            { id: 14, nombre: 'Alberto', edad: 33 },
            { id: 15, nombre: 'Natalia', edad: 21 },
            { id: 16, nombre: 'Javier', edad: 29 },
            { id: 17, nombre: 'Carmen', edad: 26 },
            { id: 18, nombre: 'Diego', edad: 28 }
        ]
        
    }

    const [search, setSearch] = useState("");
    const [isOpenModal, setIsOpenModal] = useState(false);
      
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="container mx-auto py-10">

                <Modal 
                    icon="user-icon.png" 
                    title="Usuarios" 
                    formData=""
                    onClose={() => setIsOpenModal(false)}
                    isOpen={isOpenModal}
                />

                {/* MAIN */}
                <div className="rounded-lg border bg-white shadow-sm h-full flex flex-col"> 

                    {/* A */}
                    <header className="p-6 flex flex-row items-center justify-between space-y-0">
                        <div className="space-y-1">
                            <h3 className="tracking-tight text-2xl font-bold">Users</h3>
                            <p className="text-sm text-gray-500">Manage your team members and their account permissions here.</p>
                        </div>
                        <button 
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none px-4 py-2 bg-black text-white hover:bg-black/70" 
                            onClick={() => setIsOpenModal(true)}
                        >
                            <UserAdd className="mr-2 h-4 w-4" />
                            Add User
                        </button>
                    </header>

                    {/* B */}
                    <section className="p-6 pt-0 flex flex-col flex-grow overflow-hidden">
                        {/* C */}
                        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-6 mt-1">
                            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                                <div className="relative w-full md:w-64">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"></Search>
                                    <input 
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none pl-8" 
                                        placeholder="Search users..." 
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                                <div className="relative w-full md:w-64">
                                    <select
                                        className="h-10 rounded-md border px-3 py-2 text-sm focus:outline-none w-full md:w-[180px] appearance-none bg-white" 
                                        onChange={(e) => setSearch(e.target.value)}
                                    >
                                        <option value="">Sel</option>
                                    </select>
                                    <div className="pointer-events-none absolute left-32 top-2.5 ">
                                        <ArrowSelect className="ml-5 h-5 w-5"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* D */}
                        <div className="flex-grow overflow-auto rounded-md border">
                            <Table config={tableConfig} search={search}></Table>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

interface PropsType{
    className:string
}

function UserAdd(props:PropsType){
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <line x1="19" x2="19" y1="8" y2="14"></line>
            <line x1="22" x2="16" y1="11" y2="11"></line>
        </svg>
    )
}

const ArrowSelect:React.FC<PropsType> = (props) => {
    return (
        <svg 
            {...props}
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
        >
            <path d="m6 9 6 6 6-6"></path>
        </svg>
    )
}

function Search(props:PropsType){
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
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
        </svg>
    )
}