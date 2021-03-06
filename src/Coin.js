import React from "react"


const Coin = (props) => {
    return (
        <React.Fragment>
            <h4>{props.coin.ticker}</h4>
            <h4>{props.coin.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h4>
            <img src={props.coin.image} width="100" />
        </React.Fragment>

    )
}

export default Coin