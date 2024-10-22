//import { useState } from "react"

export default function LoginPage() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
                                <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none pl-10" id="email" placeholder="Enter your email" type="email" value=""/>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="password">Password</label>
                            <div className="relative">
                                <Password className="absolute left-3 top-3 h-4 w-4 text-gray-500"></Password>
                                <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none pl-10" id="password" placeholder="Enter your password" type="password" value=""/>
                            </div>
                        </div>

                        <button className="rounded-md text-sm font-medium transition-colors focus-visible:outline-none bg-black text-white hover:bg-black/80 h-10 px-4 py-2 w-full" type="submit">Login</button>

                    </div>
                </form>
            </section>
        
            <footer className="items-center p-6 pt-0 flex justify-center">
                <p className="text-sm text-gray-500">Don't have an account? <a className="text-black hover:underline" href="#">Register here</a></p>
            </footer>

        </div>
    </div>
  )
}

interface PropsType{
    className:string
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
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
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
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
    >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  )
}
