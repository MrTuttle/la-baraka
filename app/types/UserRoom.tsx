export default interface UserRoom {
  id: number;
  firstName: string | null;
  name: string | null;
  email: string | null;
  phone: string;
  emailVerified: Date | null;
  joker: string;
}
