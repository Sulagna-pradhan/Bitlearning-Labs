import { Utensils, Clock, Heart, Star, Shield } from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-[#f5f2e8] via-[#b5ccbf]/15 to-[#e7e3c2] dark:from-[#2a2818] dark:via-[#40584a]/30 dark:to-[#45422a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#b5ccbf]/20 to-[#67908c]/20 dark:from-[#b5ccbf]/20 dark:to-[#67908c]/20 rounded-full text-[#67908c] dark:text-[#b5ccbf] mb-6 border border-[#b5ccbf]/30">
            <Shield size={18} />
            <span className="text-sm font-bold tracking-wide">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-8 leading-tight">
            Excellence That Sets Us
            <span className="block bg-gradient-to-r from-[#67908c] to-[#40584a] bg-clip-text text-transparent">
              Apart From Others
            </span>
          </h2>
          <p className="text-[#67908c] dark:text-[#b5ccbf] max-w-3xl mx-auto text-xl leading-relaxed">
            We distinguish ourselves through uncompromising quality, exceptional
            service, and thousands of delighted customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <Utensils size={48} className="text-[#67908c]" />,
              title: 'Always Fresh Ingredients',
              description:
                'We source only the finest and freshest ingredients daily for every single dish we prepare.',
            },
            {
              icon: <Clock size={48} className="text-[#67908c]" />,
              title: 'Punctual Every Time',
              description:
                'We arrive early and serve precisely on schedule for every event, maintaining our 99% on-time record.',
            },
            {
              icon: <Heart size={48} className="text-[#67908c]" />,
              title: 'Personalized Care',
              description:
                'Your special event matters to us as much as it does to you. We treat every occasion with love.',
            },
            {
              icon: <Star size={48} className="text-[#67908c]" />,
              title: '5-Star Reviews',
              description:
                'Lots of satisfied customers have rated us 5 stars for our exceptional service and quality.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-white to-[#f8f5eb] dark:from-[#45422a] dark:to-[#3a3625] shadow-xl hover:shadow-2xl hover:shadow-[#67908c]/10 transition-all duration-500 transform hover:-translate-y-2 group animate-slide-in-up border border-[#b5ccbf]/20"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#45422a] dark:text-[#e7e3c2] mb-4 group-hover:text-[#67908c] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#67908c] dark:text-[#b5ccbf] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
