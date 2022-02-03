import React from 'react'
import Img from './images/main-body.png'
import './main-body.css'

const Imgage = ()=>{
    return(
        <div className="main-image">
            <div className="left"><img  src={Img} alt="main body" /></div>
            
            <div className="right">
                <div className="about">
                <h1>Welcome to Our Shop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt, minima doloremque consequuntur voluptatem a nostrum ab
                    harum commodi fugiat neque dicta eos, est dignissimos deserunt
                    cupiditate facilis itaque reiciendis. Iure quae ullam nihil 
                    necessitatibus, atque maiores quo optio officiis? Vero iusto 
                    quisquam at odit exercitationem voluptas, odio voluptate 
                    cupiditate! Nihil?
                </p>
                </div>
            </div>
        </div>
        
    )
}

export default Imgage