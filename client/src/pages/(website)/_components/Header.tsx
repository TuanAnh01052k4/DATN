
import Logo from "./Logo"
import QuicklySearch from "./QuicklySearch"
import MiniCart from "./MiniCart"
import NavbarBottom from "./NavbarBottom"
import ActionsSupportUser from "./ActionsSupportUser"
import MenuHeader from "./MenuHeader"

const Header = () => {
 

    return (
        <header className=" h-16 lg:h-20">
            <div className="fixed top-0 left-0 w-full py-5 z-50 bg-white h-16 lg:h-20 lg:py-0">
                <div className="container relative h-full">
                    <nav className="flex items-center justify-between w-full h-full lg:border-b lg:border-gray-200">
                      <MenuHeader />
                        <Logo />
                        <div className="flex items-center">
                            <QuicklySearch />
                            <div className="flex items-center gap-3">
                                <ActionsSupportUser />
                                <MiniCart />
                            </div>
                        </div>
                        {/* navbar-bottom  */}
                        <NavbarBottom />
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header