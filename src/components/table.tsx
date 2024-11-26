import { useState } from "react";

interface PropsType{
    className:string
}

interface Header {
    name: string; // Nombre del encabezado
    type: 'text' | 'button'; // Tipo de contenido: texto o botón
    code: string; // Para funciones.
}

export interface TableData {
    headers: Header[]; // Un array de encabezados
    fields: string[];
    rows: any;     // Datos
}

interface TableProps {
    config: TableData;
    search: string
}

interface HeaderCellProps {
    header: Header,
    isButton: boolean,
    sort: Function
    sortCol: string
    sortDir: string
}

const HeaderCell: React.FC<HeaderCellProps> = ({ header, isButton, sort, sortCol, sortDir }) => {
    return (
        <th className={`h-12 ${isButton ? "px-2" : "px-4"} text-left align-middle font-medium text-gray-500`}>
            {isButton ? (
                <button
                    className="justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none hover:bg-gray-200 hover:text-gray-600 h-10 px-4 py-2 flex items-center font-semibold"
                    onClick={() => sort(header.code)}
                >
                    {header.name}
                    {sortCol === header.code 
                        ? sortDir === "asc" 
                            ? <ArrowUp className="ml-2 h-4 w-4" /> 
                            : <ArrowDown className="ml-2 h-4 w-4" />
                        : <Arrow className="ml-2 h-4 w-4" />
                    }

                </button>
                ) : (
                header.name
            )}
        </th>
    );
};

export function Table({ config, search }: TableProps) {
    
    const { headers, fields, rows } = config;
    const filteredRows = rows;
    // const filteredRows = rows.filter(
    //     (user: any) => user.nombre.toLowerCase().includes(search.toLowerCase()) || search === ""
    // );

    const [sortColumn, setSortColumn] = useState(headers[0].name);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const sortedRows = [...filteredRows].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
        return 0;
    });

    const handleSort = (column: string) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    };
    const finalRows = sortedRows;

    return (
        <table className="min-w-full text-sm">
            <thead className="sticky top-0">
                <tr className="transition-colors bg-white hover:bg-gray-100 shadow-inset-border">
                    {headers.map((header, index) => (
                        <HeaderCell key={index} header={header} isButton={header.type === 'button'} sort={handleSort} sortCol={sortColumn} sortDir={sortDirection}/>
                    ))}
                    <th className="h-12 px-4 align-middle font-medium text-gray-500 text-right">Acción</th>
                </tr>
            </thead>
            <tbody>
                {finalRows.map((row: any, rowIndex: any) => (
                    <tr className="border-b transition-colors hover:bg-gray-100/80" key={rowIndex}>
                    {fields.map(field => (
                        <td className="py-4 px-4 align-middle font-medium" key={field}>{row[field]}</td>)
                    )}
                    <td className="px-4 align-middle text-right">
                        <button
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-8 w-8 p-0 bg-gray-200 hover:bg-gray-300"
                            type="button"
                        >
                        <Action className="h-5 w-4"></Action>
                        </button>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
      
    );
}

const Arrow:React.FC<PropsType> = (props) => {
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

const ArrowUp:React.FC<PropsType> = (props) => {
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
            <path d="m18 15-6-6-6 6"></path>
        </svg>
    )
}

const ArrowDown:React.FC<PropsType> = (props) => {
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
            data-id="75"
        >
            <path d="m6 9 6 6 6-6"></path>
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