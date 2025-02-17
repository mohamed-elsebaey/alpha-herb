"use client";
import React, { useActionState, useState } from "react";

import ProfileAvatar from "./ProfileAvatar";

import { useFormStatus } from "react-dom";
import { profileEditActions } from "@/app/profile/_actions/profileEditActions";

function EditProfile({ userData }: { userData: User }) {
  const [, formAction] = useActionState(profileEditActions, {});

  const names = (userData.name || "").split(" ");
  const first_name = names[0] || "";
  const last_name = names.slice(1).join(" ") || "";

  const [firstName, setFirstName] = useState(first_name || "");
  const [lastName, setLastName] = useState(last_name || "");

  const [country, setCountry] = useState(userData.country || "");
  const [phone, setPhone] = useState(userData.phone || "");

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value.replace(/\s/g, ""));
  };
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value.replace(/\s/g, ""));
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value.replace(/\s/g, ""));
  };

  return (
    <section className=" bg-gradient-to-r from-primary/10 to-primary2/10 py-28 lg:py-[90px]">
      <div className="w-full mx-auto max-w-[750px] overflow-hidden rounded-lg bg-white px-10 py-16  sm:px-12 md:px-[60px]-2">
        <form
          className="w-full py-1 md:w-2/3 lg:w-3/4 mx-auto"
          action={formAction}
        >
          <ProfileAvatar imagePath={userData.profilePath || ""} addButtons />

          <div className="items-center mt-8 sm:mt-14 text-primary">
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <Input
                  label="first name"
                  name="first_name"
                  type="text"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                />
              </div>

              <div className="w-full">
                <Input
                  label="last name"
                  type="text"
                  name="last_name"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                />
              </div>
            </div>

            <div className="mb-2 sm:mb-6">
              <Input
                label="Email"
                readOnly
                type="email"
                name="email"
                value={userData.email}
                placeholder="your.email@mail.com"
                required
              />
            </div>
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <Input
                  label="Phone Number"
                  type="text"
                  name="phone"
                  placeholder="Your phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={14}
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <Input
                  label="Country"
                  type="text"
                  name="country"
                  placeholder="Your country"
                  value={country}
                  onChange={handleCountryChange}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <SubmitButton text="Save" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditProfile;

const Input = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  readOnly,
  maxLength,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  readOnly?: boolean;
  maxLength?: number;
}) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-primary/90 ">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="bg-primary/5 border border-primary/30 text-primary/90 text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50 block w-full p-2.5 shadow-sm transition duration-200  focus:outline-none focus:ring "
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
        maxLength={maxLength}
      />
    </>
  );
};


function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full cursor-pointer rounded-md border border-primary bg-primary py-2 px-4 text-base font-medium text-white transition hover:bg-opacity-90"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="w-full flex items-center justify-center h-full gap-2">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
          Loading...
        </div>
      ) : (
        `${text}`
      )}
    </button>
  );
}