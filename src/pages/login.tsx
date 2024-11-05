import { useState } from "react"
import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
import { Login } from "../services/authService";
import { HTTP_STATUS } from "../config/constant";

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
        setError("Introduzca todos los datos.");
        return;
    }

    const data = await Login(email, password);

    if(data.status !== HTTP_STATUS.CREATED){
        setError(data.message);
        return;
    }
    
    if(!data.user?.role){
        setError("No posee permisos para ingresar.");
    }
    
  }

    return (
    <div className="min-h-screen flex flex-col">

        <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 p-4">

        <div className={`${!error ? "hidden" : ""} bg-red-50 relative rounded-lg border p-4 px-12 border-red-400/50 text-red-400 mb-4 max-w-md w-full`}>
            <CloseBtn className="absolute h-5 w-5 right-5 cursor-pointer" onClick={() => setError("")}></CloseBtn>
            <Warning className="absolute h-5 w-5 left-5"></Warning>
            <p className="text-sm">{error}</p>
        </div>

        <div className="rounded-lg border shadow-sm w-full max-w-md bg-white">

            <header className="flex flex-col space-y-1.5 p-6">
                <h3 className="tracking-tight text-2xl font-bold text-center">Login</h3>
                <p className="text-sm text-gray-500 text-center">Enter your credentials to access your account</p>
            </header>

            <section className="p-6 pt-0">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">

                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="email">Email</label>
                            <div className="relative">
                                <Email className="absolute left-3 top-3 h-4 w-4 text-gray-500"></Email>
                                <input 
                                    autoFocus
                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none pl-10" 
                                    id="email" 
                                    placeholder="Enter your email" 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="password">Password</label>
                            <div className="relative">
                                <Password className="absolute left-3 top-3 h-4 w-4 text-gray-500"></Password>
                                <input 
                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none pl-10" 
                                    id="password" 
                                    placeholder="Enter your password" 
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button className="rounded-md text-sm font-medium transition-colors focus-visible:outline-none bg-black text-white hover:bg-black/80 h-10 px-4 py-2 w-full" type="submit">Login</button>

                    </div>
                </form>
            </section>
        
            <footer className="items-center p-6 pt-0 flex justify-center">
                <p className="text-sm text-gray-500">Don't have an account? <Link to="/register"className="text-black hover:underline">Register here</Link></p>
            </footer>

        </div>

        </div>
        <Footer></Footer>
    </div>
  )
}

interface PropsType{
    className:string
    onClick?: () => void
}

function CloseBtn(props:PropsType){
    return(
        <svg 
        {...props}
            xmlns="http://www.w3.org/2000/svg" 
            x="0px" 
            y="0px" 
            width="100" 
            height="100" 
            viewBox="0 0 30 30"
            fill="red"
        >
        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
        </svg>
    )
}

function Warning(props:PropsType) {
    return (
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
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" x2="12" y1="8" y2="12"></line>
        <line x1="12" x2="12.01" y1="16" y2="16"></line>
        </svg>
    )
  }
  
function Email(props:PropsType) {
  return (
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
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function Password(props:PropsType) {
  return (
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
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  )
}
