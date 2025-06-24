import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fontsource/inter";

// Import components and pages
import Scene from "./components/Scene";
import Navigation from "./components/Navigation";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GitHub from "./pages/GitHub";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="relative">
        <div className="w-8 h-8 border-2 border-purple-400 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-0 w-8 h-8 border border-purple-600 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    
    // Hide loading screen after a short delay
    const timer = setTimeout(() => setIsLoading(false), 2000);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="relative min-h-screen">
          {/* Custom Cursor */}
          <Cursor />

          {/* 3D Canvas Background */}
          <div className="fixed inset-0 z-0">
            <Canvas
              camera={{
                position: [0, 0, 10],
                fov: 75,
                near: 0.1,
                far: 1000
              }}
              gl={{
                antialias: true,
                alpha: false,
                powerPreference: "high-performance"
              }}
              dpr={[1, 2]}
            >
              <Suspense fallback={null}>
                <Scene />
              </Suspense>
            </Canvas>
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Page Routes */}
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/github" element={<GitHub />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
