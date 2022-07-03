import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    return (
        <div>
            login
            <button onClick={()=>{
                localStorage.setItem('token', '123');
                navigate('/');
            }}>click</button>
        </div>
    )
}