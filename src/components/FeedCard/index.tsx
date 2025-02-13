import House1 from "../../assets/house1.jpg";
import House01 from "../../assets/house01.jpg";
import House2 from "../../assets/house1.jpg";
import House02 from "../../assets/house02.webp";
import House3 from "../../assets/house3.jpg";
import House03 from "../../assets/house03.jpg";
// import House07 from "../../assets/house 3.jpg";
// import House08 from "../../assets/house01.jpg";
// import House09 from "../../assets/house1.jpg";

interface FeedCardProps {
  image: string;
  title: string;
  description: string;
}

const feedData: FeedCardProps[] = [
  { image: House1, title: "Modern Apartment", description: "Located in the city with a great view." },
  { image: House01, title: "Cozy Cottage", description: "Surrounded by nature, perfect for a getaway." },
  { image: House2, title: "Luxury Villa", description: "A villa with a private pool and elegant interiors." },
  { image: House02, title: "Beach House", description: "A peaceful home by the beach with ocean views." },
  { image: House3, title: "Mountain Cabin", description: "A quiet cabin in the mountains, great for relaxation." },
  { image: House03, title: "Eco Home", description: "An energy-efficient home with solar panels." },
  // { image: House07, title: "Farmhouse", description: "A traditional farmhouse with beautiful landscapes." },
  // { image: House08, title: "Glass House", description: "A modern glass house with a scenic backdrop." },
  // { image: House09, title: "Urban Loft", description: "A stylish loft in the heart of downtown." },
];

function FeedCard({ image, title, description }: FeedCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default function FeedList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {feedData.map((item, index) => (
        <FeedCard key={index} {...item} />
      ))}
    </div>
  );
}
