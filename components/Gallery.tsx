import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Play } from 'lucide-react';
import VideoModal from './VideoModal';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  videoUrl?: string; // Optional video URL
  cols: string; 
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Cinematic Showreel",
    category: "Fashion Film",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1287&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ", // Example 4K nature video as placeholder
    cols: "md:col-span-1"
  },
  {
    id: 2,
    title: "Urban Shadow",
    category: "Streetwear Collection",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1288&auto=format&fit=crop",
    cols: "md:col-span-1"
  },
  {
    id: 3,
    title: "Luminous Skin",
    category: "Beauty & Cosmetics",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop",
    cols: "md:col-span-1"
  },
  {
    id: 4,
    title: "Brand Story",
    category: "Commercial Video",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U", // Example dummy video
    cols: "md:col-span-2"
  },
  {
    id: 5,
    title: "Velvet Aura",
    category: "High-End Portrait",
    image: "https://images.unsplash.com/photo-1529139574466-a302d2d3f524?q=80&w=1287&auto=format&fit=crop",
    cols: "md:col-span-1"
  },
];

const Gallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4 font-sans">Visual Archives</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white italic">Photography & Direction</h3>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed text-right md:text-left font-sans">
            빛과 그림자의 대비를 통해 브랜드의 아이덴티티를 시각화합니다.<br/> 
            단순한 촬영을 넘어, 스토리가 담긴 이미지를 만듭니다.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[500px]">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => item.videoUrl && setSelectedVideo(item.videoUrl)}
              className={`relative group overflow-hidden rounded-sm cursor-pointer ${item.cols}`}
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                
                {/* Text Content with Slide Up Animation */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs text-secondary tracking-widest uppercase mb-2 block font-sans">
                    {item.category}
                  </span>
                  <div className="flex justify-between items-center">
                    <h4 className="text-2xl font-bold text-white font-serif italic">
                      {item.title}
                    </h4>
                    <div 
                      className={`
                        w-10 h-10 rounded-full border flex items-center justify-center text-white 
                        opacity-0 group-hover:opacity-100 transition-opacity delay-100
                        ${item.videoUrl ? 'border-white bg-white/20 backdrop-blur-sm' : 'border-white/30'}
                      `}
                    >
                      {item.videoUrl ? <Play size={18} fill="currentColor" /> : <Plus size={18} />}
                    </div>
                  </div>
                  {item.videoUrl && (
                    <p className="text-[10px] text-gray-400 mt-2 tracking-wider uppercase flex items-center gap-1 font-sans">
                       <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"/> Watch Film
                    </p>
                  )}
                </div>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoUrl={selectedVideo} 
      />
    </section>
  );
};

export default Gallery;