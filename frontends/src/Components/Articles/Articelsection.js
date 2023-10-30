import React from 'react'
import './Articelsection.css'

const Articelsection = () => {
  return (
    <div>
        <div className="articel-section">
            <div className="articel-headin">
                <h1 className="articel-title">Read top articles from health experts</h1>
                <p className="articel-para">Health articles that keep you informed about good health practices and achieve your goals</p>
                <button className="articel-btn">See all Articles</button>
            </div>
            <div className="articel-cart">
                <div className="article-cart">
                    <img src="" alt="" className="articel-cart-img" />
                    <h2 className="cart-heading"></h2>
                    <p className="cart-para"></p>
                    <p className="dr-name"></p>
                </div>
                <div className="article-cart">
                    <img src="" alt="" className="articel-cart-img" />
                    <h2 className="cart-heading"></h2>
                    <p className="cart-para"></p>
                    <p className="dr-name"></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articelsection