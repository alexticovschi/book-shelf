import axios from 'axios';

export function getBooks(limit=10, start=0, order='asc') {
    const url = `/api/books?limit=${limit}&skip=${start}&order=${order}`;
    const request = axios.get(url).then(response => response.data);

    return {
        type: 'GET_BOOKS',
        payload: request
    }
}