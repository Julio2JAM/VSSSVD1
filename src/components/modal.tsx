interface ModalData{
    icon:string,
    title:string
    formData:any
}

export const Modal:React.FC<ModalData> = ({icon, title, formData }) => {
    formData = [
        {
            id: "email",
            label: "Email",
            input: {
                "type": "email",
                "placeholder": "Enter your email"
            }
        },
        {
            id: "password",
            label: "Password",
            input: {
                "type": "password",
                "placeholder": "Enter your password"
            }
        },
        {
            id: "country",
            label: "Country",
            select: {
                options: [
                    { "value": "us", "text": "United States" },
                    { "value": "ca", "text": "Canada" },
                    { "value": "mx", "text": "Mexico" }
                ]
            }
        }
    ];
    
    return (
        <div className="fixed inset-0 z-50 bg-black/80">

            <div className="container mx-auto py-10 flex items-center justify-center">

                <div className="rounded-lg border bg-white shadow-sm w-96 overflow-hidden items-center">
                    <header className="border-b p-5 flex">
                        <h3>
                            <img className="w-14 h-14" 
                                src={icon} 
                                alt="user-icon">
                            </img>
                            {title}
                        </h3>
                        <button className="border-none w-6 h-6 rounded-full bg-gray-300 font-bold">X</button>
                    </header>

                    <section className="border-b p-5">        
                        <form>
                        {formData.map((field:any, index:any) => (
                            <div key={index} className="mb-4">
                            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                                {field.label}
                            </label>
                            {field.input ? (
                                <input
                                    type={field.input.type}
                                    id={field.id}
                                    placeholder={field.input.placeholder}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            ) : (
                                <select
                                    id={field.id}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                {field.select.options.map((option:any, index:any) => (
                                    <option key={index} value={option.value}>
                                    {option.text}
                                    </option>
                                ))}
                                </select>
                            )}
                            </div>
                        ))}
                        </form>
                    </section>
                    
                    <footer className="p-4">
                        <button 
                            type="submit"
                            className="border py-3 px-7 rounded-md text-base" //bg-green-300 
                        >
                            Submit
                        </button>
                    </footer>
                </div>

            </div>

        </div>
    )
}
