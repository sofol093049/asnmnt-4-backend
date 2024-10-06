
import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
// import Book from "./Book";
//  import Bookdetails from "./Bookdetails";
//  import { useEffect, useState } from "react";

function Bookcards() {
    
    const navigate=useNavigate();
    const {user}=useContext(AuthContext);
    
    // const [books,setBooks]=useState([]);
    // useEffect(()=>{
    //     try{ fetch("book.json")
    //         .then(res=>res.json())
    //         .then(books=>setBooks(books));}
    //     catch(error){console.log(error);}
       
    // })
    const books=useLoaderData();
console.log(books);
    return (
        <div>
            <h2 className="bg-amber-100 navbar_width mx-auto mt-4 text-center rounded font-bold text-2xl">𝕮𝖆𝖙𝖊𝖌𝖔𝖗𝖞 𝖔𝖋 𝕮𝖔𝖚𝖗𝖘𝖊𝖘</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 navbar_width mx-auto mt-4" >
            
         {books.map((book)=>{
            return (<div key={book.bookId} className="bg-slate-200 p-3 shadow rounded border-red-100 text-center">
                {/* <span className="absolute top-0 right-0 bg-orange-400 py-3 rounded">10%</span> */}
                <img  className="h-32 mx-auto" src={book.img_url}
                alt="" />
                <p title={book.title}></p>
                <p className="  font-mono font-bold">{book.details.slice(0,30)}</p>
                
                
                {/* <p className="  font-mono font-bold">{book.tags.slice(0,10)}</p> */}
                <p className="  font-mono font-bold">{book.ratings}</p>
                <p className="  font-mono font-bold">{book.category}</p>

              { user?(<Link to={`/bookdetails/${book._id}`}> <button type="button"  className="btn-secondary btn hover:bg-sky-700">
                ℭ𝔬𝔲𝔯𝔰𝔢 𝔇𝔢𝔱𝔞𝔦𝔩𝔰</button></Link>):(<Link to={`/login`}> <button type="button"  className="btn-secondary btn hover:bg-sky-700">
                    ℭ𝔬𝔲𝔯𝔰𝔢 𝔇𝔢𝔱𝔞𝔦𝔩𝔰</button></Link>) }
               
            
            </div>
            )
         })}
        </div>
               
            {/* <Bookdetails name={books}/> */}
        </div>
       
    
    );
}

export default Bookcards;