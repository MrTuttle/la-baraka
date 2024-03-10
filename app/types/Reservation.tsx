import UserRoom from "./UserRoom";
export default interface Reservation {
  id: number;
  checkIn: Date;
  checkOut: Date;
  status: "VACANT" | "OCCUPIED" | "IN_PROGRESS";
  assignedToRoomId: number;
  assignedToUserRoomId: number;
  joker: string; // artifact to detect where is my type origin
  // assignedToRoom: Room[];
  assignedToUserRoom: UserRoom[]; // take UserRoom.ts in the same directory
}
