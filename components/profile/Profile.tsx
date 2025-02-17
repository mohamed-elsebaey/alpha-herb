"use client";


import ProfileAvatar from "./ProfileAvatar";
import Link from "next/link";

function Profile({ userData }: { userData: User }) {
  return (
    <section className=" bg-gradient-to-r from-primary/10 to-primary2/10 py-28 lg:py-[90px]">
      <div className="w-full mx-auto max-w-[750px] overflow-hidden rounded-lg bg-white px-10 py-16  sm:px-12 md:px-[60px]-2">
        <div className="w-full py-1 md:w-2/3 lg:w-3/4 mx-auto">
          <div className="flex justify-center flex-col items-center gap-4 text-primary">
            <ProfileAvatar imagePath={userData.profilePath || ""} />
            <div className="text-center">
              <h3>{userData.name}</h3>
            </div>
          </div>

          <div className="items-center mt-6 sm:mt-10 text-primary">
            <Label userDataKey="Email" userDataValue={userData.email} />
            <Label
              userDataKey="Phone"
              userDataValue={userData.phone || "None"}
            />
            <Label userDataKey="Country" userDataValue={userData.country || "None"} />
            {/*  */}
          </div>
          <div className="mt-6 flex justify-end">
            <Link
              href="/profile/edit"
              className="py-2 px-5 text-base font-medium text-primary/90 focus:outline-none bg-white rounded-lg border border-primary/20 hover:bg-primary/10 hover:text-primary focus:z-10 focus:ring-4 focus:ring-primary/20"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

const Label = ({
  userDataKey,
  userDataValue,
}: {
  userDataKey: string;
  userDataValue: string;
}) => {
  return (
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-16 sm:px-6 border-t-[1px] border-secondary">
      <h2 className="text-sm  font-bold text-primary/90 border-r-[1px] border-secondary">
        {userDataKey}
      </h2>
      <h3 className="mt-1 text-sm font-medium sm:mt-0 sm:col-span-2">
        {userDataValue}
      </h3>
    </div>
  );
};
