import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ManualPage from './pages/ManualPage';
import FS0101 from '@/pages/fs0101-manual';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/pages/fs0101-manual" element={<FS0101 />} />
          <Route path="/manuals/:manualId" element={<ManualPage />} />
          <Route path="/pages/:manualId" element={<ManualPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
