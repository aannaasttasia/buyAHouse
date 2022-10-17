import React, {Component} from 'react';
import './css/Card.scss'
import IconTitle from '../IconTitle/IconTitle.tsx';
import Amount from '../Amount/Amount.tsx';
import Button from '../Button/Button.tsx';

export default class Card extends Component{
    render(){
        return(
            <div className='container'>
                <div className='card'>
                    <>
                    <IconTitle/>
                    <Amount />
                    <Button/>
                    </>
                </div>
            </div>
        )
    }
}
