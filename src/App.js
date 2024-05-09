import { Suspense, lazy, useEffect, useRef } from "react";
import About from "./page/About";
import Aside from "./page/Aside";
import Footer from "./page/Footer";
import Header from "./page/Header";
import Hero from "./page/Hero";
import Instruction from "./page/Instruction";
import Markets from "./page/Markets";

function App() {
  const refTest = useRef();
  useEffect(() => {
    const sections = refTest.current.querySelectorAll("[data-section]")
    const addEventOnElem = function (elem, type, callback, remove = false) {
      if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
          if (remove) {
            elem[i].removeEventListener(type, callback);
            continue;
          }
          elem[i].addEventListener(type, callback);
        }
      } else {
        if (remove) {
          elem.removeEventListener(type, callback);
        }
        elem.addEventListener(type, callback);
      }
    }

    const scrollReveal = function () {
      sections.forEach(section => {
        // console.log(section.getBoundingClientRect());
        // console.log(window.innerHeight);
        if (section.getBoundingClientRect().top < window.innerHeight / 1.5) {
          section.classList.add("active");
        } else {
          section.classList.remove("active")
        }
      })
    }

    scrollReveal();
    addEventOnElem(window, "scroll", scrollReveal)

    return () => addEventOnElem(window, "scroll", scrollReveal, true)
  }, [])

  return (
    <div ref={refTest}>
      <Header />
      <Hero />
      <Markets />
      <Instruction />
      <About />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
