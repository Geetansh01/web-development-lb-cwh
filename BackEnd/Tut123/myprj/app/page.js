import Image from "next/image";

export default function Home() {
  return (
    <>
      This is Home page
      <div>
        <h1>For Local images, coming from local folder</h1>
        <span>With img tag</span>
        <img width={"100px"} src="/scenery.jpg" alt="img tag" />

        <span>With Nextjs Image Component</span>
        <Image
          width={100}
          height={100}
          src="/scenery.jpg"
          alt="Nextjs Image Component"
        />
      </div>
      <div>
        <h1>For Remote images, coming from remote servers</h1>
        <span>With img tag</span>
        <img
          width={"100px"}
          src="https://wallpapercave.com/wp/wp2506840.jpg"
          alt="scenery"
        />

        <span>With Nextjs Image Component</span>
        <Image
          src="https://wallpapercave.com/wp/wp2506840.jpg"
          width={100}
          height={100}
          alt="scenery"
        />
      </div>
    </>
  );
}
