const Navbar = () => {
  return (
    <header className='bg-base-300 flex items-center justify-between border-b'>
        <div className='p-6 text-6xl font-extrabold tracking-widest text-primary'>
            BIKEBRO
        </div>
        <div>
            <span className='m-3 btn btn-primary'>Log-in</span>
            <span className='m-3 btn btn-primary'>sign-up</span>
        </div>
    </header>
  )
}

export default Navbar