import { Formik,Form,Field, } from "formik"
import { useState } from "react"
import { useNavigate,useMatch } from "react-router-dom"
import FolderDataService from "../services/FolderDataService"

const FolderComponent = () => {
    const folderMatch = useMatch("/folders/create-folder/:id")
    const [id,setId] = useState(folderMatch.params.id)
    const [name,setName] = useState("")
    const navigate = useNavigate()


    const onSubmit= (values) => {
        let folder = {
            id: id,
            name: values.name,
        }
        if (id == -1) {
            FolderDataService.createFolder(folder)
            .then(() => navigate('/folders'))
            }
        }

    return (
         <div>
            <h3>Folder</h3>
            <div className="container">
                <Formik initialValues={{name}}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                enableReinitialize={true}>
                    {
                        () => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Name</label>
                                    <Field
                                    className="form-control" type="text" name="name" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default FolderComponent