import './App.css';
import { useCallback, useState } from "react";
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import IndexRouter from "./router/indexRouter";

export default function App(){
    const [text, setText] = useState();
    const getHome = useCallback(()=>{
        axios.get('/api/home').then((res)=>{
            console.log('res',res);
            const { text } = res.data;
            setText(text);
        });
    }, []);

    return (
       <div>
           <BrowserRouter>
                <IndexRouter></IndexRouter>
           </BrowserRouter>
       </div>
    )
}