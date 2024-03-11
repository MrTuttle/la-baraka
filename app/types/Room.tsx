import Reservation from "./Reservation";
export default interface Room {
  id: number;
  title: string;
  description: string;
  price: number;
  reservationDates: Reservation[];
  // assignedRoom: Image[]
  jokerReservation: string;
}
