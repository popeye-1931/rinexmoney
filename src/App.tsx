import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import DailyLifePage from './pages/DailyLifePage'
import FamilyPage from './pages/FamilyPage'
import HomePage from './pages/HomePage'
import MomentsPage from './pages/MomentsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/family" element={<FamilyPage />} />
          <Route path="/daily-life" element={<DailyLifePage />} />
          <Route path="/moments" element={<MomentsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
