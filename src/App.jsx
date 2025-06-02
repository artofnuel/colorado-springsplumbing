import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App