import React from 'react'

export default function Header({ cartClicked, setCartClicked}) {

  function handleClick(){
    setCartClicked(!cartClicked)
  }

  return (
    <header>
        <h1>
            Plantsy
            <span className="logo" role="img">
            🌱
            </span>
            <span className="cart" role="img"> 
            🛒 {' '}
            <button onClick={handleClick}>{cartClicked ? "Go Back to Shop" : "Go to Cart"}</button>
            </span>
        </h1>
  </header>
  )
}
