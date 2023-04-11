import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./cssModules/WatchList.module.css"

export default function WatchListComponent() {
  return (
    <div className={styles.watchlist}>
        <Link to = "/movieCard" className={styles.element}>
            <div className={styles.image}>
                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/3340f367-5a35-4ad5-b7da-fce6bf1d5bc2/300x450" alt="" />
            </div>
            <div className={styles.description}>Duna</div>
        </Link>
        <a href = "#" className={styles.element}>
            <div className={styles.image}>
                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/3340f367-5a35-4ad5-b7da-fce6bf1d5bc2/300x450" alt="" />
            </div>
            <div className={styles.description}>Duna</div>
        </a>
        <a href = "#" className={styles.element}>
            <div className={styles.image}>
                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/3340f367-5a35-4ad5-b7da-fce6bf1d5bc2/300x450" alt="" />
            </div>
            <div className={styles.description}>Duna</div>
        </a>
        <a href = "#" className={styles.element}>
            <div className={styles.image}>
                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/3340f367-5a35-4ad5-b7da-fce6bf1d5bc2/300x450" alt="" />
            </div>
            <div className={styles.description}>Duna</div>
        </a>
        <a href = "#" className={styles.element}>
            <div className={styles.image}>
                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/3340f367-5a35-4ad5-b7da-fce6bf1d5bc2/300x450" alt="" />
            </div>
            <div className={styles.description}>Duna</div>
        </a>
        <a href = "#" className={styles.element}>
            <div className={styles.image}>
                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/3340f367-5a35-4ad5-b7da-fce6bf1d5bc2/300x450" alt="" />
            </div>
            <div className={styles.description}>Duna</div>
        </a>
        <a href = "#" className={styles.element}>
            <div className={styles.image}>
                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/3340f367-5a35-4ad5-b7da-fce6bf1d5bc2/300x450" alt="" />
            </div>
            <div className={styles.description}>Duna</div>
        </a>
    </div>
  )
}
