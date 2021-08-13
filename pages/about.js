import Head from "next/head";

const About = () => {
    return (  
        <>
            <Head>
            <meta name="ninjalist" content="About" />
            <title>Ninja List | About</title>
            </Head>
            <div className="container">
                <h1 className="title">About</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique animi minima neque repudiandae harum iure suscipit. Placeat odit nobis ipsam neque numquam exercitationem, reprehenderit odio praesentium facere, soluta ipsum suscipit!</p>
            </div>
        </>
    );
}
 
export default About;