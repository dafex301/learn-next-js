export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}



const Details = ({ ninja }) => {
    return (  
        <div className="details">
            <h2 className="title">Detail Page</h2>
            <div className="ninja-card">
                <div className="ninja-name-container">
                    <h2 className="ninja-username">{ ninja.username }</h2>
                    <h3 className="ninja-name">{ ninja.name }</h3>
                </div>
                <div className="ninja-desc-container">
                    <p className="ninja-desc">E-mail: { ninja.email }</p>
                    <p className="ninja-desc">Website: { ninja.website }</p>
                    <p className="ninja-desc">City: { ninja.address.city }</p>
                </div>
            </div>
        </div>
    );
}

export default Details;