import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handleBackClick = () => {
        this.props.history.push(`/user`)
    }
    render() {
        let { user } = this.state;
        let isEmptyUser = Object.keys(user).length === 0;

        return (
            <>
                <div className="detail-user-container">
                    <h2> Detail User with ID : {this.props.match.params.id}</h2>
                    {isEmptyUser === false &&
                        <>
                            <div>
                                User's Name : {user.first_name} {user.last_name}
                            </div>
                            <div>
                                User's Email : {user.email}
                            </div>
                            <div>
                                User's Avatar : <img src={user.avatar} alt="" />
                            </div>
                        </>
                    }
                    <div>
                        <button className="btn-back"
                            type="button"
                            onClick={() => this.handleBackClick()}
                        >
                            Back
                        </button>
                    </div>
                </div>

            </>
        )
    }
}
export default withRouter(DetailUser);