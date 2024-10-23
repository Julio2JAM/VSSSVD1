import { Sidebar } from "../components/sidebar";

export default function DashboardPage() {
    return (
        <div className="flex h-screen bg-gray-100">

            <Sidebar></Sidebar>

            <div className="flex flex-1 flex-col overflow-hidden">

                <header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
                </main>

            </div>

        </div>
    )
}