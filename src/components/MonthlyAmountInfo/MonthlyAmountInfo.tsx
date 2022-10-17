import React, { Component } from "react";
import './css/MonthlyAmount.scss';

interface AmountType {
  amount: number;
  month: string;
  year: number;
  countMonth: number;
}

export default class MonthlyAmountInfo extends Component<AmountType> {
  constructor(props: AmountType) {
    super(props);
  }
  render() {
    return (
      <div className="amountInfo">
        <div className="monthlyAmountInfo">
            <div className="monthlyAmount" >
                <p className="monthlyText">Monthly amount</p>
                <p className="monthlyNumber">$ {(this.props.countMonth == 0) ? this.props.amount :((this.props.amount)/(this.props.countMonth)).toLocaleString()} </p>
            </div>
            <div>
            <p className="conclusion">
                You're planning <span className="stronger">{this.props.countMonth} monthly deposits </span>{" "}
                to reach your <span className="stronger">${this.props.amount} </span>goal by {" "}
                <span className="stronger monthStrngr">
                {this.props.month} <span> {this.props.year}</span>
                </span>
                
            </p>
            </div>
        </div>
      </div>
    );
  }
}
