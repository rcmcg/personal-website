import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/header/header.css'
import './components/article/article.css'
import './components/terminal-window/terminal-window.css'
import './components/project/preview/project-preview.css'
import './pages/home/home.css'
import './pages/blog-listing/blog-listing.css'
import './pages/photos-page/photos-page.css'
import './pages/projects-page/projects-page.css'
import Home from './pages/home/Home.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import BlogListing from "./pages/blog-listing/BlogListing.tsx";
import ProjectsPage from "./pages/projects-page/ProjectsPage.tsx";
import ArticlePage from "./pages/ArticlePage.tsx";
import PhotosPage from "./pages/photos-page/PhotosPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/projects"} element={<ProjectsPage />}/>
        <Route path={"/blog"} element={<BlogListing />}/>
        <Route path={"/blog/:articleId"} element={<ArticlePage />}/>
        <Route path={"/photos"} element={<PhotosPage />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
