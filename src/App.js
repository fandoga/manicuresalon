import logo from './logo.svg';
import './App.css';
import BackToTop from './components/BackToTop';
import { useEffect, useRef } from 'react';
import Top from './components/Top';
import Mid from './components/Mid';
import Footer from './components/Footer';

function App() {

  const backToTopRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    });
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Кнопка наверх
  useEffect(() => {
    const onScroll = () => {
      if (backToTopRef.current) {
        backToTopRef.current.style.bottom =
          window.scrollY > 300 ? "-20px" : "-200px";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;

      // Плавный скролл
      if (target.dataset?.target) {
        e.preventDefault();
        const el = document.querySelector(target.dataset.target);
        if (el) {
          const offset = 50;
          const elPos = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: elPos, behavior: "smooth" });
        }
      }

      // Роутинг по data-link
      if (target.dataset?.link) {
        let url = null;
        switch (target.dataset.link) {
          case "SignUp":
            url =
              "https://n1174179.yclients.com/company/1077045/personal/menu?o=";
            break;
          case "Service_1":
            url =
              "https://n1174179.yclients.com/company/1077045/personal/select-services?o=s16187977";
            break;
          case "Service_2":
            url =
              "https://n1174179.yclients.com/company/1077045/personal/select-services?o=s16204036";
            break;
          case "Service_3":
            url =
              "https://n1174179.yclients.com/company/1077045/personal/select-services?o=s16204046";
            break;
          default:
            break;
        }
        if (url) window.location.href = url;
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="App">
      <BackToTop backToTopRef={backToTopRef}></BackToTop>
      <Top></Top>
      <Mid></Mid>
      <Footer></Footer>
    </div>
  );
}

export default App;
