import Link from 'next/link';

const blogPosts = [
  {
    title: "5 Reasons Your Children Need Regular Dental CheckUps",
    date: "March 28, 2024",
    excerpt: "Regular check-ups help prevent cavities and improve long-term dental health.",
    image: "/medicloud/images/about-img.png"
  },
  {
    title: "Everything You Need To Know About a Dead Tooth",
    date: "March 28, 2024",
    excerpt: "Learn the symptoms and treatment options for nerve-damaged teeth.",
    image: "/medicloud/images/about-img.png"
  },
  {
    title: "Everything You Want To Know About Cosmetic Dentistry",
    date: "March 28, 2024",
    excerpt: "Veneers, whitening and smile design — discover how they work.",
    image: "/medicloud/images/about-img.png"
  },
  {
    title: "What You Need to Know About Wisdom Teeth",
    date: "March 27, 2024",
    excerpt: "When extraction is necessary and how to reduce recovery time.",
    image: "/medicloud/images/about-img.png"
  }
];

export default function Blog() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 md:my-20">
      
      {/* Header */}
      <div className="text-center mb-10 text-gray-900">
        <span className="text-[#0ea5e9] font-semibold tracking-wide block mb-2">Our Blog</span>
        <h2 className="font-bold text-3xl md:text-4xl mb-3">Latest Blog & Articles</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          We share knowledge & helpful dental care tips for our patients.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-[18px] p-3 flex flex-col sm:flex-row gap-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full sm:w-[150px] h-[200px] sm:h-[150px] rounded-xl object-cover shrink-0"
            />
            <div className="flex flex-col justify-center py-2 pr-4">
              <h5 className="font-bold text-lg mb-2 text-gray-900 leading-tight">
                {post.title}
              </h5>
              <small className="text-gray-400 block mb-2">{post.date}</small>
              <p className="text-gray-600 text-sm mb-3">
                {post.excerpt}
              </p>
              <Link href="#" className="text-[#0ea5e9] font-semibold text-sm hover:underline mt-auto">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
