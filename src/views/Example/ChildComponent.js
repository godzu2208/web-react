import React from "react";
import './style.scss';

class ChildComponent extends React.Component {
    state = {
        showPositions: false,
    }
    handleShowHidePositions = () => {
        this.setState({
            showPositions: !this.state.showPositions
        })

    }
    handleOnclickDeleteUser = (newuser) => {
        // alert("Delete");
        console.log('>>>> handleOnclickDeleteUser :', newuser)
        this.props.deleteUsers(newuser)
    }
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        /**
         * Phải đặt tên biến trùng với tên key mới có thể sử dụng cú pháp bên dưới 
         */
        // let { name, age, address, users } = this.props;
        let { users } = this.props;
        let { showPositions } = this.state;
        let a = '';
        // console.log(">>> check props :", this.props)
        // Example
        // const user = {
        //     id: '001',
        //     isVerified: true
        // }

        // const { id, isVerified } = user;
        // console.log(">>>>>>", id, isVerified)
        return (

            /**
             * Class Component chỉ return về 1 khối lệnh, ví dụ như 1 thẻ div, <h1>, <h2>, <p>,... hoặc 1 thẻ <div> cha chứa nhiều <div> con.
             * Có thể sử dụng <React.Fragment></React.Fragment> hoặc <> </> cho thay thế cho thẻ <div></div>
             * <React.Fragment></React.Fragment> 
             */


            <>
                {/* <span>Fullname is : {name}</span>
                <span>Age is : {age}</span>
                <span>Address is : {address}</span> */}
                <h2>Positions and Salary in Company</h2>
                {showPositions === false ?
                    <div>
                        <button onClick={() => this.handleShowHidePositions()} className="showhidebtn" >
                            Show
                        </button>
                    </div>
                    : // Conditional 
                    // {/* Khi dùng điều kiện && hoặc hàm return thì các câu lệnh sau nó phải là 1 khối, có bỏ trong <></> hoặc toàn bộ trong 1 thẻ <div> */}

                    <>
                        <div className="job-positions">
                            {
                                a = users.map((item, index) => {
                                    if (item.salary >= 300) {
                                        return (
                                            <div key={item.id}>
                                                {item.position} --- {item.salary} $
                                                <></> <span onClick={() => this.handleOnclickDeleteUser(item)}>X</span>
                                            </div>
                                        )
                                    }
                                    return null;
                                })
                            }
                            {console.log('>>> Check map : ', a)}
                        </div>
                        <div>
                            <button className="showhidebtn" onClick={() => this.handleShowHidePositions()}>
                                Hide
                            </button>
                        </div>
                    </>
                }

            </>
        )
    }
}

export default ChildComponent;