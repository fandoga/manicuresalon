import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";


const services = [
    {
        title: "Женская стрижка",
        price: "от 1200 руб.",
        img: "img/services_3.jpg",
        link: "https://yandex.ru/maps/org/klod_mone/51019460542/?booking%5Bpage%5D=services",
    },
    {
        title: "Окрашивание",
        price: "от 1800 руб.",
        img: "img/services_2.jpg",
        link: "https://yandex.ru/maps/org/klod_mone/51019460542/?booking%5Bpage%5D=services",
    },
    {
        title: "Укладка волос",
        price: "от 1000 руб.",
        img: "img/services_1.jpg",
        link: "https://yandex.ru/maps/org/klod_mone/51019460542/?booking%5Bpage%5D=services",
    },
    {
        title: "Мужская стрижка",
        price: "от 800 руб.",
        img: "img/services_4.jpg",
        link: "https://yandex.ru/maps/org/klod_mone/51019460542/?booking%5Bpage%5D=services",
    },
    {
        title: "Выпрямление",
        price: "от 2500 руб.",
        img: "img/services_5.jpg",
        link: "https://yandex.ru/maps/org/klod_mone/51019460542/?booking%5Bpage%5D=services",
    },
    {
        title: "Завивка волос",
        price: "от 3500 руб.",
        img: "img/services_6.jpg",
        link: "https://yandex.ru/maps/org/klod_mone/51019460542/?booking%5Bpage%5D=services",
    },
];



const ServicesSlider = () => {
    const [current, setCurrent] = useState(0);
    const itemRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);
    const [slidesOnScreen, setSlides] = useState(4)


    useEffect(() => {
        const updateWidth = () => {
            if (itemRef.current) {
                setItemWidth(itemRef.current.offsetWidth + 24); // ширина + отступ
            }

            const screenWidth = window.innerWidth;

            if (screenWidth < 1150) {
                setSlides(1); // мобилка
            } else if (screenWidth < 1380) {
                setSlides(3); // планшет
            } else {
                setSlides(4); // десктоп
            }
        };

        updateWidth(); // вызов сразу при маунте
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);


    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? prev : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === services.length - slidesOnScreen ? prev : prev + 1));
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        trackMouse: false,
    });

    return (
        <div className="servicesBar fade-in">
            <div className="services_content">
                <div className="services_info">
                    <h3 className="subtitle">Наши услуги</h3>
                    <h2 className="title">Рекомендовации</h2>
                    <p style={{ marginTop: "6px" }} className="text">Ваша красота – наш главный тренд</p>
                </div>
                <div className="services_block">
                    <div className="left_arrow_wrapper" onClick={prevSlide}>
                        <img src="img/left_arrow.svg" alt="Prev" />
                    </div>

                    <div className="services_list" {...handlers}>
                        <div
                            className="services_track"
                            style={{ transform: `translateX(-${current * itemWidth}px)` }}
                        >
                            {services.map((service, idx) => (
                                <div ref={itemRef} className="services_item" key={idx}>
                                    <div className="services_img_wrapper">
                                        <img src={service.img} alt={service.title} />
                                    </div>
                                    <div className="services_item_info">
                                        <h4 className="services_item_title">{service.title}</h4>
                                        <p className="services_item_text">{service.price}</p>
                                        <a href={service.link} target="_blank" rel="noreferrer">
                                            <button className="services_button">Подробнее</button>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="right_arrow_wrapper" onClick={nextSlide}>
                        <img src="img/right_arrow.svg" alt="Next" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSlider;
