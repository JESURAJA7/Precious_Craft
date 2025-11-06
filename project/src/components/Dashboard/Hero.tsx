export default function Hero() {
  const cloudinaryVideoUrl = "https://res.cloudinary.com/dczicfhcv/video/upload/v1762323526/Violet_Purple_Designer_Fashion_Jewellery___AI_video_ad_crafted_by_Scintilla_Kreations_Pvt_Ltd_sz4csg.mp4";

  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={cloudinaryVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-serif text-white">
              Precious
              <br />
              <span className="italic">Craft</span>
            </h1>
            <button className="bg-white text-blue-900 px-8 py-3 hover:bg-gray-100 transition-colors font-medium rounded-lg">
              EXPLORE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}