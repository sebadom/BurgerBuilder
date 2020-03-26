import React, { Component } from 'react'

interface Props {

}
interface State {

}

export default class BurgerBuilder extends Component<Props, State> {
    state = {}

    render() {
        return (
            <React.Fragment>
                <div>
                    THIS IS THE BURGER
                </div>
                <div>
                    CONTROLS
                </div>
            </React.Fragment>
        )
    }
}
