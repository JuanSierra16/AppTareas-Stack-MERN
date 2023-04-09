import {Form, Formik} from 'formik'
import {createUserRequest} from '../api/user.api'

function UserForm(){
    return(
        <div>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                }}
                onSubmit={async(values, actions) => {
                    console.log(values)
                    try{
                        const response = await createUserRequest(values)
                        console.log(response)
                        actions.resetForm()
                        window.location.href = '/'; // redirige al usuario a la página de inicio después de enviar el formulario
                    }
                    catch(error){
                        console.error(error)
                    }
                }}
            >
            {({handleChange, handleSubmit, values, isSubmitting}) => (
                <Form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name='name' placeholder='Write your name' onChange={handleChange} value={values.name}/>

                <label>Email</label>
                <input type="email" name='email' placeholder='Write your email' onChange={handleChange} value={values.email}/>

                <label>Password</label>
                <input type="password" name='password' placeholder='Write your password' onChange={handleChange} value={values.password}/>

                <button type='submit' disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save"}
                </button>
                </Form>
            )}  
            </Formik>
        </div>
    )
}

export default UserForm