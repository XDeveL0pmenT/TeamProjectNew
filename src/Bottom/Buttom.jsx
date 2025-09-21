import { useState } from "react"
import styles from "./Buttom.module.css"

function Buttom() {
    const [hover, setHover] = useState(false)

    return(
        <div className={styles.Buttom}>
            <div className={styles.ImageFrame}>
                <h1 className={styles.imgText}>Get Discount up to 50% off Today!</h1>
                <button className={styles.button}
                onMouseEnter={() => {setHover(true)}}
                onMouseLeave={() => {setHover(false)}} 
                style={{
                    zIndex: "2",
                    alignSelf: "center",
                    position: "absolute",
                    width: "200px",
                    height: "60px",
                    left: "250px",
                    top: "300px",
                    backgroundColor: hover ? "rgb(255, 200, 0)" : "rgba(183, 143, 0, 1)"
                
                }}
                >Explore All Products</button>
                <img src="https://i.postimg.cc/tsbxysWq/Rectangle-3.png" className={styles.image}>
                </img>
            </div>
            <div
            className={styles.frame}
            >
                <div className={styles.block}>
                    <h2>Company</h2>
                    <h4 style={{color: "rgba(236, 236, 236, 1)" }}>About us</h4>
                    <h4 style={{color: "rgba(236, 236, 236, 1)" }}>Blog</h4>
                    <h4 style={{color: "rgba(236, 236, 236, 1)" }}>Coreers</h4>
                    <h4 style={{color: "rgba(236, 236, 236, 1)" }}>Contact Us</h4>
                </div>
                <div className={styles.block}>
                    <h2>Support</h2>
                    <h4 style={{color: "rgba(236, 236, 236, 1)" }}>Help Center</h4>
                    <h4 style={{color: "rgba(236, 236, 236, 1)" }}>Safety Center</h4>
                    <h4 style={{color: "rgba(236, 236, 236, 1)" }}>Community Guidelines</h4>
                </div>
                <div className={styles.block}>
                    <h2>Legal</h2>
                    <h4 style={{color: "rgba(236, 236, 236, 1)" }}>Cookies Policy</h4>
                    <h4 style={{color: "rgba(236, 236, 236, 1)" }}>Privacy Policy</h4>
                    <h4 style={{color: "rgba(236, 236, 236, 1)" }}>Terms of Service</h4>
                    <h4 style={{color: "rgba(236, 236, 236, 1)" }}>Law Enforcement</h4>
                </div>
                <div className={styles.block}>
                    <h2>Install app</h2>
                    <button onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.boulla.home_shopping&hl=en_IE"} className={styles.appButton}>
                        <img className={styles.insideImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"></img>
                    </button>
                    <button onClick={() => window.location.href = "https://apps.apple.com/ie/app/home-furniture-shopping-store/id1670033478"} className={styles.appButton}>
                        <img className={styles.insideImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Buttom