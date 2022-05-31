import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="shadow-md px-6 py-3 rounded-md bg-white flex justify-start items-center">
    <img src="/img/cgt.png" alt="Communisme Guerre Terrorisme" className="h-20 mr-8" />
    <nav className="flex-grow">
      <ul className="flex">
        <li className="linkItem">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'activeItem' : undefined)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Accueil
          </NavLink>
        </li>
        <li className="linkItem">
          <NavLink
            to="/strikes"
            className={({ isActive }) => (isActive ? 'activeItem' : undefined)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
            Matériel de grève
          </NavLink>
        </li>
        <li className="linkItem ">
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? 'activeItem' : undefined)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Ajouter un matériel
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
