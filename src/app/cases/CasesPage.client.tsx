'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Users, Clock, Target, Building2, ShoppingCart, FileText, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function CasesPage() {
  const cases = [
    {
      id: 1,
      company: "株式会社テックイノベーション",
      industry: "製造業",
      logo: "TI",
      challenge: "設計図面の品質チェック工程の自動化",
      solution: "画像認識AIと生成AIを組み合わせた自動検査システム",
      results: [
        { metric: "検査時間", value: "80%", description: "短縮" },
        { metric: "検査精度", value: "95%", description: "向上" },
        { metric: "人的エラー", value: "90%", description: "削減" }
      ],
      icon: <Cpu className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600",
      testimonial: "AI導入により、品質管理部門の負荷が大幅に軽減され、より戦略的な業務に集中できるようになりました。",
      position: "品質管理部長"
    },
    {
      id: 2,
      company: "グローバル商事株式会社",
      industry: "商社",
      logo: "GS",
      challenge: "多言語での契約書作成と翻訳業務の効率化",
      solution: "生成AIによる契約書テンプレート自動生成と多言語翻訳システム",
      results: [
        { metric: "作成時間", value: "70%", description: "短縮" },
        { metric: "翻訳精度", value: "98%", description: "達成" },
        { metric: "コスト", value: "60%", description: "削減" }
      ],
      icon: <FileText className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
      testimonial: "国際取引の契約書作成が格段にスピードアップし、新規市場への参入が加速しています。",
      position: "国際事業部マネージャー"
    },
    {
      id: 3,
      company: "リテールプラス株式会社",
      industry: "小売業",
      logo: "RP",
      challenge: "顧客サポートの24時間対応と売上向上",
      solution: "AIチャットボットとパーソナライズド推薦システム",
      results: [
        { metric: "顧客満足度", value: "85%", description: "向上" },
        { metric: "売上", value: "25%", description: "増加" },
        { metric: "対応時間", value: "24時間", description: "365日対応" }
      ],
      icon: <ShoppingCart className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
      testimonial: "AIによる顧客対応により、深夜でも即座に問い合わせ対応ができ、売上機会を逃さなくなりました。",
      position: "カスタマーサクセス部長"
    }
  ]

  const stats = [
    { number: "50+", label: "導入企業数", icon: <Building2 className="h-8 w-8 text-blue-600" /> },
    { number: "3ヶ月", label: "平均導入期間", icon: <Clock className="h-8 w-8 text-purple-600" /> },
    { number: "150%", label: "平均ROI向上", icon: <TrendingUp className="h-8 w-8 text-green-600" /> },
    { number: "95%", label: "顧客満足度", icon: <Target className="h-8 w-8 text-orange-600" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Nexus
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">ホーム</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">サービス</Link>
            <Link href="/cases" className="text-blue-600 font-medium">事例</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">お問い合わせ</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              AI導入成功事例
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              様々な業界でAI活用により劇的な改善を実現したお客様の成功ストーリー
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border"
              >
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${caseStudy.color} flex items-center justify-center text-white font-bold text-xl mr-4`}>
                          {caseStudy.logo}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{caseStudy.company}</h3>
                          <p className="text-gray-600">{caseStudy.industry}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                            <Target className="h-5 w-5 mr-2 text-red-500" />
                            課題
                          </h4>
                          <p className="text-gray-700">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                            {caseStudy.icon}
                            <span className="ml-2">ソリューション</span>
                          </h4>
                          <p className="text-gray-700">{caseStudy.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6">導入効果</h4>
                      <div className="space-y-4">
                        {caseStudy.results.map((result, i) => (
                          <div key={i} className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-2xl">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-700 font-medium">{result.metric}</span>
                              <span className="text-sm text-gray-500">{result.description}</span>
                            </div>
                            <div className={`text-3xl font-bold bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                              {result.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="lg:col-span-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6">お客様の声</h4>
                      <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-l-4 border-blue-500">
                        <blockquote className="text-gray-700 italic mb-4">
                          "{caseStudy.testimonial}"
                        </blockquote>
                        <div className="flex items-center">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${caseStudy.color} flex items-center justify-center text-white font-bold mr-3`}>
                            <Users className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900">{caseStudy.position}</div>
                            <div className="text-sm text-gray-600">{caseStudy.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">対応業界</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              様々な業界でAI導入支援の実績があります
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "製造業", "商社", "小売業", "金融", "ヘルスケア", "教育",
              "物流", "不動産", "エンターテイメント", "コンサルティング", "IT", "官公庁"
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-gray-900 font-medium">{industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              次の成功事例はあなたの会社かもしれません
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              無料相談で、お客様のビジネスにAIがもたらす可能性を具体的にご提案します
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                成功への第一歩を踏み出す
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Nexus
              </div>
              <p className="text-gray-400">
                生成AIでビジネスの未来を創造するパートナー
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white transition-colors">生成AI導入支援</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">データ戦略コンサルティング</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">トレーニング・サポート</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">会社概要</Link></li>
                <li><Link href="/cases" className="hover:text-white transition-colors">事例紹介</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">ニュース</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@ai-nexus.com</li>
                <li>03-1234-5678</li>
                <li>平日 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}