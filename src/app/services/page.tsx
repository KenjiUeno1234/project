import { Metadata } from 'next'
import ServicesPage from './ServicesPage.client'

export const metadata: Metadata = {
  title: "サービス紹介 | AI Nexus - 生成AI導入支援・データ戦略・トレーニング",
  description: "AI Nexusの3つの核となるサービス：生成AI導入支援、データ戦略コンサルティング、トレーニング・サポート。ChatGPT・Claude等のAI導入から運用まで包括的にサポートします。",
  openGraph: {
    title: "サービス紹介 | AI Nexus",
    description: "生成AI導入支援、データ戦略コンサルティング、トレーニング・サポートの3つのサービスで企業のAI変革を支援",
    url: "/services",
  },
}

export default function Page() {
  return <ServicesPage />
}