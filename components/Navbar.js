import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image src="/logo.png" width="116,46" height="70,4" alt="logo"></Image>
                </Link>
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