import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,FaPhone,
   FaEnvelope,
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
    top-7
    z-30
    hidden
    items-center
    gap-4
    sm:flex
    lg:right-20
    lg:top-8
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
    href="mailto:info.yatrivio@gmail.com"
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
    <span>info.yatrivio@gmail.com</span>
  </a>
</div>
        {/* Logo */}
        <div className="flex justify-center lg:justify-start pt-8">
          <img
            src={logo}
            alt="Yatrivio"
            className="
w-38
sm:w-32
md:w-40
lg:w-56
object-contain
"
          />
        </div>

        {/* Mobile Contact */}
<div
  className="
    mt-4
    flex
    flex-col
    items-center
    gap-2
    sm:hidden
  "
>
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
      transition-colors
      duration-300
      hover:text-white
    "
  >
    <FaPhone
      size={11}
      className="text-[#d6ff14]"
    />
    <span>+91 8107331011</span>
  </a>

  <a
    href="mailto:info.yatrivio@gmail.com"
    className="
      flex
      items-center
      gap-2
      text-xs
      font-medium
      tracking-wide
      text-white/75
      transition-colors
      duration-300
      hover:text-white
    "
  >
    <FaEnvelope
      size={12}
      className="text-[#d6ff14]"
    />
    <span>info.yatrivio@gmail.com</span>
  </a>
</div>

        {/* Hero */}
        <div
          className="
  mt-14
  md:mt-20
  lg:mt-24
  max-w-[900px]
      text-center
    lg:text-left
  animate-[fadeIn_1.2s_ease]
  "
        >
          {/* Main Heading */}
          <h1
            className="
 font-display
  text-white
  font-light
  uppercase
  whitespace-nowrap
  tracking-[0.02em]
  leading-[0.82]

 text-5xl
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
  mt-5 font-body
  text-white
  font-semibold
 max-w-xl
text-sm
sm:text-base
md:text-lg
leading-relaxed
  "
          >
            Your Journey to the World's Seventh Paradise Begins Soon
          </h2>
          {/* Paragraph */}
          <p
            className="
  mt-5 font-body
  max-w-[580px]
  text-[14px]
  leading-[2]
  text-white/65
  "
          >
            Discover handcrafted luxury journeys through breathtaking mountains,
            pristine forests, crystal-clear lakes, hidden waterfalls, and
            extraordinary destinations designed exclusively for travelers
            seeking unforgettable experiences.
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
    md:text-[18px]
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
    rounded-[22px] text-center
    border
    border-lime-400/25
    bg-[#0b3734]/45
    backdrop-blur-2xl
    px-7
    py-6
    shadow-[0_0_60px_rgba(0,0,0,.15)]
  "
>
  <h3
    className="
      font-display
      text-[22px] 
      md:text-[28px]
      font-light
      text-white
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
    md:text-[18px]
    font-bold
    text-black
    transition-all
    duration-300
    hover:bg-[#e4ff5a]
    hover:scale-[1.02]
  "
>
  Contact Our Travel Consultants
</a>
</div>

          {/* Social Icons */}
         <div className="mt-8 flex justify-center gap-4 lg:justify-start">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/yatrivio/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff14] hover:text-black"
  >
    <FaInstagram size={20} />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/yatrivio"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff14] hover:text-black"
  >
    <FaFacebookF size={20} />
  </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/yatrivio"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff14] hover:text-black"
  >
    <FaXTwitter size={20} />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@Yatrivio"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff14] hover:text-black"
  >
    <FaYoutube size={20} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/yatrivio"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ff14] hover:text-black"
  >
    <FaLinkedinIn size={20} />
  </a>
</div>


        </div>
      </div>
    </section>
  );
}
