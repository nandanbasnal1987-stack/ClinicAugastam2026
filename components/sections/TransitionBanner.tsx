import Image from "next/image";

/** Full-width illustration between the patient app and "Why Augastam" sections. */
export default function TransitionBanner() {
  return (
    <div className="banner">
      <Image
        src="/Images/transition_img.svg"
        alt="Transition illustration"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
