import { Component } from "react";
import "./LotteryBall.css"

class LotteryBall extends Component {
    render() {
        return(
            <div className="ball_container">
                <span className="ball_number">{this.props.num}</span>
            </div>
        );
    }
}

export default LotteryBall;