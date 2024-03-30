import React from 'react';

function Life() {
  return (
    <div className="flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-4">My Life</h1>
      <p className="text-lg mb-8">Here, you can learn more about my personal life, hobbies, interests, and anything else I'm passionate about outside of work.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <LifeCard 
          title="Hiking Adventures" 
          description="Explore the breathtaking beauty of nature through my hiking adventures. From mountain summits to lush forests, I love to spend time outdoors and discover new trails."
          imageUrl="https://img.freepik.com/free-photo/men-women-hiking-mountain-peak-together-generated-by-ai_188544-31096.jpg"
        />
        <LifeCard 
          title="Photography" 
          description="Capture the beauty of the world through my lens. Photography is not just a hobby for me; it's a way to freeze moments in time and express my creativity."
          imageUrl="https://assets-global.website-files.com/5f7a5e204f25f20dc72567dc/6598375cecdcdd5fc5f48e46_sm-cta-block.webp"
        />
        <LifeCard 
          title="Cooking Experiments" 
          description="Embark on a culinary journey with me as I experiment with different recipes and cuisines. Cooking is not only about preparing food; it's an art form that allows me to express my creativity and share delicious meals with loved ones."
          imageUrl="https://www.liketocook.com/wp-content/uploads/2017/08/a-man-cooking.jpg"
        />
        {/* Add more LifeCard components for additional aspects of your life */}
      </div>
    </div>
  );
}

function LifeCard({ title, description, imageUrl }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}

export default Life;
