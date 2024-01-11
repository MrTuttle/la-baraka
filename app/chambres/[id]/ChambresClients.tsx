import DialogRoomRequest2 from "@/app/components/DialogRoomRequest/DialogRoomRequest2";
import BKDayPicker from "@/app/components/datePicker/BKDayPicker";
import DetailRoomSwiperSlide from "@/app/components/swiper/DetailRoomSwiperSlide";
import { Flex } from "@radix-ui/themes";
import ConfirmationDemandForm from "../_components/ConfirmationDemandForm";
import DeleteRoomButton from "./DeleteRoomButton";

type Reservations = {
  id: number;
  checkIn: Date;
  checkOut: Date;
  status: string;
  assignedToRoomId: number;
  assignedToUserRoomId: number;
};

interface Props {
  imagesRoom: {
    id: number;
    publicId: string;
    alt: string;
    cover: boolean;
    assignedToRoomId: number;
    assignedToMenuId: number | null;
  }[];
  room: {
    id: number;
    title: string;
    description: string;
    price: number;
  };

  bookedDaysRange: Date[];
  bookedDays: Date[];
  bookedDaysToEmail: string;
  checkIn: Date;
  checkOut: Date;
}

export function ChambresClients({
  imagesRoom,
  bookedDaysRange,
  bookedDays,
  bookedDaysToEmail,
  room,
  checkIn,
  checkOut,
}: Props) {
  <Flex direction="column" align="center" className="mx-auto">
    <DetailRoomSwiperSlide listImages={imagesRoom} />
    <Flex direction="column" className="mx-4">
      <div className="py-4">
        <p>Id: {room.id}</p>
        <p>{room.title}</p>
        <p>{room.description}</p>
      </div>
    </Flex>

    <Flex direction="column" align="center" className="p-8">
      {/* <BKDayPicker
          bookedDays={[new Date(2023, 11, 20), new Date(2023, 11, 23)]}
        /> */}

      <BKDayPicker
        bookedDays={bookedDaysRange}
        bookedDaysRange={bookedDays}
        // onStartDay={handleStartDay}
        // onEndDay={handleEndDay}
      />
    </Flex>

    <div className="pt-10 pb-32">
      <DeleteRoomButton roomId={room.id} />
    </div>
    <div className="pt-10 pb-32">
      <p className="pt-4 text-gray-400">
        <strong>
          reservation (Bd) : <br />
        </strong>
      </p>
      <p>
        <strong>
          bookedDay : <br />
        </strong>
        {bookedDays.map((day, index) => (
          <span key={index}>
            {day.toDateString()}
            <br />
          </span>
        ))}
      </p>

      <ConfirmationDemandForm
        title={room.title}
        roomId={room.id}
        bookedDaysToEmail={bookedDaysToEmail}
      />
    </div>
    <div
      className="w-full bg-white h-20 border-t-2
        fixed left-0 bottom-0
        flex justify-between items-center z-50
        "
    >
      <div className="p-4">
        {room.price && (
          <p>
            <strong>{room.price} € </strong>par nuits
          </p>
        )}

        <p>8-9 jan</p>
      </div>
      <div className="p-4">
        {/* <button className=" px-14 bg-red-500 hover:bg-red-600 transition-all p-4 rounded-md text-white">
            Réserver
          </button> */}
        {/* <UserRoomForm
            title={room.title}
            roomId={room.id}
            bookedDaysToEmail={bookedDaysToEmail}
          /> */}
        <DialogRoomRequest2
          checkIn={checkIn}
          checkOut={checkOut}
          bookedDaysToEmail={bookedDaysToEmail}
          title={room.title}
          roomId={room.id}
        />

        {/* <SendBookingButton title={room.title} roomId={room.id} /> */}
      </div>
    </div>
  </Flex>;
}
