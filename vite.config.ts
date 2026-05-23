import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

try {
  const htmlPath = 'd:/MCA/akbar_portfolio/old_portfolio_utf8.html'
  if (fs.existsSync(htmlPath)) {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8')
    
    // Extract base64 profile image
    const profileImgRegex = /class="profile-img"\s+src="data:image\/png;base64,([^"]+)"/
    const profileMatch = htmlContent.match(profileImgRegex)
    if (profileMatch && profileMatch[1]) {
      const base64Data = profileMatch[1]
      const buffer = Buffer.from(base64Data, 'base64')
      const profileDestPath = 'd:/MCA/akbar_portfolio/public/profile.png'
      fs.writeFileSync(profileDestPath, buffer)
    }
  }
} catch (err: any) {
  console.error('Error extracting profile image:', err.message)
}

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/akbar_portfolio/' : '/',
  plugins: [react()],
}))
