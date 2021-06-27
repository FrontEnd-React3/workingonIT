import * as React from "react";
import { motion } from "framer-motion";
import fahome from "./IMG/home.svg";
import fapf from "./IMG/book.svg";
import facontact from "./IMG/foot.svg";
import faabout from "./IMG/comment-solid.svg";
import faskills from "./IMG/medail.svg";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = [
  "rgb(255, 0, 255)",
  "rgb(190, 30, 254)",
  "rgb(130, 60, 253)",
  "rgb(70, 90, 252)",
  "rgb(2, 126, 251)"
];
const links = ["Home", "About", "Portfolio", "Skills", "Contact"];
const pics = [fahome, faabout, fapf, faskills, facontact];

export const MenuItem = ({ i }) => {
  const style = { color: ` ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <downloadiv className="icon-placeholder" style={style}>
        <img className="icon-placeholder" src={pics[i]} alt={pics[i]} />
      </downloadiv>
      <div className="text-placeholder" style={style}>
        {links[i]}
      </div>
    </motion.li>
  );
};
