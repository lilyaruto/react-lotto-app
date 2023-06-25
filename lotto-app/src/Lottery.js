import { Component } from "react";
import LotteryBall from "./LotteryBall";
import "./Lottery.css"

class Lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        numBalls: 6, 
        maxNum: 40
    }

    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({length: this.props.numBalls})
        };
        this.generate = this.generate.bind(this);
    }

    generate() {
        this.setState(currentState => ({
            nums: currentState.nums.map(
                num => Math.floor(Math.random() * (this.props.maxNum - 1) + 1)
            )
        }));
    }

    render() {
        return(
            <div className="lottery_container">
                <h2 className="lottery_name">{this.props.title}</h2>
                <div className="balls_container">
                    {this.state.nums.map(ball => <LotteryBall num={ball}/>)}
                </div>
                <button onClick={this.generate} className="generete_button">Generate</button>
            </div>
        );
    }
}

export default Lottery;