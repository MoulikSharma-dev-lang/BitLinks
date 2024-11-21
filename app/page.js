import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>The best URL shortener in the market</h1>
      <br />
      <p className="text-center">BitLinks is a very straight forward URL shortener for all people living in this world <br /> and having an internet connection . Anyone from a 5 year old to a software engineer can <br /> create short URL for their efficiency and productivity . </p>
      <br />
      <div className="links text-center">
        <Link href={"/about"} className='font-bold text-xl'><button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">About</button></Link>
        <Link href={"/generate"} className='font-bold text-xl'><button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">Generate</button></Link>
      </div>
    </div>
  );
}