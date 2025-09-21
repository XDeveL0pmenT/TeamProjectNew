import React from "react";
import styles from "./main.module.css";

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.seredyna}>
                <div className={styles.kategoriyi}>
                    <div className={styles.zagolovokblok}>
                        <h2 className="zagolovok">Shop Popular Categories</h2>
                    </div>
                    <div className={styles.kartky_kategoriy}>
                        <div className={styles.kartka}>
                            <img src="https://i.postimg.cc/W4Cfz8ZC/687e1a55d397ab38c653106b875a71468e309624.png" alt="Chair" />
                            <h3>Chair</h3>
                        </div>

                        <div className={styles.kartka}>
                            <img src="https://i.postimg.cc/JhsVvrd2/fa275f7bf1709094077ce5fdcc2647db1f781b1a.png" alt="Cabinet" />
                            <h3>Cabinet</h3>
                        </div>

                        <div className={styles.kartka}>
                            <img src="https://i.postimg.cc/sxVnFKgg/e322eb7c6d0590c662c0329a7cfa538500fa465c.png" alt="Table" />
                            <h3>Table</h3>
                        </div>

                        <div className={styles.kartka}>
                            <img src="https://i.postimg.cc/bvpS95Cr/bb316defc39e66631db0f1a8ce2a6b35f8cdc0a8.png" alt="Lamp" />
                            <h3>Lamp</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.lizhko_blok}>
                    <img src="https://i.postimg.cc/qBzQ9m0g/7d52a8e01931357931d0534d512bcb1f86ed5bc2.png" alt="Bad" className={styles.lizhko_img} />
                    <div className={styles.lizhko_text}>
                        <h2>Simple Bed for Your Weekend</h2>
                        <p>
                            Enjoy your weekends with your families using our lastest Simple Bed set!
                        </p>
                        <button className={styles.knopka}>Explore All Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;