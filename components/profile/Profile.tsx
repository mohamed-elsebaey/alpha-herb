"use client";
import { useFormStatus } from "react-dom";
import { useActionState, useState } from "react";

import { profileEditActions } from "@/actions/profileEditActions";
import ProfileAvatar from "./ProfileAvatar";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="text-white bg-primary/70  hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-primary/30 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-gray-300 focus:border-primary "
      disabled={pending}
    >
      {!pending ? "Save" : "Loading ..."}
    </button>
  );
}

function Profile({ userData }: { userData: User }) {
  // const [formState, formAction] = useActionState(profileEditActions, {});
  const [, formAction] = useActionState(profileEditActions, {});

  const names = (userData.name || "").split(" ");
  const first_name = names[0] || "";
  const last_name = names.slice(1).join(" ") || "";

  const [firstName, setFirstName] = useState(first_name);
  const [lastName, setLastName] = useState(last_name);
  const [country, setCountry] = useState(userData.country || "");
  const [phone, setPhone] = useState(userData.phone || "");

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value.replace(/\s/g, ""));
  };
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value.replace(/\s/g, ""));
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value.replace(/\s/g, ""));
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value.replace(/\s/g, ""));
  };

  return (
    <section className=" bg-gradient-to-r from-primary/10 to-primary2/10 py-28 lg:py-[120px]">
      <div className="w-full mx-auto max-w-[1000px] overflow-hidden rounded-lg bg-white px-10 py-16  sm:px-12 md:px-[60px]-2">
        <form
          className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mx-auto"
          action={formAction}
        >
          <ProfileAvatar imagePath={userData.profilePath || ""} />

          <div className="items-center mt-8 sm:mt-14 text-primary">
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-primary/90 ">
                  first name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="bg-primary/5 border border-primary/30 text-primary/90 text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50 block w-full p-2.5 "
                  placeholder="Your first name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                />
              </div>

              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-primary/90 ">
                  last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="bg-primary/5 border border-primary/30 text-primary/90 text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50 block w-full p-2.5 "
                  placeholder="Your last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                />
              </div>
            </div>

            <div className="mb-2 sm:mb-6">
              <label className="block mb-2 text-sm font-medium text-primary/90 ">
                Email
              </label>
              <input
                readOnly
                type="email"
                id="email"
                name="email"
                value={userData.email}
                // defaultValue={userData.email}
                className="bg-primary/5 border border-primary/30 text-primary/90 text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50 block w-full p-2.5 "
                placeholder="your.email@mail.com"
                required
              />
            </div>
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-primary/90 ">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="bg-primary/5 border border-primary/30 text-primary/90 text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50 block w-full p-2.5 "
                  placeholder="Your country"
                  value={country}
                  onChange={handleCountryChange}
                  required
                />
              </div>

              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-primary/90 ">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="bg-primary/5 border border-primary/30 text-primary/90 text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50 block w-full p-2.5 "
                  placeholder="Your phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={14}
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <SubmitButton />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;
