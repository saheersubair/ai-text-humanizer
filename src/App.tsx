import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TextConverter } from './components/TextConverter';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Payment } from './pages/Payment';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <Hero />
                <TextConverter />
                <HowItWorks />
                <Benefits />
                <CtaSection />
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;