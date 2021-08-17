import React from "react"
import * as style from "../../styles/home.module.css"

function Banner() {
  return (
    <div className={style.heroImage} id="home">
      <img src="" alt="" />
      <div className={style.heroText}>
        <h1 style={{ fontSize: "50px" }}>I am John Doe</h1>
        <p>And I'm a Photographer</p>
        <button>Hire me</button>
      </div>
    </div>
  )
}

export default Banner
