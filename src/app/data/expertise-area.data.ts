import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, monitor, speed, palette, data } from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    percent: '90%',
    name: 'Web Development',
    description: 'Building responsive and dynamic websites using modern web technologies.'
  },
  {
    icon: api,
    percent: '60%',
    name: 'API Development',
    description: 'Creating robust APIs for seamless data exchange and integration.'
  },
  {
    icon: palette,
    percent: '70%',
    name: 'UI Component Framworks',
    description: 'Designing reusable UI components for consistent user interfaces.'
  },
  {
    icon: monitor,
    percent: '30%',
    name: 'UX/UI Design',
    description: 'Crafting intuitive and visually appealing user experiences.'
  },
  {
    icon: speed,
    percent: '75%',
    name: 'Performance Optimization',
    description: 'Enhancing application performance for faster load times and better user experience.'
  },
  {
    icon: data,
    percent: '20%',
    name: 'Refine SQL',
    description: 'Optimizing SQL queries for efficient data retrieval and manipulation.'
  },
]

export default expertiseAreaData
