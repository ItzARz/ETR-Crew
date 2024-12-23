import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard/page.tsx'
import Login from './login/page.tsx'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
