const AboutBar = () => {
    return (
        <div className="AboutBar fade-in">
            <div className="about_content center">
                <div className="about_info">
                    <h2 className="title desktop_title">У нас есть большой опыт в том, чтобы сделать вас очень красивой</h2>
                    <h2 className="title mobile_title">Сделаем ваш лучший образ</h2>
                    <p className="text">Красота – это искусство, а вы – его главный шедевр</p>
                </div>
                <div className="about_img_block">
                    <div className="about_img_item big">
                        <img className="about_img" src="img/item5.png" alt="" />
                    </div>
                    <div className="about_img_item">
                        <img className="about_img" src="img/item1.png" alt="" />
                    </div>
                    <div className="about_img_item">
                        <img className="about_img" src="img/item2.png" alt="" />
                    </div>
                    <div className="about_img_item">
                        <img className="about_img" src="img/item3.png" alt="" />
                    </div>
                    <div className="about_img_item">
                        <img className="about_img" src="img/item4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutBar;