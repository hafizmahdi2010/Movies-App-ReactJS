
const Navbar = () => {
  return (
    <>
      <div className="nav flex items-center justify-between px-[100px] h-[80px] bg-[#212121] text-white">
        <h3 className="text-[23px]">MoviesX</h3>

        <div className="flex items-center gap-[20px]">
          <a className=" transition-all hover:text-green-500" href="#home">Home</a>
          <a className=" transition-all hover:text-green-500" href="#movies">Movies</a>
          <a className=" transition-all hover:text-green-500" href="#tvshows">TV Shows</a>
          <a className=" transition-all hover:text-green-500" href="#about">About</a>
          <a className=" transition-all hover:text-green-500" href="#contact">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar