import React from "react";
// import { withRouter } from "react-router";
import ColorComponent from "../HOC/ColorComponent";
import logoReact from "../../image/react-academy.svg"
import { connect } from "react-redux";

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            // this.props.history.push('/todo')     
        }, 3000);
    }
    handleClickDeleteUser = (user) => {
        // alert('Delete user');
        // console.log('Delete user :', user)
        this.props.deleteUserRedux(user);
    }
    handleClickAddUser = () => {
        this.props.addRandomUserRedux();
    }
    render() {
        console.log(">>> check props :", this.props);
        let listUsers = this.props.dataRedux;
        return (
            <>

                <div className="homepage">
                    <h2> HOME PAGE ABC</h2>
                    <div>
                        <img height={"80px"} width={"80px"} src={logoReact} alt="logo" />
                    </div>
                    <button onClick={() => this.handleClickAddUser()} className="add-user-btn">Add Random User</button>
                    <div className="list-user">
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <>
                                        <div className="list-user-child" key={item.id}>
                                            {index + 1} - {item.name} - {item.email}
                                            <div className="btn-delete">
                                                <button onClick={() => this.handleClickDeleteUser(item)}>Delete</button>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatch plain actions 
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addRandomUserRedux: () => dispatch({ type: 'ADD_USER' }),
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(ColorComponent(Home));