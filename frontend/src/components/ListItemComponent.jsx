import { useNavigate,useMatch } from "react-router-dom";
import { useState,useEffect } from "react";
import ItemDataService from "../services/ItemDataService";

const ListItemComponent = () => {
    const folderMatch = useMatch(`folders/:id/items`)
    const [id,setId] = useState(folderMatch.params.id) 
    const [items,setItems] = useState([])
    const [message,setMessage] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        ItemDataService.retrieveAllItems()
        .then(data => {
            console.log(data)
            setItems(data.filter(d => d.folderId == id))
        })
    },[])

    const deleteItemClicked = async (id) => {
        const response = await ItemDataService.deleteItem(id)
        setItems(items.filter(item => item.id !== id))
        setMessage(`The item ${id} has been deleted`)
    }
    
    const updateItemClicked = (itemId) => {
        navigate(`/folders/${id}/items/${itemId}`)
    }
    const addItemClicked = () => {
        navigate(`/folders/${id}/items/-1`)
    }
    const backToFolder = () => {
        navigate(`/folders`)
    }

    return (
        <div className="container">
            <h3>Items</h3>
            {message && <div className="alert alert-success">{message}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Completed</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(
                                item =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.description}</td>
                                    <td>{item.completed ? "YES":"NO"}</td>
                                    <td>
                                        <button
                                        className="btn btn-success"
                                        onClick={() => updateItemClicked(item.id)}>
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                        className="btn btn-warning"
                                        onClick={() => deleteItemClicked(item.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={addItemClicked}>Add</button>
                    <button type="button" 
                        className="btn btn-outline-danger"
                        onClick={() => backToFolder()}>
                        Return To Folders
                    </button>
                </div>
            </div>
        </div>
    );

}
export default ListItemComponent