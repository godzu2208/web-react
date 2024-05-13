import React from "react";
import '../App.scss';
import ChildComponent from "./ChildComponent.js";
import FormComponent from "./FormComponent.js";
/**
 * React component : class component and functions component(function a arrow function)
 * JSX : it is a syntax extension to JavaScript return a code HTML 
 * */
class MyComponent extends React.Component {
    // key : value
    /**
     * state in ReactJs
     */
    state = {
        users: [
            { id: 'IT001', position: 'Manager', salary: '2000' },
            { id: 'IT002', position: 'Tester', salary: '300' },
            { id: 'IT003', position: 'Front-end', salary: '900' },
            { id: 'IT004', position: 'Back-end', salary: '500' },
            { id: 'IT005', position: 'BA', salary: '4000' },
            { id: 'AC001', position: 'Accouting', salary: '1000' },
            { id: 'HR002', position: 'HR', salary: '300' },
            { id: 'SC001', position: 'Security', salary: '200' },
            { id: 'MK002', position: 'Makerting', salary: '1200' },
            { id: 'CT001', position: 'Content', salary: '800' },
        ],
    }

    addNewUser = (newuser) => {
        // console.log("check new user :", newuser)
        let currentUser = this.state.users;
        currentUser.push(newuser);
        this.setState({
            // users: [...this.state.users, newuser]
            users: currentUser
        })
    }
    showNewUser = () => {
        console.log(this.state.users)
    }

    deleteUsers = (newuser) => {
        let currentUser = this.state.users;
        currentUser = currentUser.filter(user => user.id !== newuser.id)
        this.setState({
            users: currentUser
        });
    }
    componentDidUpdate = (preProps, prevState) => {
        // console.log('>>> run did Update: ', 'preState: ', prevState, 'currentState: ', this.state)
    };

    componentDidMount() {
        // console.log('>>> run component Did Mount');
    };
    render() {
        // console.log('>>> call render', this.state);
        // console.log('>>> checked props: ', this.props)
        return (

            /**
             * Class Component chỉ return về 1 khối lệnh, ví dụ như 1 thẻ div, <h1>, <h2>, <p>,... hoặc 1 thẻ <div> cha chứa nhiều <div> con.
             * Có thể sử dụng <React.Fragment></React.Fragment> hoặc <> </> cho thay thế cho thẻ <div></div>
             * <React.Fragment></React.Fragment> 
             */

            <>

                <FormComponent
                    addNewUser={this.addNewUser}
                    showNewUser={this.showNewUser()}
                />
                <ChildComponent
                    users={this.state.users}
                    deleteUsers={this.deleteUsers}
                />

            </>
        )
    }
}

export default MyComponent;