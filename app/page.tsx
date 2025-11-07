'use client'

import { useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className="container">
      <div className="header">
        <h1>Scaleward.ai</h1>
        <p className="subtitle">Accelerator Pitch Deck</p>
        <div className="button-group">
          <a 
            href="/pitch-deck.pdf" 
            download="Scaleward-Pitch-Deck.pdf"
            className="button download-button"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
          <a 
            href="/pitch-deck.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="button view-button"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Open in New Tab
          </a>
        </div>
      </div>

      <div className="pdf-container">
        {isLoading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading pitch deck...</p>
          </div>
        )}
        <iframe
          src="/pitch-deck.pdf"
          className="pdf-viewer"
          title="Scaleward Pitch Deck"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <footer className="footer">
        <p>© 2025 Scaleward.ai - All rights reserved</p>
      </footer>
    </main>
  )
}

