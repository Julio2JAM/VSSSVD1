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

            <div>
                <div>
                    <header>
                        <h3><img src={icon} alt="students-icon">{title}</img></h3>
                        <button>&times</button>
                    </header>

                    <section>        
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
                    
                    <footer>
                        <button type="submit">Submit</button>
                    </footer>
                </div>
            </div>

        </div>
    )
}
