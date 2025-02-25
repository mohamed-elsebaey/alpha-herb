import Image from "next/image";
import defaultProfilePicture from "@/public/profile-pictures/profile.png";

async function AuthorSection({ profilePath }: { profilePath: string }) {

  return (
    <div className="rounded-full h-8 w-8 overflow-hidden border border-gray-200">
      <Image
        width={120}
        height={120}
        alt="Alpha"
        src={profilePath || defaultProfilePicture}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

export default AuthorSection;
