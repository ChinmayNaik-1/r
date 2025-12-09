import { Link } from "react-router";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token")
  }
  return (
    <header className='bg-base-300 flex items-center justify-between border-b'>
        <div className='p-6 text-6xl font-extrabold tracking-widest text-primary'>
            BIKEBRO
        </div>
        <div>
            <Link to="/users/login" className='m-3 btn btn-primary'>Log-in</Link>
            <Link to="/users/signup" className='m-3 btn btn-primary'>sign-up</Link>
            <button onClick={logout} className="m-3 btn bg-red-500 p-2">Log-out</button>
        </div>
    </header>
  )
}

export default Navbar