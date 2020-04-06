export class Contact {
  id: number;
  name: string;
  phone: number;
}

export class ContactResponse {
  message: string;
  data: Contact;
}