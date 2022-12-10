import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Unicorn rentals</title>
                <meta name="description" content="Unicorn Rentals" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to Unicorn rentals</h1>
                <Image src="/unicorn-rentals.svg" alt="Unicorn Rental Logo" width={250} height={250} />

                <div className={styles.container}>
                    <p className={styles.description}>We are the largest provider of mythical creatures in the world! </p>
                    <p className={styles.description}>Fulfilling the needs of parents who have caved to their childrens' demands for temporary use of a unicorn.</p>
                </div>

                <div className={styles.grid}>
                    <a href="https://twitter.com/awsreinvent/status/1201984111415443456" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <h2>Rainbow Day &rarr;</h2>
                        <p>
                            Danny, "CEO" of Unicorn Rentals, introduces Rainbow Day 🌈 where there will be a huge spike in Unicorn 🦄 demand, with a huge opportunity to make Danny
                            rich 💰.
                        </p>
                    </a>

                    <a href="https://d1.awsstatic.com/events/reinvent/2019/Migration_GameDay_GPSTEC407.pdf" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <h2>The Great Migration &rarr;</h2>
                        <p>Learn how we outsourced our entire cloud migration to 1000's of developer. For Free 💸!</p>
                    </a>

                    <a href="https://www.amazon.co.uk/Unicorn-Merchandise/s?k=Unicorn+Merchandise" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <h2>Unicorn Swag &rarr;</h2>
                        <p>Get your hands on the latest in Unicorn Fashion.</p>
                    </a>

                    <a href="https://aws-experience.com/emea/munich/e/cd512/aws-security-game-day-virtual" target="_blank" rel="noopener noreferrer" className={styles.card}>
                        <h2>We have been hacked! &rarr;</h2>
                        <p>Help! Join our crack team of security experts in Frankfurt and save the business before the holiday season is over.</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>Powered by</p>
                <span className={styles.logo}>
                    <Image src="/amazon-web-services-logo.svg" alt="AWS Logo" width={72} height={18} />
                </span>
            </footer>
        </div>
    )
}
