import {Form, Formik} from 'formik'
import {createTaskRequest} from '../api/task.api'

function TaskForm({ userId }){
    return(
        <div>
            <Formik
                initialValues={{
                    title: "",
                    description: "",
                    user_id: userId, //Aqui va el id del usuario
                }}
                onSubmit={async(values, actions) => {
                    console.log(values)
                    try{
                        const response = await createTaskRequest(values)
                        console.log(response)
                        actions.resetForm()
                    }
                    catch(error){
                        console.error(error)
                    }
                }}
            >
            {({handleChange, handleSubmit, values, isSubmitting}) => (
                <Form onSubmit={handleSubmit}>
                <label>title</label>
                <input type="text" name='title' placeholder='Write a title' onChange={handleChange} value={values.title}/>

                <label>description</label>
                <textarea name="description" rows="3" placeholder='Write a description' onChange={handleChange} value={values.description}></textarea>

                <button type='submit' disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save"}
                </button>
                </Form>
            )}  
            </Formik>
        </div>
    )
}

export default TaskForm