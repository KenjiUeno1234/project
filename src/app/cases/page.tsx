import { Metadata } from 'next'
import CasesPage from './CasesPage.client'

export const metadata: Metadata = {
  title: "導入事例 | AI Nexus - 製造業・商社・小売業での成功実績",
  description: "AI Nexusの導入事例をご紹介。製造業での品質チェック自動化、商社での契約書作成効率化、小売業での顧客サポート改善など、業界別の成功事例をご覧ください。",
  openGraph: {
    title: "導入事例 | AI Nexus",
    description: "製造業・商社・小売業でのAI導入成功事例。業務効率80%向上、売上25%増加などの実績をご紹介",
    url: "/cases",
  },
}

export default function Page() {
  return <CasesPage />
}