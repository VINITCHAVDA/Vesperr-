import React from "react";

const Navbar = () => {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h2>vesperr</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link  active" href="#" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>
      <form class="d-flex ">
      <button type="button" class="btn btn-outline-primary rounded-pill">Get Started</button>
            </form>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
