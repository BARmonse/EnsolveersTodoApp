import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import FolderDataService from "../services/FolderDataService"


const ListFolderComponent = () => {
    const [folders,setFolders] = useState([])
    const [message,setMessage] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        FolderDataService.retrieveAllFolders()
        .then(data => {
            console.log(data)
            setFolders(data)
        })
    },[])

    const deleteFolderClicked = async (id) => {
        const response = await FolderDataService.deleteFolder(id)
        console.log(response.data)
        setFolders(folders.filter(folder => folder.id !== id))
        setMessage(`The Folder ${id} has been deleted`)
    }

    const addFolderClicked = () => {
        navigate(`/folders/create-folder/-1`)
    }

    const seeFolderClicked = (id) => {
        navigate(`/folders/${id}/items`)
    }

    return (
        <div className="container">
            <h2>Folders</h2>
            {message && <div className="alert alert-success">{message}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>See Items</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            folders.map(
                                folder =>
                                <tr key={folder.id}>
                                    <td>{folder.name}</td>
                                    <td>
                                        <button 
                                        className="btn btn-outline-primary"
                                        onClick={() => seeFolderClicked(folder.id)}>
                                            See Items
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                        className="btn btn-warning"
                                        onClick={() => deleteFolderClicked(folder.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={addFolderClicked}>Add</button>
                </div>
            </div>
        </div>
    )

}
export default ListFolderComponent