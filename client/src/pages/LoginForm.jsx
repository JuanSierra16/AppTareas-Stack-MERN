import {Form, Formik} from 'formik'
import {getUserRequest} from '../api/user.api'
import { useNavigate} from 'react-router-dom'

function LoginForm({onLogin}){

    const navigate = useNavigate()

    return(
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={async(values, actions) => {
                    console.log(values)
                    try{
                        const response = await getUserRequest(values.email)
                        console.log(response)
                        actions.resetForm()
                        if(values.password === response.data.password){
                            console.log(response.data.user_id)
                            onLogin(response.data.user_id); // llama a la función onLogin
                            alert('bienvenido')
                            setTimeout(() => {
                                console.log("Two seconds have passed");
                                //window.location.href = '/'; // redirige al usuario a la página de inicio después de enviar el formulario
                                navigate('/taskspage')
                            }, 300);
                        }
                        else{
                            alert('contraseña incorrecta')
                        }
                    }
                    catch(error){
                        console.error(error)
                    }
                }}
            >
            {({handleChange, handleSubmit, values, isSubmitting}) => (
                <Form onSubmit={handleSubmit}>
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

export default LoginForm