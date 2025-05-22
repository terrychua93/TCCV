import { AboutMeSchema } from './schema/about-me.schema'


const aboutMeData: AboutMeSchema = {
  title: 'Who am i',
  position: 'Full-Stack Developer with Creative Frontend and Scalable Backend Skills',
  desc: `
    <div class="space-y-4 mb-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
      <p>
        I began my career as a front-end developer, focusing on building responsive and modern websites using
        <span class="font-medium text-indigo-600 dark:text-indigo-400">Angular</span> and
        <span class="font-medium text-indigo-600 dark:text-indigo-400">React</span>.
      </p>

      <p>
        As I grew professionally across various companies and projects, I sharpened my skills in delivering clean,
        maintainable, and scalable UI solutions.
      </p>

      <p>
        Over time, my capabilities expanded into full-stack development—working with
        <span class="font-medium text-indigo-600 dark:text-indigo-400">ASP.NET Core</span> to build
        <span class="font-medium">RESTful APIs</span>, managing databases, and designing robust data models.
      </p>

      <p>
        I frequently use
        <span class="font-medium">LINQ</span>,
        <span class="font-medium">Lambda expressions</span>, or
        <span class="font-medium">raw SQL queries</span> to retrieve and manipulate data efficiently.
      </p>
    </div>
  `,
  projectCount: 5,
  experienceCount: 5,
  contactInfo: [
    {
      label: 'Address',
      value: 'Block 511, Bukit Batok ST 52, 01-193 <br> (Currently residing in Singapore)'
    },
    {
      label: 'WhatsApp (SG)',
      value: '+65 8805 9226',
      link: 'https://wa.me/6588059226'
    },
    {
      label: 'WhatsApp (MY)',
      value: '+60 1110721993',
      link: 'https://wa.me/601110721993'
    },
    {
      label: 'Email',
      value: 'terrychua93@gmail.com',
      link: 'mailto:terrychua93@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/chua-zheng-hwan-2a730a2501',
      link: 'https://linkedin.com/in/chua-zheng-hwan-2a730a2501'
    },
    {
      label: 'Date / Place of Birth',
      value: '31 Dec 1993, Malacca'
    },
    {
      label: 'Nationality',
      value: 'Malaysian'
    },
    {
      label: 'Driving License',
      value: 'Yes'
    }
  ],
  personalQualityAndInterest: [
    {
      title: 'Hobbies',
      desc: `<p>
        In my free time, I enjoy staying updated on the latest 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">IT news</span> 
        and exploring new 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">technologies</span> 
        recommended by friends. I’m also passionate about staying active, regularly playing 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">basketball</span>, 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">badminton</span>, 
        and 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">running</span> 
        to maintain 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">physical fitness</span> 
        and stay 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">strong</span>.
      </p>`
    },
    {
      title: 'Key Of Strength',
      desc: `<p>
        I am 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">diligent</span>, 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">innovative</span>, 
        and 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">eager to learn</span>. 
        I value 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">honesty</span>, 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">perseverance</span>, 
        and a 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">strong work ethic</span>. 
        I'm 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">self-motivated</span>, 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">dedicated</span>, 
        and committed to delivering 
        <span class="font-medium text-indigo-600 dark:text-indigo-400">high-quality results</span>.
      </p>`
    }
  ],
  education: {
    institution: 'Multimedia University, Malacca',
    degree: 'Information Technology majoring in Security Technology',
    duration: 'June 2016 — Sept 2019',
    cgpa: '2.8'
  },
  languages: [
    { name: 'English', level: 4 },
    { name: 'Chinese', level: 3 },
    { name: 'Malay', level: 2 }
  ]
}

export default aboutMeData
