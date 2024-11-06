interface DashboardCardData{
    svg: React.ReactNode,
    title:string,
    content:string,
    description:string,
    color:string
}

export const DashboardCard:React.FC<DashboardCardData> = ({svg, title, content, description, color}) => {
    return(
        <div className={`rounded-lg border shadow-sm p-6 border-t-4 border-t-${color}/50`}>

            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                    <h3 className="tracking-tight text-sm font-medium">{title}</h3>
                    {/* TEXTO DEBAJO DEL TITULO */}
                    {/* <p className="text-xs">{description}</p> */}
                </div>
                <div className={`p-2 bg-${color} rounded-md`}>
                    {svg}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold">{content}</h2>
                {/* TEXTO DEBAJO DEL CONTENIDO */}
                <p className="text-xs">{description}</p>
            </div>

        </div>
    )
}
