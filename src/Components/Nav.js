import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false)
    const history = useHistory()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                handleShow(true)
            } else handleShow(false)
        })
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                onClick={() => history.push("/")}
                className='nav__logo'
                src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol-500x157.jpg"
                alt="Netflix Logo" />

            <img
                onClick={() => history.push('/profile')}
                className='nav__avatar'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tBKNakmXzPe6qvuFChy4GjzHHo_Us5SbObkuJh-RoA&s"
                alt="Netflix avatar" />
        </div>
    )
}

export default Nav