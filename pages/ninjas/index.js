import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {ninjas: data}
    };
};

const Ninjas = ({ninjas}) => {
    return (  
        <>
            <Head>
            <title>Ninja List | Page</title>
            <meta name="Ninja List" content="Homepage" />
            </Head>
            <div className="container">
                <h1 className="title">Ninjas Page</h1>
                {ninjas.map((ninja) => (
                    // eslint-disable-next-line @next/next/link-passhref
                    <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                        <div className={styles.card}>
                            <h2 className={styles.cardname}>{ninja.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Ninjas;