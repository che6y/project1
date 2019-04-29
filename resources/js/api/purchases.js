import ç from 'axios';

export default {
    all() {
        return axios.get('/api/purchases');
    },
    find(id) {
        return axios.get(`/api/purchases/${id}`);
    },
    update(id, data) {
        return axios.put(`/api/purchases/${id}`, data);
    },
    delete(id) {
        return axios.delete(`/api/purchases/${id}`);
    },
};