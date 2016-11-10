import axios from 'axios';
// Import action type
import { FETCH_USER } from './types';

// Fetch User action
export function fetchUsers() {
    // User axios to fetch dummy data.
    const request = axios.get('http://jsonplaceholder.typicode.com/users');
    return {
        type: FETCH_USER,
        payload: request
    };
};
