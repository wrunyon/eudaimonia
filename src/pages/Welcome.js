import { motion, useScroll, useTransform } from "framer-motion";

import mountainsimg from "../assets/mountains.jpg"
import fullsunimg from "../assets/fullsun.png";

export default function WelcomePage() {
  const { scrollY } = useScroll();

  const opacitySun = useTransform(
    scrollY, 
    [0, 25, 50, 75, 100, 150, 200, 250, 300, 400, 450, 500],
    [0, 0.25, 0.5, 1, 1, .5, .25, 0, 0, 0, 0, 0]
  )

  const opacityMountains = useTransform(
    scrollY, 
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  )

  const scaleSun = useTransform(scrollY, [0, 0, 25, 100, 200], [.25, .25, .25, .5, 1]);
  const ySun = useTransform(scrollY, [0, 50, 50, 300], [0, 50, 50, 300]);

  return (
    <>
      <header className={"welcome-header"}>
        <div className={"welcome-sun-container"}><motion.img 
        src={fullsunimg}
        id="welcome-sun"
        style={{ opacity: opacitySun, scale: scaleSun, y: ySun }}>
        </motion.img></div>
        <motion.img
          src={mountainsimg}
          alt="Nice peaceful mountain landscape"
          id="welcome-landscape"
          style={{ opacity: opacityMountains }}
        ></motion.img>
      </header>
      <main id="welcome-content">
        <section>
          <h2>Why practice gratitude?</h2>
          <p>
            Gratitude is really cool and will make you feel better lorem ipsum blah blah blah blah
          </p>
        </section>

        <section>
          <h2>Why practice affirmations?</h2>
          <p>
            Affirmatinos are really cool and will make you feel better lorem ipsum blah blah blah blah
          </p>
        </section>

        <section>
          <h2>Why practice gratitude?</h2>
          <p>
            Gratitude is really cool and will make you feel better lorem ipsum blah blah blah blah
          </p>
        </section>
        <section>
          <h2>Why practice journaling?</h2>
          <p>
            Journaling is really cool and will make you feel better lorem ipsum blah blah blah blah
          </p>
        </section>
      </main>
    </>
  );
}
