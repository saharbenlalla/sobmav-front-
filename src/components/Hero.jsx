import img from "../assets/20+_Modern_Glass_Balcony_Ideas_That_Will_Instantly_Elevate_Your_Outdoor_Space-removebg-preview.png";
export default function Hero() {
  return (
    <section className="bg-white pt-10 px-4">

      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden">

        {/* IMAGE */}
        <img
          src={img}
          alt="Luxury House"
          className="w-full h-[500px] md:h-[600px] object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* TEXT */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-semibold mb-4">
              Exceptional <br /> Living Starts Here
            </h1>

            <p className="text-lg opacity-90">
              Experience timeless architecture, exclusive locations, and luxury homes designed to inspire your next chapter.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}