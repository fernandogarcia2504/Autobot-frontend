import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';

import { HomePage } from './pages/PublicPages/HomePage';
import { PricingPage } from './pages/PublicPages/PricingPage';
import { BlogPage } from './pages/PublicPages/BlogPage';
import { LoginPage } from './pages/AuthPages/LoginPage';
import { RegisterPage } from './pages/AuthPages/RegisterPage';
import { PayingPage } from './pages/AuthPages/PayingPage';

import { DashboardPage } from './pages/AppPages/Dashboard';
import { MessagesPage } from './pages/AppPages/Messages';
import { ConversationsPage } from './pages/AppPages/Conversations';
import { UsersPage } from './pages/AppPages/Users';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/paying" element={<PayingPage />} />

            <Route path="/auth/dashboard" element={<DashboardPage />} />
            <Route path="/auth/messages" element={<MessagesPage />} />
            <Route path="/auth/conversations" element={<ConversationsPage />} />
            <Route path="/auth/users" element={<UsersPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

