import bg from "/pictures/bg.jpg"
import styles from "./Header.module.css"
import yellowLine from "/pictures/yellowLine.png"
import frame_dot from "/pictures/frame_dot.png"

import React, {useState} from 'react';

function Header () {
    const [hover, setHover] = useState(false)
    return(
        <>
        <div className={styles.boxStyle3}>
            <img src={bg} alt="bg" className={styles.sizeofbg} />
            <div className={styles.boxStyle4}>
                <div className={styles.logoStyle1}><a href=""className={styles.logoStyle2}>Inte<span className={styles.tStyle1}>rio.</span></a></div>
                    <div className={styles.boxStyle1}>
                        <ul className={styles.ulStyle1}>
                            <li><a href="" className={styles.liStyle1}>Furniture</a></li>
                            <li><a href="" className={styles.liStyle1}>Interior Design</a></li>
                            <li><a href="" className={styles.liStyle1}>Property</a></li>
                            <li><a href="" className={styles.liStyle1}>Categories</a></li>
                        </ul>
                    </div>
                <div className={styles.hStyle1}>Discover The Best<br/>Furniture for You!</div>
                <div className={styles.lineStyle1}><img src={yellowLine} alt="line"/></div>

                <div className={styles.boxStyle2}>
                    <button
                    className={styles.buttonStyle1}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        backgroundColor: hover ? "#1e6b0eff" : "#F6B50E",
                        width: '223px',
                        transition: 'background-color 0.5s',
                        fontFamily: "Poppins"
                    }}
                    >
                        {hover ? "Let's go!" : "Explore All Product"}
                        </button>
                </div>
                <div>
                    <a href=""><img src={frame_dot} alt=""  className={styles.dot1}/></a>
                    <a href=""><img src={frame_dot} alt=""  className={styles.dot2} /></a>
                    <a href=""><img src={frame_dot} alt=""  className={styles.dot3} /></a>
                    <a href=""><img src={frame_dot} alt=""  className={styles.dot4} /></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header

