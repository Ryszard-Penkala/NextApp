import styles from "../../styles/People.module.css"
import Link from "next/link";

export type person = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

type Props = {
    people:   person[],
}

export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    return {
        props: { people: data}
    }
}

const People = ( {people} :Props) => {
    return(
        <div>
            <h1>All people </h1>
            {people.map(person => (
                <Link href={`/people/${person.id}`} key={person.id}>
                    <div className={styles.single}>
                        <h3>{person.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default People