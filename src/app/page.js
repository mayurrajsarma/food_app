import Link from "next/link";
import ImageSlideShow from "../../components/Image_slideshow.js";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-[75rem] items-center">
        <div className="w-[40rem] h-[25rem] ">
          <ImageSlideShow/>
        </div>
        <div>
          <div className="text-[#ddd6cb] text-[1.5rem]">
            <h1 className="text-[2rem] font-extrabold font-montserrat uppercase tracking-[0.15rem] bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent font-montserrat">NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="flex text-[1.5rem] gap-4 ">
            <Link className="text-[#ff9b05] mt-4 pl-0 hover:text-[#f9b241] hover:bg-transparent" href='/community'>Join the community</Link>
            <Link className="inline-block rounded px-4 py-2 mt-4 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241]
             active:from-[#fd4715] active:to-[#f9b241]
             transition" href='/meals'>Explore Meals</Link>
          </div>
        </div>
      </header>
      {/* <main>
        <section>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main> */}
    </>
  );
}
