import React from "react";
import './style.scss';

class FormComponent extends React.Component {
    // key : value
    /**
     * staete in ReactJs
     */
    state = {
        id: '',
        position: '',
        salary: ''
    }
    // define arrow function and test Dom events
    clickedBtn = () => {
        alert('You will be redirected to the Youtube page');
    };
    handlePositionInputChange = function (event) {
        // console.log(event.target);
        //  hàm setState() cập nhật lại state ngay lập tức, chỉ giá trị nòa được target mới được cập nhật lại, còn lại thì giữ nguyên 
        this.setState({
            /***không sử dụng 
            this.state.name = event.target.value
             */
            position: event.target.value
        });
    }
    handleSalaryInputChange = function (event) {
        this.setState(
            { salary: event.target.value }
        );
    }
    handleidInputChange = function (event) {
        this.setState({
            id: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.id || !this.state.position || !this.state.salary) {
            alert("Please enter value");
            return;
        }
        console.log('>>> check state: ', this.state);
        this.props.addNewUser({
            id: this.state.id,
            position: this.state.position,
            salary: this.state.salary,
        });

        this.setState({
            id: '',
            position: '',
            salary: '',
        });
        // console.log(users)

    };


    render() {
        return (
            <>
                <div className="form">
                    <div div className="id-input" >
                        <label htmlFor="id">ID : </label><br />
                        <input
                            type="text"
                            value={this.state.id}
                            onChange={(event) => this.handleidInputChange(event)}
                        /><br />
                    </div >
                    <div className="position-input">
                        <label htmlFor="position">Position Job :</label><br />
                        <input
                            type="text"
                            value={this.state.position}
                            onChange={(event) => this.handlePositionInputChange(event)}
                        /><br />
                    </div>
                    <div div className="salaryName-input" >
                        <label htmlFor="salaryName">Salary: </label><br />
                        <input
                            type="text"
                            value={this.state.salary}
                            onChange={(event) => this.handleSalaryInputChange(event)}
                        /><br />
                    </div >
                    < div className="btnClick" >
                        <button button onClick={(event) => this.handleSubmit(event)
                        } className="btn" >Submit</button>
                    </div >
                </div>
            </>
        )
    }
}

export default FormComponent;