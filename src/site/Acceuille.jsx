import React from 'react'
import './acceuille.css'
import bebe from '../images/bebe.jpg'
import 'bootstrap/dist/css/bootstrap.css';
export default function Acceuille() {
  return (
    <div>
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
      <h1>Produits bébé</h1>
      <img src={bebe}/>
      
    </div>
  )
}
