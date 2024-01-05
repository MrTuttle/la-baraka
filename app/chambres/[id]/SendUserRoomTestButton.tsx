// TEST ABANDONNÉ
import React from "react";

interface UserRoom {
  firstName: string;
  name: string;
  email: string;
  phone: string;
}

export default function SendUserRoomTestButton() {
  const jacky: UserRoom = {
    firstName: "jacky",
    name: "bebe",
    email: "nada",
    phone: "00 00 00",
  };
  async function postUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const firstName = formData.get("firstName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    console.log("FORMADATAS -> ", { name, firstName, email, phone });
    const rawFormData = {
      firstName: formData.get("firstName"),
      name: formData.get("firstName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    };
  }

  return (
    <>
      <div>SendUserRoomTestButton</div>
      <form action={postUser} method="POST">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            prénom
          </label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            nom
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            tél.
          </label>

          <input
            type="text"
            id="phone"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          ></input>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            email :
          </label>

          <input
            type="text"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          ></input>
        </div>
        <button type="submit">bouton</button>
      </form>
    </>
  );
}

// export default SendUserRoomTestButton;
