import axiosInstance from "./axiosInstance";

const bookService = {
    create: async (payload) => {
        try {
            console.log(payload)
            const response = await axiosInstance.post('/books/create', payload)
            console.log(response)
            return response.data
        }
        catch (error) {
            throw error.response.data
        }
    },

    fetchAll: async (payload) => {
        try {
            const response = await axiosInstance.get('books/all', payload)
            return response.data
        }
        catch (error) {
            throw error.response.data
        }

    },
    single: async (id) => {
        try {
            const response = await axiosInstance.get(`/books/single/${id}`);
            return response.data
        } catch (error) {
            throw error.response.data
        }
    },
    update: async (id, payload) => {
        try {
            const response = await axiosInstance.put(`/books/update/${id}`, payload);
            return response.data
        } catch (error) {
            throw error.response.data
        }
    },
    delete: async (id) => {
        try {
            const response = await axiosInstance.delete(`/books/delete/${id}`)
            return response.data
        } catch (error) {
            throw error.response.data
        }
    },
}
export default bookService