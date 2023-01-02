import Head from "next/head";
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>People list | Home</title>
                <meta name="keywords" content="people list"/>
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
                    cupiditate esse labore
                    laboriosam
                    molestiae nihil nisi nobis nulla reiciendis sunt! Ab blanditiis eius laboriosam laudantium officia
                    reprehenderit sed veritatis voluptates.</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis
                    eveniet ex facere ipsum
                    iusto
                    laboriosam laudantium maxime, neque obcaecati officiis perferendis provident quae quasi quia,
                    reiciendis
                    tempore voluptate.</p>
                <Link href="/people" className={styles.btn}>See People Listing</Link>
            </div>
        </>
    )
}
