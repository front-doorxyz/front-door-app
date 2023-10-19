export type JobProps = {
  id: string;
  roleTitle?: string;
  location?: string;
  bounty?: string;
  salary?: number;
  description?: string;
  companyName?: string;
  status?: string;
  date?: string;
  experience?: string;
  langaugeSpoken?: string;
  skills?: string;
  company: {
    id: string;
    name: string;
    description: string;
    logoUrl: string;
    coverUrl: string;
  };
};
