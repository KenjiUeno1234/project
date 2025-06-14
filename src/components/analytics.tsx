'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function Analytics() {
  useEffect(() => {
    // Google Analytics の設定
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

    if (GA_MEASUREMENT_ID) {
      // Google Analytics スクリプトの動的読み込み
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_title: document.title,
          page_location: window.location.href,
        });
      `
      document.head.appendChild(script2)
    }
  }, [])

  return null
}

// イベント送信用のヘルパー関数
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// フォーム送信イベント
export function trackFormSubmission(formName: string) {
  trackEvent('submit', 'form', formName)
}

// ページビューイベント
export function trackPageView(url: string, title: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_title: title,
      page_location: url,
    })
  }
}

// CTAクリックイベント
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent('click', 'cta', `${ctaName} - ${location}`)
}