import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import CreatePost from "pages/create-post";
import MentalHealthResources from "pages/mental-health-resources";
import PostDetail from "pages/post-detail";
import AboutContact from "pages/about-contact";
import SupportDonate from "pages/support-donate";
import Communities from "pages/communities";
import AdminDashboard from "pages/admin-dashboard";
import PostsPage from "pages/posts";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/mental-health-resources" element={<MentalHealthResources />} />
        <Route path="/post-detail" element={<PostDetail />} /> 
        <Route path="/posts" element={<PostsPage />} /> 
        <Route path="/about-contact" element={<AboutContact />} />
        <Route path="/support-donate" element={<SupportDonate />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;