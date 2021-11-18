import React,{Component} from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home, About, NotFound} from "./pages";
import axios from "axios";
import MovieData from "./MovieData";
import Menu from './Menu'

class App extends Component{
    state = {
        data:[]
    }
    getMovieData(){
        const url = 'https://yts.mx/api/v2/list_movies.json'
        axios.get(url).then((Response)=>{
            const data = Response.data.data.movies;
            console.log(data);
            this.setState({
                data:data
            });

        })
    }

    componentDidMount() {
        this.getMovieData()
    }

    render(){
    return(
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>


                <Route exact path="/*" element={<NotFound/>}/>

            </Routes>
        </div>
    )
  }
}

export default App;
