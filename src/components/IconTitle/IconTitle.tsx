import React, {Component} from 'react';
import './css/IconTitle.scss'

export default class IconTitle extends Component{
    render(){
        return(
            <div className='iconTitle'>
                <div className='img-wrapper'>               
                     <img className="photo" src={require("../house.png")} alt={"house"}/>
                </div>
                <span className='houseTitle'>
                        <span className='buyHouse'>Buy a house </span>
                        <span className='savingGoal'>Saving goal</span>
                </span>
            </div>
        )
    }
}