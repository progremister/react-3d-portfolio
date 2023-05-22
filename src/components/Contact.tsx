import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from './hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    
    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_h47ak47',
      'template_zy2fh47', 
      {
        from_name: form.name,
        to_name: 'Dmytro',
        from_email: form.email,
        to_email: 'kolosovskyi.dmytro@gmail.com',
        message: form.message
      }, 
      '1Lmuo44Dlt5Z2GxzZ')
      .then(() => {
        setLoading(false);
        alert('I appreciate your opinion! I\'ll get you back as soon as possible.');
        setForm({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert("Oops! Something went wrong.");
      });
  }

  return (
    <div className="xl:ml-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div   
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <button type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");