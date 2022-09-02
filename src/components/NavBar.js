import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link disabled">Pet-Shop "Timmy"</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Productos
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            Lista de adopcion
          </a>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
