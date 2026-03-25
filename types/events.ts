export interface OpenHouseEvent {
  id: string;
  title: string;
  date: string;
  duration: number;
  description: string;
  maxAttendees?: number;
  location: string;
  contactPerson: string;
  contactEmail: string;
  registrations: Registration[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Registration {
  id: string;
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  message?: string;
  registeredAt: string;
}

export interface SignupInput {
  eventId: string;
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  gdprConsent: boolean;
}
