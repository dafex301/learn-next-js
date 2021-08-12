import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useState } from "react";


const NotFound = () => {
    const [counter, setCounter] = useState(8);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 8000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setCounter(counter-1);
        }, 1000)
    }, [counter])



    return (  
        <div className="container">
            <h1 className="title">I think you are lost lmao</h1>
            <h2 className="sub-title">You can comeback to <Link  href="/"><a>Homepage</a></Link></h2>
            {(counter<=5) && <p className="text-center">Redirecting you to homepage in {counter}</p>}
        </div>
    );
}
export default NotFound;