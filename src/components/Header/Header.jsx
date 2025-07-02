import Menu from "./Menu"
import Logo from "./Logo"

export default function Header() {
  

  return (
    <header className="bg-transparent text-secondaryDark dark:text-white absolute w-full top-4 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <Menu/>
      </div>
    </header>
  )
}
