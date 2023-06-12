import React ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");  
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCWnzZkXpz775hh-DCbNeJxm4vp2rJKCUo'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            < div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/>a body without soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find your book</h2>
                    <div className="search">
                    <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <img src="./images/bg2.png" width="250" height="300" alt=""/>
                </div>
            </div>
            <div className="container">
            {
                <Card book={bookData} />
            }
            </div>
        </>
    )
}
export default Main;