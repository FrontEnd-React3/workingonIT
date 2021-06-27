import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import beneface from "./IMG/beneface.jpg";
import klas from "./IMG/class.jpg";
import flags from "./IMG/flags.jpg";
import dwl from "./IMG/download.svg";
import "./button.css";
import Cards from "./components2/Cards";
import Bubb from "./bubbels/bubbels";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="nav"
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />

        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <div className="parent row">
        <section className="homesection">
          <div className="homewrapper">
            <div className="hometitle">
              Looking <br />
              for a <br />
              React <br />
              Developer?
              <div className="btncont">
                <button className="custom-btn btn-12">
                  <span>3 CV's FR-NL-EN</span>

                  <span>
                    <img className="dwl" src={dwl} alt="" />
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="homecontainer">
            <img className="homeimage" src={beneface} alt="beneface" />
          </div>
        </section>
        <section className="aboutsection btn-12">
          <div className="abouttitle">
            Making <br />
            iT <br />
            happen
          </div>
          <div className="abouttext">
            Since July 2019 I am a REACT instructor at Intec Brussels. Teaching
            complex code as simple as possible made me an appreciated
            job-generator for my students.
          </div>
          <Bubb />
          <div className="aboutcontainer">
            <img className="center" id="aboutimg" src={klas} alt="beneface" />
          </div>
        </section>
        <section className="pfsection">
          <div className="pftitle">Portfolio</div>

          <Cards />
        </section>
        <section className="sksection">
          <div className="sktitle">Skills</div>
          <h5 className="skillstext">A TRUE MULTILINGUAL</h5>
          <div className="skillsimagecontainer">
            {/* problem */}
            <img className="skillsimg" src={flags} alt="flags" />
          </div>
          <h5 className="skillstext">A GRAPHIC DESIGNER</h5>
          <div className="skillsbody">
            Indesign &#8226; Photoshop &#8226; Illustrator
          </div>
          <h5 className="skillstext"> AND WEB DEVELOPER</h5>
          <div className="skillsbody">
            Bootstrap &#8226; Flexbox &#8226; Grid &#8226; SASS &#8226; Ant
            Design &#8226; Material UI
          </div>
          <div className="skillsbody">
            REACT &#8226; React-Native &#8226; Styled Components &#8226;
            Animations &#8226; Headless CMS (Learning Sanity.IO)
          </div>
          <div className="skillsbody">Firebase &#8226; PHP &#8226; MySql</div>
          <div className="skillsbody">NPM &#8226; GIT</div>
        </section>
      </div>
    </div>
  );
};
