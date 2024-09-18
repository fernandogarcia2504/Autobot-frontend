import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';

import Layout from './layouts/Layout';
import ProtectedRoute from './components/Routes/ProtectedRoute';
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
              <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={ <HomePage />} />
                        <Route path="/pricing" element={ <PricingPage />} />
                        <Route path="/blog" element={ <BlogPage />} />
                        <Route path="/login" element={ <LoginPage />} />
                        <Route path="/register" element={ <RegisterPage />} />
                        <Route path="/paying" element={ <PayingPage />} />

                        <Route path="/auth/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
                        <Route path="/auth/messages" element={<ProtectedRoute><MessagesPage /></ProtectedRoute>} />
                        <Route path="/auth/conversations" element={<ProtectedRoute><ConversationsPage /></ProtectedRoute>} />
                        <Route path="/auth/users" element={<ProtectedRoute><UsersPage /></ProtectedRoute>} />
                    </Routes>
                </Layout>
                </AuthProvider>
            </Router>
    );
};

export default App;

