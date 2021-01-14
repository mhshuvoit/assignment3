import React from 'react'
import AuthorImg from '../assets/images/author-image.jpg'

function Sidebar() {
    return (
        <div class="responsive-nav">
            <i class="fa fa-bars" id="menu-toggle"></i>
            <div id="menu" class="menu">
                <i class="fa fa-times" id="menu-close"></i>
                <div class="container">
                    <div class="image">
                        <a href="#"><img src={AuthorImg} alt="" /></a>
                    </div>
                    <div class="author-content">
                        <h4>Reflux Me</h4>
                        <span>Web Designer</span>
                    </div>
                    <nav class="main-nav" role="navigation">
                        <ul class="main-menu">
                            <li><a href="#section1">About Me</a></li>
                            <li><a href="#section2">What I’m good at</a></li>
                            <li><a href="#section3">My Work</a></li>
                            <li><a href="#section4">Contact Me</a></li>
                        </ul>
                    </nav>
                    <div class="social-network">
                        <ul class="soial-icons">
                            <li>
                                <a href="https://fb.com/templatemo"
                                ><i class="fa fa-facebook"></i
                                ></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-dribbble"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-rss"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="copyright-text">
                        <p>Copyright 2021 Reflux Design</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
