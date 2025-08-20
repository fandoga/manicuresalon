const BackToTop = ({ backToTopRef }) => {


    const scrollTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <a
            href="#top"
            id="back_to_top"
            className="back_to_top"
            ref={backToTopRef}
            onClick={scrollTop}
        >
            <img src="img/back-to-the-top.jpg" alt="" />
        </a>
    );
}

export default BackToTop