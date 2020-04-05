export interface Contact {
  id?: number;
  name: string;
  phone: number;
}

export interface ContactResponse {
  message: string;
  data: Contact;
}