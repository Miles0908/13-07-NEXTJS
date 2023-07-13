import styles from "./DefaultLayout.module.scss"
import Link from "next/link"

const DefaultLayout = ({children})=>{

    return(
        <div className={styles.DefaultLayout}>
            <div className={styles.Navbar}>
                
                <Link href="/about-us">About</Link>
                <Link href="/">Home</Link>
                <Link href="/hotel">Hotel</Link>
            </div>
            {children}
            <div className={styles.footer}>Copyright @ Claudio Ventimiglia <a href="https://www.instagram.com/">🐧</a></div>
        </div>
    )
}

export default DefaultLayout