import {person} from "./index";

interface Props {
    "person": {
        "name": string,
        "email": string,
        "address": {
            "city": string,
        },
        "website": string,
    }
};

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map((person: person) => {
        return {
            params: { id: person.id.toString() }
        }
    })
    return {
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: any ) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return {
        props: { person: data }
    }
}



const Details = ({person} :Props ) => {
    return(
        <div>
            <h1>{ person.name }</h1>
            <p>{ person.email}</p>
            <p>{ person.website}</p>
            <p>{ person.address.city}</p>
        </div>
    )
}

export default Details;