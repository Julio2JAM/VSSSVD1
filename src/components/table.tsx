export function Table(data:any){

    // const header = Object.keys(data[0]);
    console.log(data[1]);

    return(

        <div className="rounded-md border">

            <div className="relative w-full overflow-auto">

                <table className="w-full caption-bottom text-sm">
                    <thead>
                    {/* {header.map((clave, index) => (
                        <th key={index}>{clave}</th>
                    ))} */}
                    </thead>
                    <tbody></tbody>
                </table>

            </div>

        </div>
    
    )
}