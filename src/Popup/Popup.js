import React, {useState, useEffect} from 'react';
import './Popup.css'
import Logo from '../Assets/Images/Logo.png'

function Popup() {
    const [state, setState] = useState({
        isOpen: true,
        closeAll:true
    })
    const handleClose = () => {
        setState({
            isOpen: false
        })
    }
   
    useEffect(() => {
        const timer = setInterval(() => setState({
            isOpen: true
        })
           
        , 7000)
    })
    return (
        <div>
            {state.isOpen ? <div className="pop-up-wrapper" onClick={handleClose}>
                {state. isOpen ?<div className="wrapper-content">
                    <div className="close" onClick={handleClose}>x</div>
                    <h2>Welcome to Foodie town</h2>
                    <p>Buy your foodstuffs 50% off</p>
                    <span>For more information <a href="#">Click Me</a></span>
                    </div>: ''}
                </div>: ''}
                <div className="content">
                   <span><h1 className="page-header">Foodie Town Market</h1><img src={Logo} /></span>
                   <div>
                        <button>Click</button>
                   </div>
                   
                </div>
                </div>
                
    )
}

export default Popup;
