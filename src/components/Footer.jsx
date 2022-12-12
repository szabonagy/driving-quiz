import React from "react";

function Footer() {
  return (
    <footer>
      <div className="buttons">
        <button type="button" class="btn btn-outline-secondary"><span class="btn-label">
        <i class="fa-sharp fa-solid fa-rotate-right"></i></span>  Később válaszolok</button>
        <button type="button" class="btn btn-outline-danger"><span class="btn-label">
        <i class="fa-sharp fa-solid fa-circle-xmark"></i></span>  Válasz megváltoztatása</button>
        <button type="button" class="btn btn-success"><span class="btn-label">
        <i class="fa-sharp fa-solid fa-circle-check"></i></span>  Válasz beküldése</button>
      </div>
    </footer>
  );
}

export default Footer;
