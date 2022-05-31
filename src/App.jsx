import React from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AddStrike from './pages/AddStrike';
import Home from './pages/Home';
import Strikes from './pages/Strikes';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="bg-background flex flex-col px-4 py-3 min-h-screen">
          <Header />
          <main className="container flex-grow p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/strikes" element={<Strikes />} />
              <Route path="/add" element={<AddStrike />} />
            </Routes>
          </main>
          <Toaster
            position="bottom-left"
            toastOptions={{ duration: 2000, className: 'toastStyle' }}
          />
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
