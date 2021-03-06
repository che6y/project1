export default {
    all() {
        return axios.get('/api/purchases');
    },
    post(data) {
        return axios.post(`/api/purchases/`, data);
    },
    update(id, data) {
        return axios.put(`/api/purchases/${id}`, data);
    },
    delete(id) {
        return axios.delete(`/api/purchases/${id}`);
    },
};