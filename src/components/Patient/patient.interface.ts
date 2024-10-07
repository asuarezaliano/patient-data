export interface Patient {
  id: string;
  name: string;
  createdAt: Date;
  description: string;
  website: string;
  avatar: string;
}

export interface PatientDataAdded {
  name: string;
  description: string;
  website: string;
  avatar: string;
}

export interface ToastProps {
  message: string;
  isSuccess: boolean;
}
