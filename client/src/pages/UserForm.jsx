import {Form, Formik} from 'formik'
import {createUserRequest} from '../api/user.api'
import { useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"

function UserForm({onLogin}){

    const navigate = useNavigate()

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
                        onLogin(response.data.id);
                        actions.resetForm()
                        navigate('/taskspage')
                    }
                    catch(error){
                        console.error(error)
                    }
                }}
            >
            {({handleChange, handleSubmit, values, isSubmitting}) => (
                <Form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-0.5 border-sky-400 border-2 border-solid p-10">
                <h2 className="text-center text-rose-500 font-mono font-bold text-4xl mb-4">MiSistemaAT</h2>
                <h2 className="text-center text-white font-bold text-xl mb-4">Sign up</h2>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Write your name"
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>
                
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
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
                <p className='text-white mt-6'>
                  Already have an account?
                  <Link to="/" className="ml-3 text-sky-400">Log in</Link>
                </p>
              </Form>              
            )}  
            </Formik>
        </div>
    )
}

export default UserForm