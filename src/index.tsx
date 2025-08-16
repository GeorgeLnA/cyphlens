import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ElementLight } from "./screens/ElementLight";
import LoadingScreen from "./components/ui/loading-screen";

const Boot = (): JSX.Element => {
  const [showLoader, setShowLoader] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload all critical resources
    const preloadResources = async () => {
      try {
        // Preload Spline scene
        const splineScene = new Promise((resolve) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'fetch';
          link.href = 'https://prod.spline.design/Q5KnbDe3jesS9oeV/scene.splinecode';
          document.head.appendChild(link);
          resolve(true);
        });

        // Preload critical images
        const imageUrls = [
          "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ];

        const imagePromises = imageUrls.map((url) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(true); // Continue even if some images fail
            img.src = url;
          });
        });

        // Wait for critical resources to load
        await Promise.all([splineScene, ...imagePromises]);
        
        // Mark as loaded
        setIsLoaded(true);
      } catch (error) {
        console.warn('Some resources failed to preload:', error);
        setIsLoaded(true); // Continue anyway
      }
    };

    preloadResources();
  }, []);

  return (
    <>
      {showLoader && <LoadingScreen loop={false} onComplete={() => setShowLoader(false)} />}
      {/* Keep content fully rendered under the loader so Spline runs before curtain ends */}
      <div className="opacity-100">
        <ElementLight />
      </div>
    </>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Boot />
  </StrictMode>,
);
