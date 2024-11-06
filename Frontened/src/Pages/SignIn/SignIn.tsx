import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../Hooks/userLogin";




const SignIn = () => {

    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const {login}=useLogin();

    const handleSubmit=async(event:  React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        login({userName,password});
    }
    return (
        <div className="flex flex-col items-center justify-center mx-auto min-w-96">
            <div className="w-full p-6 rounded-lg shadow-md backdrop-blur-lg  ">
                <h1 className="text-center text-3xl font-mono text-gray-600 p-6">
                    Login
                </h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div>
                        <label className="input input-bordered flex items-center gap-2 bg-slate-700 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Username" 
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                            
                            />
                        </label>
                    </div>
                    <div className="mt-3">
                        <label className="input input-bordered flex items-center gap-2 bg-slate-700 ">


                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M12 2a5 5 0 0 1 5 5v4h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V13a2 2 0 0 1 2-2h3V7a5 5 0 0 1 5-5zm3 8H9v4h6V10zm-3-6a3 3 0 0 0-3 3v4h6V7a3 3 0 0 0-3-3z" />
                            </svg>



                            <input type="password" className="grow" placeholder="Password" 
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <Link to={"/signup"} className="mt-2 text-gray-900 link">Don't have account??</Link>

                    <button className="btn mt-4" type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default SignIn
