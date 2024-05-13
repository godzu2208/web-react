import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class ListUser extends React.Component {
    state = {
        listUsersTest: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2')
        let response = await axios.get('https://reqres.in/api/users?page=1')

        let ListUserResponse = response.data.data.concat(res.data.data)

        this.setState({
            listUsersTest: ListUserResponse ? ListUserResponse : []
        })

    }
    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)

    }

    render() {
        let { listUsersTest } = this.state;
        return (

            <>
                <div className="list-user-container">
                    <div className='list-user-header'>
                        <h2>Fetch all list Users</h2>
                    </div>
                    <div className='list-user-content'>
                        {listUsersTest && listUsersTest.length > 0 &&
                            listUsersTest.map((item, index) => {
                                return (
                                    <div className='list-user-child' key={item.id}
                                        onClick={() => this.handleViewDetailUser(item)}
                                    >
                                        {index + 1} --- {item.first_name} {item.last_name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(ListUser);