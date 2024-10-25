import { useState } from "react";

interface Header {
    name: string; // Nombre del encabezado
    type: 'text' | 'button'; // Tipo de contenido: texto o botón
}

export interface TableData {
    headers: Header[]; // Un array de encabezados
    rows: any;     // O puedes definir un tipo más específico para las filas
}
interface TableProps {
    config: TableData;
    search: string
}

interface HeaderCellProps {
    key: number,
    header: Header;
    isButton: boolean;
}

const HeaderCell: React.FC<HeaderCellProps> = ({ key, header, isButton }) => {
    return (
        <th className={`h-12 ${isButton ? "px-2" : "px-4" } text-left align-middle font-medium text-gray-500`} key={key}>
            {isButton ? (
                <button 
                    className="justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none hover:bg-gray-200 hover:text-gray-600 h-10 px-4 py-2 flex items-center font-semibold"
                    // onClick={() => handleSort("id")}
                >
                    {header.name}
                    <Arrow className="lucide lucide-chevrons-up-down ml-2 h-4 w-4" />
                </button>
            ) : (
                header.name
            )}
        </th>
    );
};

export function Table({ config, search }: TableProps) {
    
    const { headers, rows } = config;

    const filteredUsersData = rows.filter(
        (user:any) => user.nombre.toLowerCase().includes(search.toLowerCase()) || search == ""
    );

    const finalRows = filteredUsersData;

    return (
        <table className="min-w-full text-sm">

            <thead className="sticky top-0">
                <tr className="transition-colors bg-white hover:bg-gray-100 shadow-inset-border">
                    {headers.map((header, index) => (
                        <HeaderCell key={index} header={header} isButton={header.type === 'button'} />
                    ))}
                    <th className="h-12 px-4 align-middle font-medium text-gray-500 text-right">Acción</th>
                </tr>
            </thead>

            <tbody>
                {finalRows.map((row: any, rowIndex: any) => {
                    return (
                        <tr className="border-b transition-colors hover:bg-gray-100/80" key={rowIndex}>
                            {Object.keys(row).map((key, colIndex) => (
                                <td className="py-4 px-4 align-middle font-medium" key={colIndex}>{row[key]}</td>
                            ))}
                            <td className="px-4 align-middle text-right">
                                <button
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-8 w-8 p-0 bg-gray-300"
                                    type="button"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    data-state="closed"
                                >
                                    <Action className="lucide lucide-ellipsis h-5 w-4"></Action>
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    );
}


interface PropsType{
    className:string
}

function Arrow(props:PropsType){
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
            <path d="m7 15 5 5 5-5"></path>
            <path d="m7 9 5-5 5 5"></path>
        </svg>
    )
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