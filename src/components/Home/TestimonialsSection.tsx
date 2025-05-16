import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  imageUrl: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "EcoConnect's gardening program helped me transform my backyard into a productive vegetable garden. Their expert guidance and community support made all the difference.",
      author: "Emma Johnson",
      role: "Community Gardener",
      imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=150"
    },
    {
      quote: "The energy conservation tips I learned through EcoConnect saved me over $200 on my energy bills last year. Simple changes really do add up!",
      author: "Marcus Chen",
      role: "Homeowner",
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=150"
    },
    {
      quote: "I've found so many high-quality, sustainable items through the product swap platform. It's reduced my consumption while connecting me with like-minded people.",
      author: "Sophia Rodriguez",
      role: "Sustainability Advocate",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=150"
    }
  ];

  return (
    <section className="py-16 bg-green-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Community Voices</h2>
          <p className="text-green-100">
            Hear from our members about how EcoConnect has helped them make sustainable choices in their everyday lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="mt-8">
                <p className="text-gray-700 italic mb-4 text-sm">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-3">
                  <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;