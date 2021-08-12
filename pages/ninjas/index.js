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
                    <div key={ninja.id} className={styles.card}>
                        <h2 className={styles.cardname}>{ninja.name}</h2>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Ninjas;