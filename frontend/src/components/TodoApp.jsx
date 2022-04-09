import {Routes,Route} from 'react-router-dom'
import ItemComponent from './ItemComponent'
import ListFolderComponent from './ListFolderComponent'
import ListItemComponent from './ListItemComponent'
import FolderComponent from './FolderComponent'


const TodoApp = () => {
    return (
        <div>
            <h1>To Do Application</h1>
            <Routes>
                <Route path="/folders/:folderid/items/:id" element={<ItemComponent />}/>
                <Route path="/folders/:id/items" element={<ListItemComponent />} />
                <Route path="/folders" element={<ListFolderComponent />}/>
                <Route path="/" element={<ListFolderComponent />}/>
                <Route path="/folders/create-folder/-1" element={<FolderComponent />}/>
            </Routes>
        </div>
    )
}
export default TodoApp