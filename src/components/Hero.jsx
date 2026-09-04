import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

import bg from "../assets/images/bg.webp";
import logo from "../assets/images/logo.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#062c29]">
      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          brightness-[0.7]
          contrast-110
          saturate-[0.8]
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0D3F3D]/70" />

      {/* Inner Shadow */}
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.45)]" />

      {/* Top Glow */}
      <div className="absolute right-0 top-0 h-[45%] w-[45%] bg-lime-300/10 blur-[150px]" />

      {/* Left Glow */}
      <div className="absolute -left-40 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-lime-300/10 blur-[180px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-[-180px] left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-700/10 blur-[200px]" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 sm:px-8 md:px-12 lg:px-20">

        {/* Top Right Contact - Tablet & Desktop */}
        <div
          className="
            absolute
            right-5
            top-11
            z-30
            hidden
            items-center
            gap-4
            sm:flex
            lg:right-20
            lg:top-12
          "
        >
          {/* Phone */}
          <a
            href="tel:+918107331011"
            className="
              flex
              items-center
              gap-2
              text-xs
              font-medium
              tracking-wide
              text-white/75
              transition-all
              duration-300
              hover:text-white
              md:text-sm
            "
          >
            <FaPhone
              size={12}
              className="text-[#d6ff14]"
            />

            <span>+91 8107331011</span>
          </a>

          <span className="h-5 w-px bg-white/20" />

          {/* Email */}
          <a
            href="mailto:yatrivio@gmail.com"
            className="
              flex
              items-center
              gap-2
              text-xs
              font-medium
              tracking-wide
              text-white/75
              transition-all
              duration-300
              hover:text-white
              md:text-sm
            "
          >
            <FaEnvelope
              size={13}
              className="text-[#d6ff14]"
            />

            <span>yatrivio@gmail.com</span>
          </a>
        </div>

        {/* Logo */}
        <div
          className="
            flex
            items-start
            justify-between
            pt-8
            sm:justify-start
            lg:pt-8
          "
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Yatrivio"
            className="
              w-32
              object-contain
              sm:w-32
              md:w-40
              lg:w-56
            "
          />

          {/* Mobile Contact */}
          <div
            className="
              flex
              flex-col
              items-end
              gap-2
              pt-1
              sm:hidden
            "
          >
            {/* Phone */}
            <a
              href="tel:+918107331011"
              className="
                flex
                items-center
                gap-2
                text-[11px]
                font-medium
                tracking-wide
                text-white/75
              "
            >
              <FaPhone
                size={10}
                className="text-[#d6ff14]"
              />

              <span>+91 8107331011</span>
            </a>

            {/* Email */}
            <a
              href="mailto:yatrivio@gmail.com"
              className="
                flex
                items-center
                gap-2
                text-[11px]
                font-medium
                tracking-wide
                text-white/75
              "
            >
              <FaEnvelope
                size={11}
                className="text-[#d6ff14]"
              />

              <span>yatrivio@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Hero */}
        <div
          className="
            mt-14
            max-w-[900px]
            text-center
            animate-[fadeIn_1.2s_ease]
            md:mt-20
            lg:mt-24
            lg:text-left
          "
        >
          {/* Main Heading */}
          <h1
            className="
              font-display
              whitespace-nowrap
              text-5xl
              font-light
              uppercase
              tracking-[0.02em]
              leading-[0.82]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-[7rem]
            "
          >
            COMING SOON
          </h1>

          {/* Subtitle */}
          <h2
            className="
              mt-5
              max-w-xl
              font-body
              text-sm
              font-semibold
              leading-relaxed
              text-white
              sm:text-base
              md:text-lg
            "
          >
            Your Journey to the World's Seventh Paradise Begins Here
          </h2>

          {/* Paragraph */}
          <p
            className="
              mt-5
              max-w-[580px]
              font-body
              text-[14px]
              leading-[2]
              text-white/65
            "
          >
            Discover handcrafted luxury journeys through breathtaking mountains,
            pristine forests, crystal-clear lakes, stunning beaches, hidden
            waterfalls, and extraordinary destinations designed exclusively for
            travelers seeking unforgettable experiences.
          </p>

          {/* Notify Me */}
          <div className="mt-6">
            <a
              href="https://forms.gle/JrXxg8ScxQpb1mEX8"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/30
                bg-white/10
                px-8
                text-[14px]
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-[1.02]
                hover:border-white/50
                hover:bg-white/20
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                active:translate-y-0
                active:scale-100
                md:text-[18px]
              "
            >
              Notify Me
            </a>
          </div>

          {/* Contact CTA */}
          <div
            className="
              mt-8
              w-full
              max-w-[520px]
              rounded-[22px]
              border
              border-lime-400/25
              bg-[#0b3734]/45
              px-7
              py-6
              text-center
              backdrop-blur-2xl
              shadow-[0_0_60px_rgba(0,0,0,.15)]
            "
          >
            <h3
              className="
                font-display
                text-[22px]
                font-light
                text-white
                md:text-[28px]
              "
            >
              Plan Your Perfect Journey
            </h3>

            <a
              href="https://forms.gle/BimF7pPSpnsHSGz46"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mx-auto
                mt-6
                flex
                h-12
                w-full
                max-w-[320px]
                items-center
                justify-center
                rounded-xl
                bg-[#d6ff14]
                px-6
                text-center
                text-[14px]
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-[#e4ff5a]
                md:text-[18px]
              "
            >
              Contact Our Travel Consultants
            </a>
          </div>
{/* Social Icons + Address */}
<div
  className="
    mt-8
    flex
    flex-col
    items-center
    gap-6 mb-6
    lg:flex-row
    lg:items-center
    lg:justify-start
  "
>
  {/* Social Icons */}
  <div className="flex gap-4">
    {/* Instagram */}
    <a
      href="https://www.instagram.com/yatrivio/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff14] hover:text-black"
    >
      <FaInstagram size={20} />
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/yatrivio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff14] hover:text-black"
    >
      <FaFacebookF size={20} />
    </a>

    {/* X */}
    <a
      href="https://x.com/yatrivio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="X"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff14] hover:text-black"
    >
      <FaXTwitter size={20} />
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/@Yatrivio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff14] hover:text-black"
    >
      <FaYoutube size={20} />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/yatrivio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff14] hover:text-black"
    >
      <FaLinkedinIn size={20} />
    </a>
  </div>

  {/* Divider - Desktop */}
  <span className="hidden h-11 w-px bg-white/20 lg:block" />

  {/* Address */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=68%2C%20MB%20Complex%2C%201st%20Floor%2C%20Bhoganahalli%20Main%20Rd%2C%20Kadubeesanahalli%2C%20Panathur%2C%20Bengaluru%2C%20Karnataka%20560087"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      max-w-[420px]
      items-start
      gap-3
      text-left
      text-white/70
      transition-colors
      duration-300
      hover:text-white
    "
  >
    <FaLocationDot
      size={16}
      className="mt-1 shrink-0 text-[#d6ff14]"
    />

    <span className="text-[12px] font-medium leading-[1.7] tracking-wide md:text-[13px]">
      #68, MB Complex, 1st Floor, Bhoganahalli Main Rd,
      <br />
      Panathur, Bengaluru, Karnataka – 560087
    </span>
  </a>
</div>
        </div>
      </div>
    </section>
  );
}