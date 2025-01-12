
function HomePage() {
  return (
    <div
      id="home"
      className="bg-[#FFF0D1] text-white h-screen flex items-center justify-center"
    >
      <div className="text-center text-[#3B3030]">
        {/* Animated Heading */}
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">DECOR HUB</h1>

        {/* Animated Paragraph */}
        <p className="text-lg mb-8 max-w-[900px] p-4 animate-fade-in delay-200">
        At DECOR HUB, we believe that every event deserves to be celebrated with style and flair. We are a team of passionate event decorators with years of experience in transforming spaces into magical settings.
</p>

        {/* Animated Button */}
        <a
          href="#about"
          className="bg-[#3B3030] text-[#FFF0D1] px-6 py-2 rounded shadow animate-fade-in delay-400"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default HomePage;
