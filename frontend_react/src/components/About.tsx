import {useEffect, useState} from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from './hoc';
import { urlFor, client } from '../client';

interface IAbout {
  title: string,
  imageUrl: string
}

type AboutProps = {
  index: number,
  about: IAbout
}

const ServiceCard = ({ index, about }: AboutProps) => {
  return (
    <Tilt 
      className="xs:w-[250px] w-full"
      options={{
        max: 45, 
        scale: 1,
        speed: 450
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280-px] flex justify-evenly items-center flex-col">
          <img src={urlFor(about.imageUrl)} alt={about.title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{about.title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const [abouts, setAbouts] = useState<IAbout[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch<IAbout[]>(query)
      .then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Owerview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a seasoned developer with an arsenal of cutting-edge tools including React, TypeScript, Node.js, Tailwind, and Sass. I have a wealth of experience in crafting stunning web applications and websites using the latest and greatest in web development technologies and frameworks. Let me put my skills to work for you and bring your online presence to the next level!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        { abouts.map((about, index ) => (
          <ServiceCard key={about.title + index} index={index} about={about} />
        ))}
      </div>    
    </>
  )
}

export default SectionWrapper(About, "about");