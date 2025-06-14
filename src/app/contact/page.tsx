import { Metadata } from 'next'
import ContactPage from './ContactPage.client'

export const metadata: Metadata = {
  title: "お問い合わせ | AI Nexus - 無料相談でAI導入をサポート",
  description: "AI導入に関する無料相談を承っています。現状の課題分析から具体的なAI活用ロードマップまで、専門コンサルタントがサポートします。24時間以内にご返信いたします。",
  openGraph: {
    title: "お問い合わせ | AI Nexus",
    description: "AI導入の無料相談を承ります。課題分析からロードマップ作成まで専門コンサルタントがサポート",
    url: "/contact",
  },
}

export default function Page() {
  return <ContactPage />
}