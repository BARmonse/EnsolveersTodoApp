import axios from "axios";

const ITEM_API_URL = "http://localhost:8080"

const retrieveAllFolders = async () => {
    const response = await axios.get(`${ITEM_API_URL}/folders`);
    return response.data
}

const createFolder = async(folder) => {
    const response = await axios.post(`${ITEM_API_URL}/folders/`,folder);
    return response.data
}

const deleteFolder = async (id) => {
    const response = await axios.delete(`${ITEM_API_URL}/folders/${id}`);
    return response.data
}

const retrieveFolder = async (id) => {
    const response = await axios.get(`${ITEM_API_URL}/folders/${id}`)
    return response.data
}

export default {
    retrieveAllFolders,
    createFolder,
    deleteFolder,
    retrieveFolder,
}