const MapBar = () => {
    return (
        <div className="MapBar fade-in">
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <a
                    href="https://yandex.ru/maps/org/kosy_rusyye/1730896023/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                >
                    Косы русые
                </a>
                <a
                    href="https://yandex.ru/maps/35/krasnodar/category/beauty_salon/184105814/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                >
                    Салон красоты в Краснодаре
                </a>
                <a
                    href="https://yandex.ru/maps/35/krasnodar/category/perfume_and_cosmetics_shop/184105798/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '28px' }}
                >
                    Магазин парфюмерии и косметики в Краснодаре
                </a>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=38.995905%2C45.037205&mode=search&oid=1730896023&ol=biz&sll=38.975313%2C45.035470&sspn=0.240326%2C0.103702&tab=reviews&text=%D0%A1%D0%B0%D0%BB%D0%BE%D0%BD%20%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%82%D1%8B&z=14"
                    width="100%"
                    height="450"
                    frameBorder="1"
                    allowFullScreen={true}
                    style={{ position: 'relative' }}
                    title="Yandex Map"
                ></iframe>
            </div>
        </div>
    );
}

export default MapBar;