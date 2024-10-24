import { Sidebar } from "../components/sidebar";
import { Table } from "../components/table";

interface Usuario {
    id: number;
    nombre: string;
    edad: number;
    ciudad: string;
}

export default function UsersPage() {
    
    const userData: Usuario[] = [
        { id:1, nombre: 'Juan', edad: 28, ciudad: 'Madrid' },
        { id:2, nombre: 'Ana', edad: 22, ciudad: 'Barcelona' },
        { id:3, nombre: 'Luis', edad: 35, ciudad: 'Valencia' },
    ];

    return (
        <div className="flex h-screen bg-gray-100">

            <Sidebar></Sidebar>

            <div className="container mx-auto py-10">

                <div className="rounded-lg border bg-white shadow-sm">

                    <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-7">
                        
                        <div className="space-y-1">
                            <h3 className="tracking-tight text-2xl font-bold">Users</h3>
                            <p className="text-sm text-gray-500">Manage your team members and their account permissions here.</p>
                        </div>

                        <button 
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none 10 px-4 py-2 bg-black text-white hover:bg-black/80" 
                            data-id="7"
                        >
                            <UserAdd className="lucide lucide-user-plus mr-2 h-4 w-4"></UserAdd>
                            Add User
                        </button>

                    </div>

                    <div className="p-6 pt-0">
                        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-6">
                            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                                <div className="relative w-full md:w-64" data-id="45">
                                    <Search className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"></Search>
                                    <input 
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8" 
                                        placeholder="Search users..." 
                                    />
                                </div>
                            </div>
                        </div>
                        <Table data={userData}></Table>
                    </div>
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