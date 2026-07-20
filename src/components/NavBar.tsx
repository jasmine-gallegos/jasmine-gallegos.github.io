import { Link } from "react-router-dom"

interface NavBarProps {
    selectedPage: number;
    onPageChange?: (page: number) => void;
}

function NavBar({ selectedPage, onPageChange }: NavBarProps) {

    const pages = [
        { path: "/reel", label: "Reel", index: 1 },
        { path: "/about", label: "About", index: 2 },
        { path: "/contact", label: "Contact", index: 3 }
    ];


    return (
        <>
            <div className="
            flex 
            flex-wrap
            lg:flex-nowrap
            mb-6
            p-2
            sticky top-0
            bg-white
            ">
                
                <div className="
                w-full 
                flex 
                ">
                    <Link 
                    to={"/"} 
                    onClick={() => onPageChange?.(0)}
                    className="
                    ml-5
                    flex 
                    text-3xl
                    ">
                        <h1 className="m-2">
                            Joy Kwok
                        </h1>
                    </Link>
                </div>
                
                <div className="
                w-full
                flex 
                justify-around items-center
                mt-2 mb-2
                ">

                    {pages.map((page) => (
                        <Link
                        key={page.index}
                        to={page.path}
                        className="navbar-button"
                        onClick={() => onPageChange?.(page.index)}
                        style={{
                            backgroundColor: selectedPage === page.index ? 'black' : 'white',
                            color: selectedPage === page.index ? 'white' : 'black',
                        }}
                        >
                        <h1>{page.label}</h1>
                        </Link>
                    ))}  

                </div>

            </div>
        </>
    )
}

export default NavBar;