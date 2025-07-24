import Menu from "./Menu"
import Logo from "./Logo"

export default function Header() {
  

  return (
    <header className="
        backdrop-blur-md shadow-sm fixed
        text-secondaryDark dark:text-white 
         w-full top-0 py-2 z-50
        border-b dark:border-white/15 border-secondaryDark/15
        transition 
        dark:bg-white/15 bg-secondaryDark/15
            
     ">
      <div className="container mx-auto px-4 py-2 flex justify-between  items-start">
        <Logo />
        <Menu/>
      </div>
    </header>
  )
}

