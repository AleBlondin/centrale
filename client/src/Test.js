import React from 'react';
import './Home.css'
import Titanic from './Titanic.jpg'
import MammaMia from './MammaMia.jpg'
import Movie from './movie'

const [user, setUser] = useState(null);
 useEffect(() => {
   superagent
     .get("http://localhost:5000/application/movies")
     .then(response => setUser(response.body.user));
 }, []);


function Home() {
    return (
        <div>


