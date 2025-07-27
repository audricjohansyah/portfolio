import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="rounded-full overflow-hidden w-40 h-40 mx-auto shadow-lg">
      <Image src="/profile.jpg" alt="Audric's photo" width={160} height={160} />
    </div>
  );
}