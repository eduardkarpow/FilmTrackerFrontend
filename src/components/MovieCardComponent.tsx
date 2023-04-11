import React from 'react'
import styles from "./cssModules/MovieCard.module.css"

export default function MovieCardComponent() {
  return (
    <div className={styles.card}>
        <div className={styles.head}>
            <div className={styles.title}>
                <h2>first title</h2>
                <h4>second title</h4>
                <div className={styles.history}><h4>2001</h4><span></span>
                <h4>12+</h4><span></span>
                <h4>2h 58m</h4></div>
            </div>
            <div className={styles.rating}>
                <div>
                    <h4 className={styles.ratings__title}>IMDb RATING</h4>
                    <h2><span>8.8</span><span>/10</span></h2>
                </div>
                <div>
                    <h4 className={styles.ratings__title}>KINOPOISK RATING</h4>
                    <h2><span>6.8</span><span>/10</span></h2>
                </div>
            </div>
        </div>
        <span className={styles.row}></span>
        <div className={styles.main}>
            <div className={styles.images}>
                <img src="//avatars.mds.yandex.net/get-kinopoisk-image/4303601/3340f367-5a35-4ad5-b7da-fce6bf1d5bc2/300x450" alt="" />
            </div>
            <div className={styles.description}>
                <div className={styles.categories}>
                    <div className={styles.category}>Action</div>
                    <div className={styles.category}>Adventure</div>
                    <div className={styles.category}>Drama</div>
                </div>
                <div className={styles.text}>A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.</div>
                <span></span>
                <div className={styles.directors}>Director <a href="#">Peter Jackson</a></div>
                <span></span>
                <div className={styles.writers}>
                    <div>Writers</div>
                    <a href="#">J.R.R. Tolkien</a><a href="#">Fran Walsh</a><a href="#">Philippa Boyens</a>
                </div>
                <button className={styles.watchListButton}>Add to Watchlist</button>
            </div>
        </div>
        
        
    </div>
  )
}
