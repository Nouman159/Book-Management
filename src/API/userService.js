import axiosInstance from "./axiosInstance";

const userService = {
    create: async (payload) => {
        try {
            console.log(payload)
            const response = await axiosInstance.post('/users/create', payload)
            console.log(response)
            return response.data
        }
        catch (error) {
            throw error.response.data
        }
    },

    // fetchAll: async (payload) => {
    //     try {
    //         const response = await axiosInstance.get('users/all', payload)
    //         return response.data
    //     }
    //     catch (error) {
    //         throw error.response.data
    //     }

    // },
    // single: async (id) => {
    //     try {
    //         const response = await axiosInstance.get(`/users/single/${id}`);
    //         return response.data
    //     } catch (error) {
    //         throw error.response.data
    //     }
    // },
    // update: async (id, payload) => {
    //     try {
    //         const response = await axiosInstance.put(`/users/update/${id}`, payload);
    //         return response.data
    //     } catch (error) {
    //         throw error.response.data
    //     }
    // },
    // delete: async (id) => {
    //     try {
    //         const response = await axiosInstance.delete(`/users/delete/${id}`)
    //         return response.data
    //     } catch (error) {
    //         throw error.response.data
    //     }
    // },
}
export default userService