import Link from 'next/link'

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
                <h1 className="judul">DaFeX</h1>
            </div>
            <div className="links">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ninjas"><a>Ninja List</a></Link>
            </div>
        </nav>
    );
}
export default Navbar;