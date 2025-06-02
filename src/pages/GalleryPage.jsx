import PageTransition from "../components/PageTransition";
import GalleryGrid from "../components/GalleryGrid";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bathroom Renovation",
    title: "Luxury Bathroom Renovation",
    description:
      "Complete renovation of a master bathroom including new fixtures, tile work, and plumbing.",
  },
  {
    url: "https://images.unsplash.com/photo-1722942114198-e9572b036c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJhdGhyb29tJTIwcGx1bWJpbmd8ZW58MHx8MHx8fDA%3D",
    alt: "Kitchen Sink Installation",
    title: "Modern Kitchen Sink Installation",
    description:
      "Installation of a high-end kitchen sink and faucet with garbage disposal system.",
  },
  {
    url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Water Heater Replacement",
    title: "Tankless Water Heater",
    description:
      "Replacement of traditional water heater with an energy-efficient tankless system.",
  },
  {
    url: "https://images.unsplash.com/photo-1605313294941-ea43850d9de5?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Pipe Repair",
    title: "Emergency Pipe Repair",
    description:
      "Fast response and repair of burst pipes in a residential basement.",
  },
  {
    url: "https://images.unsplash.com/photo-1641501064862-7926f3999416?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Commercial Plumbing",
    title: "Commercial Kitchen Plumbing",
    description:
      "Installation of commercial-grade plumbing for a restaurant kitchen.",
  },
  {
    url: "https://images.pexels.com/photos/7937612/pexels-photo-7937612.jpeg",
    alt: "Bathroom Fixtures",
    title: "Modern Bathroom Fixtures",
    description:
      "Installation of contemporary shower and sink fixtures in a master bathroom.",
  },
  {
    url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Toilet Installation",
    title: "Water-Efficient Toilet Installation",
    description: "Replacement with a modern, water-saving toilet fixture.",
  },
  {
    url: "https://images.unsplash.com/photo-1538474705339-e87de81450e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Outdoor Plumbing",
    title: "Outdoor Spigot Installation",
    description:
      "Installation of frost-free outdoor water connections for a residential property.",
  },
  {
    url: "https://images.pexels.com/photos/3637739/pexels-photo-3637739.jpeg",
    alt: "Drainage System",
    title: "Drainage System Upgrade",
    description:
      "Complete overhaul of residential drainage to prevent flooding and water damage.",
  },
];

const GalleryPage = () => {
  return (
    <PageTransition>
      <section className="bg-primary-500 py-24 md:py-32">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Work Gallery
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Browse through our portfolio of completed projects and see the
            quality of our workmanship firsthand.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-12">
            Click on any image to view more details about the project.
          </p>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </PageTransition>
  );
};

export default GalleryPage;
