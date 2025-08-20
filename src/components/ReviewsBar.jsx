const ReviewsBar = () => {
    return (
        <div className="ReviewsBar fade-in">
            <div className="review_content center">
                <div className="review_info">
                    <h2 className="title">Наши отзывы</h2>
                    <p style={{ marginTop: "5px" }} className="text">Что говорят наши клиенты</p>
                </div>
                <div className="reviews_block">
                    <a href="#" className="review_item">
                        <div className="review_text">
                            <img src="img/paragraph.svg" alt="" />
                            <p>Очень нравится данная студия. Качество услуг на высоте. Маникюр и педикюр держится очень
                                хорошо, по времени всегда очень быстро.</p>
                        </div>
                        <div className="review_card">
                            <img src="img/review1.png" alt="" />
                            <p>Анастасия</p>
                        </div>
                    </a>
                    <a href="#" className="review_item">
                        <div className="review_text">
                            <img src="img/paragraph.svg" alt="" />
                            <p>Была первый раз и очень понравилось, обслуживание, персонал, интерьер - все прекрасно!
                                Теперь только к вам.
                            </p>
                        </div>
                        <div className="review_card">
                            <img src="img/review2.png" alt="" />
                            <p>Екатирина</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ReviewsBar;