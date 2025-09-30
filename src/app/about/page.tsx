"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage(): JSX.Element {
  const router = useRouter();

  return (
    <main className="min-h-screen px-6 md:px-24 py-16 bg-white text-black">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-10 px-4 py-2 border rounded-full text-sm md:text-base font-medium hover:bg-black hover:text-white transition"
      >
        ← Back
      </button>

      {/* Title */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About Me</h1>
        <p className="max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
          I’m Abel, an Indonesian Software Engineer based in New York City and a
          first-generation low-income graduate of Columbia University. I
          specialize in building digital products with emphasis on{" "}
          <span className="font-semibold text-gray-800">
            social impact and user experience
          </span>
          . My journey combines design thinking with engineering execution —
          helping transform ideas into meaningful products.
        </p>
      </section>

      {/* Profile Image + Bio */}
      <section className="flex flex-col md:flex-row gap-12 items-center mb-24">
        {/* Profile Image */}
        <div className="w-48 h-48 relative rounded-xl overflow-hidden shadow-md">
          <Image src="/abel-3.jpg" alt="Abel" fill className="object-cover" />
        </div>

        {/* Bio */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hailing from Jakarta, Indonesia, I immigrated to the United States
            at 11 years old with my mom and brother to pursue this thing we
            called the "American Dream." Growing up in a low-income household, I
            was blessed to receive a full-ride scholarship to attend Columbia
            University and made my move to New York City.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            With a background in both software engineering and design, I love
            crafting solutions that balance functionality and beauty. Whether
            it’s a web app, a mobile app, or a data-driven tool, I approach
            every project with curiosity and precision.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Beyond coding, I’m passionate about fitness, basketball, and
            building communities through tech. My mission is to leverage
            technology to create products that make life easier, smarter, and
            more connected.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {[
            "React / Next.js",
            "Node.js",
            "Tailwind CSS",
            "TypeScript",
            "Python",
            "SQL",
            "UI/UX Design",
            "AWS",
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-3 border rounded-lg shadow-sm bg-gray-50 text-gray-800 font-medium hover:bg-black hover:text-white transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Fun Section */}
      <section className="flex flex-col md:flex-row items-start gap-12">
        {/* Text */}
        <div className="max-w-2xl flex-1">
          <h2 className="text-2xl font-bold mb-6">Outside of Work</h2>
          <p className="text-gray-600 leading-relaxed">
            When I’m not coding, you’ll probably find me on a basketball court,
            snorkeling with sea turtles, or creating content around lifestyle,
            travel, and tech. I believe balance fuels creativity and I’m always
            looking for the next adventure to inspire my work.
          </p>
        </div>

        {/* Image Collage */}
        <div className="relative w-full md:w-[500px] h-[350px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/abel-4.JPEG"
            alt="Abel Outside of Work"
            fill
            className="object-contain md:object-cover"
          />
        </div>
      </section>
    </main>
  );
}
