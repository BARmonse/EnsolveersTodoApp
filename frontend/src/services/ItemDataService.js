import axios from "axios"

const ITEM_API_URL = "http://localhost:8080"

const updateItem= async (id,item) => {
    const response = await axios.put(`${ITEM_API_URL}/items/${id}`,item);
    return response.data
}

const retrieveAllItems = async () => {
    const response = await axios.get(`${ITEM_API_URL}/items`);
    return response.data
}

const createItem = async(item) => {
    const response = await axios.post(`${ITEM_API_URL}/items/`,item);
    return response.data
}

const deleteItem = async (id) => {
    const response = await axios.delete(`${ITEM_API_URL}/items/${id}`);
    return response.data
}

const retrieveItem = async (id) => {
    const response = await axios.get(`${ITEM_API_URL}/items/${id}`)
    return response.data
}

export default {
    updateItem,
    retrieveAllItems,
    createItem,
    deleteItem,
    retrieveItem,
}