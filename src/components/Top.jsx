const Top = () => {
    return (
        <div className="top">
            <header className="header center fade-in">
                <div className="logo">
                    <img src="img/logo.png" alt="logo" />
                </div>
                <nav className="header_nav">
                    <li className="nav_item">
                        <a data-target=".header" className="nav_link hover_anim black" href="#">Главная</a>
                    </li>
                    <li className="nav_item">
                        <a data-target=".AboutBar" className="nav_link hover_anim black" href="#">О нас</a>
                    </li>
                    <li className="nav_item">
                        <a data-target=".servicesBar" className="nav_link hover_anim black" href="#">Услуги</a>
                    </li>
                    <li className="nav_item">
                        <a data-target=".footer" className="nav_link hover_anim black" href="#">Контакты</a>
                    </li>
                    <a href="#">
                        <button className="button_nav">Записаться</button>
                    </a>
                </nav>
                <nav className="nav_icons">
                    <a className="nav_icon_link" data-target=".header" href="#">
                        <img src="img/home.svg" alt="" />
                    </a>
                    <a className="nav_icon_link" href="#">
                        <img src="img/group.svg" alt="" />
                    </a>
                    <a className="nav_icon_link" data-target=".servicesBar" href="#">
                        <img src="img/service.svg" alt="" />
                    </a>
                    <a className="nav_icon_link" data-target=".slider_buttons" href="#">
                        <img src="img/review.svg" alt="" />
                    </a>
                    <a className="nav_icon_link" data-target=".footer" href="#">
                        <img src="img/contact.svg" alt="" />
                    </a>
                    <button className="nav_button">
                        <img src="img/sci.svg" alt="" />
                    </button>
                </nav>
            </header>
            <div className="topBar">
                <div className="box_shadow"></div>
                <div className="top_content center">
                    <h3 className="top_content_subtitle">
                        <img style={{ paddingRight: "8px" }} src="img/Vector.svg" alt="icon" />
                        Салон красоты
                    </h3>
                    <h1 className="top_content_title">Запишитесь к нам</h1>
                    <p className="top_content_text">Хотите идеальный маникюр или стильную прическу? Запишитесь прямо сейчас!
                    </p>
                    <a href="#">
                        <button className="button_top">Найти нас
                            <img style={{ marginLeft: "20px" }} src="img/search.svg" alt="" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Top;