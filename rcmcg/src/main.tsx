import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/header/header.css'
import './components/article/article.css'
import './components/terminal-window/terminal-window.css'
import App from './pages/App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import BlogListing from "./pages/BlogListing.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import ArticlePage from "./pages/ArticlePage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}/>
        <Route path={"/projects"} element={<Projects />}/>
        <Route path={"/blog"} element={<BlogListing />}/>
        <Route path={"/about"} element={<About />}/>
        <Route path={"/blog/:articleId"} element={<ArticlePage />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
