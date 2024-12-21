import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard/page.tsx'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
