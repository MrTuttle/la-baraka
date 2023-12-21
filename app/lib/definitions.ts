export type Image = {
  id: number;
  publicId: string;
  alt: string;
  cover: boolean;
  assignedToRoomId: number;
};

export type Reservation = {
  date: Date;
  assignedToRoomId: number;
};

export type Room = {
  id: number;
  title: string;
  description: string;
  price?: number | null;
  assignedRoom: Image[];
  reservationDates?: Reservation[];
};
