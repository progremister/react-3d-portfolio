import { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion'
import "react-vertical-timeline-component/style.min.css";

import { styles } from '../styles';
import { SectionWrapper } from './hoc';
import { textVariant } from '../utils/motion';
import { client, urlFor } from '../client';

interface IExperience {
  title: string,
  company_name: string,
  icon?: string,
  icon_bg: string,
  startDate: string,
  endDate: string,
  points: {
    description: string
  }[];
}

type ExperienceProps = { experience: IExperience}

const ExperienceCard = ({ experience }: ExperienceProps) => {

  const startDateString = new Date(experience.startDate).toLocaleString('en-US', { month: 'short', year: 'numeric' }),
        endDateString = new Date(experience.endDate).toLocaleString('en-US', { month: 'short', year: 'numeric' });

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={`${startDateString} - ${experience.endDate ? endDateString : 'Present' }`}
      iconStyle={{ background: experience.icon_bg }}
      icon={
        experience.icon ? ( 
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={urlFor(experience.icon)}
              alt={experience.company_name}
              className="w-[70%] h-[70%] object-contain"
            />
          </div>
        ) : (
          ""
        )
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">{experience.company_name}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point) => (
            <li
              key={point.description}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point.description} 
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [experiences, setExperiences] = useState<IExperience[]>([]);

  useEffect(() => {
    const query = '*[_type == "experience"]';

    client.fetch<IExperience[]>(query)
      .then((data) => setExperiences(data));
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())
                      .map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "");