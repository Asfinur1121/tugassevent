import React from "react";
import './App.css'
import TodoList from "./pages/todolist";

function App() {
  return(
    <div className="body">
      <h1>Selamat Datang di Grosir Murah</h1>
      <p>Berikut adalah daftar barang yang kami jual:</p>
      <ul>
        <li>Beras</li>
        <li>Gula</li>
        <li>Minyak Goreng</li>
        <li>Telur</li>
        <li>Sayuran</li>
        <li>Mie Instan</li>
        <input type="text" />
        <input type="button" value="Add Item"/>
      </ul>
      <div>
        <TodoList/>
      </div>
      </div>
  )
}
 
export default App;