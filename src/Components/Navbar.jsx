import React from 'react'
import Image from 'next/image';
const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <Image src="/Logo.jpg" alt="Logo" width={24} height={24} />
                    <span>Meta</span>
                    <span className="beta">Beta v0.3.0</span>
                </div>
                <div className="navbar-links">
                    <a href="#">Product</a>
                    <a href="#">Pricing</a>
                    <a href="#">Updates</a>
                    <a href="#">Help</a>
                    <a href="#" className="download-btn">Download App</a>
                </div>
                <Image src="/Logo.jpg" alt="GitHub" width={24} height={24} className="github-icon" />
            </nav>

        </div>
    )
}

export default NavBar