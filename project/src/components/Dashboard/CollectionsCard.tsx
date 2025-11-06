interface CollectionCardProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  layout?: 'left' | 'right' | 'center';
  overlayPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  className?: string;
}

export default function CollectionCard({
  imageUrl,
  title,
  subtitle,
  layout = 'center',
  overlayPosition = 'center',
  className = '',
}: CollectionCardProps) {
  const getOverlayPositionClasses = () => {
    switch (overlayPosition) {
      case 'top-left':
        return 'top-8 left-8 items-start text-left';
      case 'top-right':
        return 'top-8 right-8 items-end text-right';
      case 'bottom-left':
        return 'bottom-8 left-8 items-start text-left';
      case 'bottom-right':
        return 'bottom-8 right-8 items-end text-right';
      case 'center':
      default:
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center text-center';
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer ${className}`}
    >
      <div className="relative w-full h-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div
        className={`absolute flex flex-col ${getOverlayPositionClasses()} transition-all duration-500`}
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-2xl tracking-wide">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-sm md:text-base lg:text-lg text-white/90 drop-shadow-lg font-light tracking-wider uppercase">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
