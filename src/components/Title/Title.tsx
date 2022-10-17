import React, { Component } from 'react';
import './css/Title.scss';

export default class Title extends Component{
    render(){
        return(
            <div className='title'>
                <span>Let's plan your </span>
                <span className='stronger'>saving goal</span>
            </div>
        )
    }
}