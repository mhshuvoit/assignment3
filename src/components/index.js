import React from 'react'
import Sidebar from './Sidebar'
import About from './About'
import WhyGood from './WhyGood'
import MyWork from './MyWork'
import Contact from './Contact'

function Index() {
    return (
        <div id="page-wraper">
            <Sidebar />
            <About />
            <WhyGood />
            <MyWork />
            <Contact />
        </div>
    )
}

export default Index
