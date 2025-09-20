function Home() {
  // Club motto
  const motto = "Innovating for a Sustainable Future";
  
  // Past events data
  const pastEvents = [
    {
      id: 1,
      title: "Ralegan-Siddhi Visit",
      image: "/src/assets/visit2.jpeg",
      description: "Students collaborated to develop innovative tech solutions for environmental challenges."
    },
    {
      id: 2,
      title: "Amul Factory",
      image: "/src/assets/Amul visit.jpg",
      description: "A visit to the Amul factory to understand sustainable dairy practices and technology in agriculture."
    },
    {
      id: 3,
      title: "EWaste Collection Drive",
      image: "/src/assets/EWASTE.jpg",
      description: "A collaborative event focused on technological solutions for the UN Sustainable Development Goals."
    }
  ];
  
  // SDG categories
  const sdgCategories = [
    { id: 1, name: "No Poverty", color: "#E5243B" },
    { id: 2, name: "Zero Hunger", color: "#DDA63A" },
    { id: 3, name: "Good Health and Well-being", color: "#4C9F38" },
    { id: 4, name: "Quality Education", color: "#C5192D" },
    { id: 5, name: "Gender Equality", color: "#FF3A21" },
    { id: 6, name: "Clean Water and Sanitation", color: "#26BDE2" },
    { id: 7, name: "Affordable and Clean Energy", color: "#FCC30B" },
    { id: 8, name: "Decent Work and Economic Growth", color: "#A21942" },
    { id: 9, name: "Industry, Innovation and Infrastructure", color: "#FD6925" },
    { id: 10, name: "Reduced Inequality", color: "#DD1367" },
    { id: 11, name: "Sustainable Cities and Communities", color: "#FD9D24" },
    { id: 12, name: "Responsible Consumption and Production", color: "#BF8B2E" },
    { id: 13, name: "Climate Action", color: "#3F7E44" },
    { id: 14, name: "Life Below Water", color: "#0A97D9" },
    { id: 15, name: "Life on Land", color: "#56C02B" },
    { id: 16, name: "Peace, Justice and Strong Institutions", color: "#00689D" },
    { id: 17, name: "Partnerships for the Goals", color: "#19486A" }
  ];
  
  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* Hero Section with Clean Motto */}
      <section className="w-full bg-slate-900 relative">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              {motto}
            </h1>
            <div className="w-24 h-0.5 bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Club Introduction */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-relaxed">
            Welcome to TSCC
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The Techno Smart Campus Club is dedicated to fostering innovation in sustainable technology 
            and creating meaningful environmental impact through student-led initiatives.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Developing cutting-edge solutions for environmental challenges
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Building a diverse network of tech enthusiasts and environmental advocates
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating meaningful change through technology-driven initiatives
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Past Events */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Past Events
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {pastEvents.map((event) => (
              <div key={event.id} className="space-y-6">
                <div className="aspect-[4/3] bg-gray-100 rounded-none overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 17 SDGs Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Our Work Aligns with the 17 SDGs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The Sustainable Development Goals are the blueprint to achieve a better and more sustainable future for all.
            </p>
          </div>
          
          {/* SDGs Grid - Pure Minimalist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 md:gap-16">
            {sdgCategories.map((sdg) => (
              <div
                key={sdg.id}
                className="group text-center space-y-3 hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Minimalist Number */}
                <div className="space-y-2">
                  <div 
                    className="text-6xl font-extralight tracking-wider opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: sdg.color }}
                  >
                    {sdg.id}
                  </div>
                  
                  {/* Thin accent line */}
                  <div 
                    className="w-8 h-px mx-auto group-hover:w-12 transition-all duration-500"
                    style={{ backgroundColor: sdg.color }}
                  ></div>
                </div>
                
                <p className="text-sm text-gray-500 font-light leading-tight max-w-32 mx-auto group-hover:text-gray-700 transition-colors duration-300">
                  {sdg.name}
                </p>
              </div>
            ))}
          </div>

          {/* Simple bottom spacing */}
          <div className="mt-24"></div>
        </div>
      </section>

      {/* Footer Spacer */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            Techno Smart Campus Club - Building Tomorrow's Solutions Today
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;