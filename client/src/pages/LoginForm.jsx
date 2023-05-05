import {Form, Formik} from 'formik'
import {getUserRequest, login } from '../api/user.api'
import { useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"

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
                        const response = await login(values.email, values.password)
                        console.log(response)
                        actions.resetForm()
                        if(response.status===200){
                            console.log(response.data.user_id)
                            onLogin(response.data.user_id); // llama a la función onLogin
                            navigate('/taskspage')
                        }
                        else{
                            alert('Usuario y/o contraseña incorrectos')
                        }
                    }
                    catch(error){
                        console.error(error)
                        alert('Usuario y/o contraseña incorrectos')
                        actions.resetForm()
                    }
                }}
            >
            {({handleChange, handleSubmit, values, isSubmitting}) => (
              <Form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-11 border-sky-400 border-2 border-solid p-10">
                <h2 className="text-center text-rose-500 font-mono font-bold text-4xl mb-4">MiSistemaAT</h2>
                <h2 className="text-center text-white font-bold text-xl mb-4">Log in</h2>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Write your email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
              
                <div className="mb-6">
                  <label htmlFor="password" className="block text-white font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Write your password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
              
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Log in"}
                </button>
                <p className='text-white mt-6'>
                  Don't have an account?
                  <Link to="/register" className="ml-3 text-sky-400">Sign up</Link>
                </p>
              </Form>
            )}  
            </Formik>
        </div>
    )
}

export default LoginForm