import { Link } from "react-router-dom";
import {ImExit} from "react-icons/im";

function Navbar({ onLogout }){
    return(
        <div className="bg-neutral-800 flex justify-between px-20 py-4">
            <Link to="/taskspage" className="text-white font-bold">
                <h1>MiSistemaAT</h1>
            </Link>

            <ul className="flex gap-x-1">
                <li>
                    <Link to="/taskspage" className="bg-slate-200 px-2 py-1 mr-3">Home</Link>
                </li>
                <li>
                    <Link to="/new" className="bg-slate-200 px-2 py-1 mr-3">Create task</Link>
                </li>
                <li>
                    <Link to="/" className="bg-slate-200 px-2 py-1" onClick={onLogout}>
                        <ImExit className="w-5 h-5 inline-block align-middle"/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar