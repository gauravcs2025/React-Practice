import React from "react";
export default function Hero() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-around
    min-h-[90vh] px-4 py-8 md:px-16
    bg-slate-100 text-slate-800 md:text-left text-center"
    >
      <Content
        Role="Fullstact Developer"
        Name="Gaurav Singh"
        Description="I am a FullStack Deveoper with solid skills in MERN stack currently exploring devops"
      />
      <Picture />
    </div>
  );
}

function Content({ Role, Name, Description }) {
  return (
    <div className="max-w-2xl md:order-1">
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">
        {Role}
      </h1>
      <h3 className="text-2xl md:text-3xl font-medium text-blue-600 mb-6">
        {Name}
      </h3>
      <p className="text-lg leading-relaxed text-gray-600">{Description}</p>
    </div>
  );
}
function Picture() {
  return (
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Propfile Picture"
        className="w-48 h-48 md:w-72 rounded-full object-cover md:h-72 border-[7px] border-white shadow-xl mb-8 md:mb-0 md:order-2"
      />
  );
}
