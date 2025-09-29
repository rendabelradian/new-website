export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen flex flex-col px-6 md:px-24 bg-white text-black transition-colors duration-300">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center py-8">
        <h1 className="text-3xl font-bold">
          <span className="text-gray-400">Rendabel</span>
          Radian<span className="text-black">.</span>
        </h1>

        <div className="flex items-center gap-6">
          <button className="px-6 py-2 border rounded-full flex items-center gap-2 text-lg font-medium hover:bg-black hover:text-white transition">
            Let’s Talk →
          </button>
          <button className="w-10 h-10 border rounded-full flex items-center justify-center text-lg">
            ☰
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-start justify-between w-full mt-28">
        {/* Left: Intro text */}
        <div className="max-w-7xl">
          <p className="text-2xl mb-6 font-normal">Hello! I’m Abel.</p>
          <h2 className="font-extrabold leading-[1.1] tracking-tight text-[96px] md:text-[110px]">
            Building digital <br />
            products with emphasis <br />
            on{" "}
            <span className="text-gray-400">social impact</span>
          </h2>

          <div className="flex items-start gap-8 mt-14">
            <button className="px-10 py-5 bg-black text-white rounded-full flex items-center gap-3 text-xl font-semibold hover:bg-gray-800 transition">
              Let’s Talk →
            </button>
            <p className="max-w-md text-gray-600 font-normal text-lg leading-relaxed">
              A multidisciplinary engineer harnessing the power of software and
              design to achieve impactful societal goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
