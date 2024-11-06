import { DashboardCard } from "../components/dashboard-card";
import { Sidebar } from "../components/sidebar";

export function DashboardPage(){
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>

            {/* MAIN */}
            <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
                {/* CARDS */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <DashboardCard 
                        svg={<Users className="h-4 w-4 text-white"/>} // Pass the SVG component here
                        title="My Title"
                        content="My Content"
                        description="This is a description." 
                        color="indigo-600"
                    />

                </div>

                {/* LEVELS */}
                <div>

                </div>
            </div>
        </div>
    );
}

interface PropsType{
    className:string
}

// className="h-4 w-4 text-muted-foreground"
export const Users:React.FC<PropsType> = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}