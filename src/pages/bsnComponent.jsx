import IconButton from "../components/IconButton";
import ProgressBar from "../components/ProgressBar";
import SearchInput from "../components/SearchInput";
import { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';


export default function BsnComponent() {
    const [searchTerm,setSearchTerm] = useState('');
    const fetchData = () => {
        axios
            .get('/posts')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <IconButton onClick={()=> null} icon = {''} bgColor="" className={''}  />
            <ProgressBar value={50} max={100} color="secondary" width="full" />
            <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    );

}





// const App = () => {
   
// };

// export default App;

