import './Navbar.css';

export default function Navbar() {
    return (
        <header>
            <div className='container'>
                <img src='src\assets\logo.png' alt="Shelfie's logo"/>
                <div className='nav-container'>
                    <ul>
                        <li>
                            <a href="/something">Фильмы</a>
                        </li>
                        <li>
                            <a href="/something">Сериалы</a>
                        </li>
                        <li>
                            <a href="/something">Книги</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/something">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </a>
                        </li>
                        <span className='vertical-line'></span>
                        <li>
                            <a href="/something">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                                </svg>
                                Войти
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}