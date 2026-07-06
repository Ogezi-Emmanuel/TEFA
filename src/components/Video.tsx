import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface VideoProps {
  src: string;
  className?: string;
  poster?: string;
}

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export default function Video({ src, className, poster }: VideoProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative bg-black overflow-hidden", className)}>
      {hasError ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-500">
          <span>Media unavailable</span>
        </div>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 z-10">
              <div className="w-10 h-10 border-2 border-emerald border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={poster}
            onError={() => setHasError(true)}
            onLoadedData={() => setIsLoading(false)}
            onCanPlay={() => setIsLoading(false)}
          >
            <source src={src} type="video/mp4" />
          </video>
        </>
      )}
    </div>
  );
}
