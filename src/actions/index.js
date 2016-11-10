import axios from 'axios';
import { FETCH_USER } from './types';

export function fetchUsers() {
    const request = axios.get('http://jsonplaceholder.typicode.com/users');
    return {
        type: FETCH_USER,
        payload: request
    };
};
