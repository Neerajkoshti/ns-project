import React from 'react';
export const Navbar = () => {
    return (

 <div> 
<div className="navheader">

<div id="flipkartlogo"><a href="/">
    <img id="flipkartimg" width="75" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" className="_2xm1JU"/>
      </a><br/>
      
      <a id ="exploreplus" className="_21ljIi" href="/plus">Explore <span id="exploreplusspan">Plus</span><img width="10" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="logo"/>
      </a>
</div>


    <div id="search">
        <input id="searchinput"placeholder="Search for product brands and more "></input>
        <button type="submit" id="searchicon"><i className="fa fa-search"></i></button>
    </div>

    <div id="logindiv" className="logindiv">
    <button className="loginbutton" type="submit">Login</button>
    <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
    </div>
    
    </div>

<div className="moredropdown">
  <button className="moredropbtn">More</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>


<div className="cart">
  <a className="cartlink" href="/" ><i class="fa fa-shopping-cart" style={{fontSize:"15px",color:"white"}}></i> cart</a>
</div>


</div>
</div>

    )
}
