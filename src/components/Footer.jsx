const Footer = () => {
    return (
        <div className="foot fade-in">
            <footer className="footer center">
                <div className="footer_top">
                    <div className="logo">
                        <img style={{ paddingRight: "40px" }} src="img/logo.png" alt="" />
                    </div>
                    <div className="footer_social">
                        <div className="social_item">
                            <img src="img/tg_logo.svg" alt="" />
                        </div>
                        <div className="social_item">
                            <img src="img/vk_logo.svg" alt="" />
                        </div>
                        <div className="social_item">
                            <img src="img/whatsapp_logosvg.svg" alt="" />
                        </div>
                        <div className="social_item">
                            <img src="img/instagram_logo.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer_content">
                    <div className="footer_menu">
                        <p className="menu_text">Узнать больше</p>
                        <a data-target=".header" className="footer_links hover_anim" href="">Главная</a>
                        <a data-target=".AboutBar" className="footer_links hover_anim" href="">О нас</a>
                        <a data-target=".servicesBar" className="footer_links hover_anim" href="">Услуги</a>
                        <a data-target=".footer" className="footer_links hover_anim" href="">Контакты</a>
                        <a style={{ fontWeight: "700" }} className="footer_links hover_anim" href="">Записаться</a>
                    </div>
                    <div className="footer_contacts">
                        <p className="menu_text">Оставайтесь с нами</p>
                        <div className="footer_adres menu_item">
                            <p style={{ fontWeight: "700" }} className="footer_links">Адрес :</p>
                            <a className="footer_links hover_anim" href="">Главная городская площадь, 2</a>
                        </div>
                        <div className="footer_mail menu_item">
                            <p style={{ fontWeight: "700" }} className="footer_links">Почта :</p>
                            <a className="footer_links hover_anim" href="mailto:#">beautysalon@mail.ru</a>
                        </div>
                        <div className="footer_phone menu_item">
                            <p style={{ fontWeight: "700" }} className="footer_links">Телефон :</p>
                            <a className="footer_links hover_anim" href="tel:+79998887766">+7 999 888 77 66</a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer_late">
                <p className="footer_late_text">Copyright 2025 | Все права защищены.</p>
            </div>
        </div>
    );
}

export default Footer;