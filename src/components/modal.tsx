interface ModalData{
    icon:string,
    title:string,
    formData:any,
    onClose:Function
    onSubmit:Function
    isOpen:Boolean
}

export const Modal:React.FC<ModalData> = ({icon, title, formData, onClose, isOpen, onSubmit }) => {

    if(!isOpen){
        return null;
    }
    
    return (
        <div 
            className="fixed inset-0 z-50 bg-black/80"
            onClick={() => onClose()}
        >

            <div className="container mx-auto py-10 flex items-center justify-center">

                <div 
                    className="rounded-xl border bg-white shadow-sm w-96 overflow-hidden items-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* //items-center */}
                    <header className="border-b p-5 flex justify-between bg-gray-300"> 
                        <div className="flex items-center gap-3">
                            <img className="w-14 h-14" 
                                src={icon} 
                                alt="user-icon">
                            </img>
                            <h3 className="font-normal text-xl  tracking-tight">
                                {title}
                            </h3>
                        </div>
                        <button 
                            className="border-none w-6 h-6 rounded-full bg-white font-bold hover:bg-red-300 hover:text-white transition-colors"
                            onClick={() => onClose()}
                        >
                            X
                        </button>
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
                    
                    <footer className="p-4 content-center flex flex-row justify-center bg-gray-300">
                        <button 
                            type="submit"
                            className="border py-3 px-7 rounded-md text-base bg-white" //bg-green-300 
                            onClick={() => onSubmit()}
                        >
                            Submit
                        </button>
                    </footer>
                </div>

            </div>

        </div>
    )
}
