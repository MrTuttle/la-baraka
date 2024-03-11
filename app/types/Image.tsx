import Room from "./Room";
export default interface Image {
  id: number;
  publicId: string;
  alt: string;
  cover: boolean | false;
  assignedToRoomId: number;
  assignedToRoom: Room;
  assignedToMenuId?: number;
  // assignedToMenu?: Menu;
}
