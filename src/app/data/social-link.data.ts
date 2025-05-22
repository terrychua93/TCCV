import { SocialLinkSchema } from "@data/schema/social-links.schema";
import { envelope } from '@icon/solid.icon'
import { linkedin } from '@icon/brand.icon'


const socialLinkData: SocialLinkSchema[] = [
  {
    name: 'LinkedIn',
    path: linkedin,
    link: 'https://www.linkedin.com/in/chua-zheng-hwan-2a730a250/',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: envelope,
    link: 'mailto:terrychua93@gmail.com',
    color: '#e74c3c',
  }
];

export default socialLinkData;
