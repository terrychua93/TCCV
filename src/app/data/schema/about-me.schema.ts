export interface AboutMeSchema{
  title: string,
  position: string,
  desc: string,
  projectCount: number,
  experienceCount: number,
  contactInfo: ContactInfoItem[],
  personalQualityAndInterest: PersonalQualityAndInterestSchema[],
  education: {
    institution: string;
    degree: string;
    duration: string;
    cgpa: string;
  };
  languages: {
    name: string;
    level: number; // scale from 1 to 5
  }[];
}


export interface ContactInfoItem {
  label: string;
  value: string | string[];
  link?: string | string[];
}

export interface PersonalQualityAndInterestSchema{
  title: string,
  desc: string,
}

