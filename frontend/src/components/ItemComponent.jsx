import { ErrorMessage, Field, Formik,Form } from "formik"
import { useEffect, useState } from "react"
import { useMatch, useNavigate } from "react-router-dom"
import ItemDataService from "../services/ItemDataService"

const ItemComponent = () => {
    const itemMatch = useMatch(`folders/:folderid/items/:id`)
    const [id,setId] = useState(itemMatch.params.id)
    const [folderId,setFolderId] = useState(itemMatch.params.folderid)
    const [description,setDescription] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        console.log(id)

        if (id == -1) {
            return
        }
        ItemDataService.retrieveItem(id)
        .then(data => setDescription(data.description))
    },[])

    const onSubmit = (values) => {
        let item = {
            id: id,
            description: values.description,
            completed: values.completed,
            folderId: folderId,
            targetDate: values.targetDate,
        }
        if (id == -1) {
            ItemDataService.createItem(item)
            .then(() => navigate(`/folders/${folderId}/items`))
        } else {
            ItemDataService.updateItem(id,item)
            .then(() => navigate(`/folders/${folderId}/items`))
        }
        console.log(values)
    }

    const validate = (values) => {
        let errors = {}
        if (!values.description) {
            errors.description = "Enter a Description"
        }
        return errors
    }

    return (
        <div>
            <h3>Item</h3>
            <div className="container">
                <Formik initialValues={{id,description}}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate={validate}
                enableReinitialize={true}>
                    {
                        () => (
                            <Form>
                                <ErrorMessage name="description" 
                                component="div"
                                className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field
                                    className="form-control" type="text" name="description" />
                                </fieldset>
                                <fieldset>
                                    <label>Completed</label>
                                    <div role="group">
                                        <label>
                                            <Field type="radio" name="completed" value="true" />
                                            YES
                                        </label>
                                        <label>
                                            <Field type="radio" name="completed" value="false" />
                                            NO
                                        </label>
                                    </div>
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
export default ItemComponent