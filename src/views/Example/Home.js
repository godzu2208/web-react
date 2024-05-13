import React from "react";
import { withRouter } from "react-router";
import ColorComponent
 from "../HOC/ColorComponent";
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            // this.props.history.push('/todo')     
        }, 3000);
    }
    render() {
        return (
            <>

                <div className="homepage">
                    HOME PAGE ABC
                </div>
            </>
        )
    }
}

// export default withRouter(Home);
export default ColorComponent(Home);