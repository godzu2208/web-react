// Mapping State(Redux) to Props(React)
import { toast } from "react-toastify";

const initState = {
    users: [
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Wick', email: 'wick@example.com' },
        { id: 3, name: 'PA', email: 'PA@example.com' },
        { id: 4, name: 'HL', email: 'HL@example.com' }
    ],
    posts: [],
}

const rootReducers = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            toast.success("Delete successfully")
            return { ...state, users };
        case 'ADD_USER':
            // let id = Math.floor(Math.random() * 100);
            // let id = item.id;
            // let users = state.users
            let newId = state.users && state.users.length > 0 ? state.users[state.users.length - 1].id + 1 : 1;
            let user = {
                id: newId, name: `User${newId}`, email: `user${newId}@gmail.com;`
            }
            toast.success("Add new user completed")
            return {
                ...state, users: [...state.users, user]
            };
        default:
            return state;
    }
}


export default rootReducers;