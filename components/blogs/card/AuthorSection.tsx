import { getAuthorDataById } from "@/db/db";
import Image from "next/image";

async function AuthorSection({ id }: { id: any }) {
  const authorData: any = await getAuthorDataById(id);
  const authorName = authorData[0].name;
  const authorProfilePath = authorData[0].profilePath;
  return (
    <div className="rounded-full h-8 w-8 overflow-hidden">
      <Image
        width={120}
        height={120}
        alt="Alpha"
        src={authorProfilePath}
        className="relative inline-block"
        loading="lazy"
      />
    </div>
  );
}

export default AuthorSection;
