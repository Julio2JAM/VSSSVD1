export function Table({ data }: { data: any }) {
    // Asegúrate de que header sea un array de claves
    const header = data && data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <div className="rounded-md border">
            <div className="relative w-full overflow-auto">

                <table className="w-full caption-bottom text-sm">
                    <thead className="w-[100px]">
                        <tr className="border-b transition-colors hover:bg-gray-100/80">
                            {header.map((clave: any, index: any) => (
                                <th className="h-12 px-4 text-left align-middle font-medium text-gray-500" key={index}>
                                    {clave}
                                </th>
                            ))}
                            <th className="h-12 px-4 align-middle font-medium text-gray-500 text-right">action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((row: any, rowIndex: any) => (
                            <tr className="border-b transition-colors hover:bg-gray-100/80" key={rowIndex}>
                                {header.map((clave: any, colIndex: any) => (
                                    <td className="p-4 align-middle" key={colIndex}>{row[clave]}</td>
                                ))}
                                <td className="px-4 align-middle text-right">
                                    <button 
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0" 
                                        type="button" 
                                        aria-haspopup="menu" 
                                        aria-expanded="false" 
                                        data-state="closed"
                                    >
                                        <span className="sr-only" data-id="106">Open menu</span>
                                        <Action className="lucide lucide-ellipsis h-5 w-4"></Action>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </div>
    );
}

interface PropsType{
    className:string
}

function Action(props:PropsType){
    return(
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
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
        </svg>
    )
}