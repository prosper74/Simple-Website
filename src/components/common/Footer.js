import React from "react"
import * as style from "../../styles/footer.module.css"

function Footer() {
  const n = 128

  return (
    <div className={style.main}>
      <div className={style.footer}>
        <div className={style.bubbles}>
          {[...Array(n)].map((d, i) => (
            <div
              className={style.bubble}
              key={i}
              style={{
                size: `${2 + Math.random() * 4}rem`,
                left: `${-10 + Math.random() * 200}rem`,
								transform: `translate(${-5 + Math.random() * 200}%, 100%)`,
                animationDuration: `${2 + Math.random() * 2}s`,
                animationDelay: `${-1 * (2 + Math.random() * 2)}s`,
              }}
            ></div>
          ))}
        </div>

        <div className={style.content}>
          <div>
            <div>
              <b>Menu</b>
              <a href="#home">Home</a>
              <a href="#profile">Profile</a>
              <a href="#projects">Projects</a>
              <a href="/blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <b>Spotha</b>
              <a href="#">Miskasa</a>
              <a href="#">Agithe</a>
              <a href="#">Scesha</a>
              <a href="#">Lulle</a>
            </div>
            <div>
              <b>Chashakib</b>
              <a href="#">Chogauw</a>
              <a href="#">Phachuled</a>
              <a href="#">Tiebeft</a>
              <a href="#">Ocid</a>
              <a href="#">Izom</a>
              <a href="#">Ort</a>
            </div>
            <div>
              <b>Athod</b>
              <a href="#">Pamuz</a>
              <a href="#">Vapert</a>
              <a href="#">Neesk</a>
              <a href="#">Omemanen</a>
            </div>
          </div>
          <div>
            <a
              className={style.image}
              href="https://codepen.io/z-"
              target="_blank"
              style={{
                backgroundImage: `url(https://avatars.githubusercontent.com/u/67523206?v=4)`,
              }}
            ></a>
            <p>©2019 Not Really</p>
          </div>
        </div>
      </div>
      <svg style={{position:'fixed', top:'100vh'}}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="blob"
              operator="atop"
            ></feComposite>
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default Footer
