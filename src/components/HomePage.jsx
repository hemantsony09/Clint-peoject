import React from "react";

function HomePage() {
  return (
    <div
      id="home"
      className="bg-[#FFF0D1] text-white h-screen flex items-center justify-center"
    >
      <div className="text-center text-[#3B3030]">
        {/* Animated Heading */}
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">Project</h1>

        {/* Animated Paragraph */}
        <p className="text-lg mb-8 max-w-[900px] animate-fade-in delay-200">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          cumque atque quis asperiores? Obcaecati sapiente unde minus? Porro,
          blanditiis officiis ipsam reprehenderit provident quibusdam amet.
          Quisquam perferendis voluptatibus eum id.
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
