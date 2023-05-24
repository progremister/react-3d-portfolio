import React, { useState, useEffect } from 'react';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from './hoc';
import { client, urlFor } from '../client';

export interface ISkill {
  name: string,
  icon: string
}

const Tech = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => setSkills(data));
  }, [])
  

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {skills.map((skill)=>(
        <div className="w-28 h-28" key={skill.name}>
          <BallCanvas icon={urlFor(skill.icon)}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");