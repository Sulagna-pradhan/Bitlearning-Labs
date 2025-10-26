import type { JSX } from 'react';

interface Feature {
  icon: JSX.Element;
  title: string;
  text: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="bg-gradient-to-r from-[#67908c] via-[#5a7f79] to-[#40584a] dark:from-[#40584a] dark:via-[#4a5c42] dark:to-[#45422a] py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRpYWdvbmFsIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Im0wLDQwbDQwLC00MG0tNDAsNDBsNDAsLTQwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RpYWdvbmFsKSIvPjwvc3ZnPg==')] opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 text-white group hover:bg-white/10 rounded-2xl p-4 transition-all duration-300 animate-slide-in-right"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <div>
                <div className="font-bold text-lg mb-1">{feature.title}</div>
                <div className="text-sm text-white/90">{feature.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
