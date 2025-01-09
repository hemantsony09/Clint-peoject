import React from "react";

function HomePage() {
  return (
    <div
      id="home"
      className="bg-[#FFF0D1] text-white h-screen flex items-center justify-center"
    >
      <div className="text-center text-[#3B3030]">
        <h1 className="text-4xl font-bold mb-4">Project</h1>
        <p className="text-lg mb-8 max-w-[900px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          cumque atque quis asperiores? Obcaecati sapiente unde minus? Porro,
          blanditiis officiis ipsam reprehenderit provident quibusdam amet.
          Quisquam perferendis voluptatibus eum id.
        </p>
        <a
          href="#about"
          className="bg-[#3B3030] text-[#FFF0D1] px-6 py-2 rounded shadow hover:bg-[#FFF0D1] hover:text-[#3b3030]"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default HomePage;
