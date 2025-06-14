'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronRight, Zap, Brain, Target, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            AI Nexus
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">サービス</Link>
            <Link href="/cases" className="text-gray-600 hover:text-blue-600 transition-colors">事例</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">お問い合わせ</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main id="main-content">
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              生成AIで
              <br />
              ビジネスを革新
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              最先端の生成AI技術でお客様のビジネス課題を解決し、
              <br />
              持続可能な成長を実現するパートナーとして伴走します
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                無料相談を始める
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg rounded-full border-2 hover:bg-gray-50">
              サービス資料をダウンロード
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">なぜAI Nexusが選ばれるのか</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              豊富な実績と専門知識で、お客様の生成AI導入を成功に導きます
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-12 w-12 text-blue-600" />,
                title: "AI戦略設計",
                description: "お客様のビジネス課題を深く理解し、最適なAI活用戦略を設計します"
              },
              {
                icon: <Zap className="h-12 w-12 text-purple-600" />,
                title: "迅速な実装",
                description: "プロトタイプから本格運用まで、スピーディーな導入を実現します"
              },
              {
                icon: <Target className="h-12 w-12 text-green-600" />,
                title: "継続的改善",
                description: "導入後も継続的にモニタリングし、ROI最大化を支援します"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">提供サービス</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              企業様のニーズに合わせた包括的なAIソリューションを提供します
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "生成AI導入支援",
                description: "ChatGPT、Claude等の生成AIツールの導入から運用まで一気通貫でサポート",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "データ戦略コンサルティング",
                description: "AI活用に必要なデータ整備から分析基盤構築まで戦略的にサポート",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "トレーニング・サポート",
                description: "社内でのAI活用促進のための研修プログラムと継続的サポート",
                color: "from-green-500 to-green-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border group hover:border-gray-200"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Button variant="outline" className="group-hover:bg-gray-50">
                  詳しく見る
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
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
              生成AIでビジネスを次のレベルへ
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              無料相談で、お客様のビジネス課題とAI活用の可能性について一緒に検討しませんか？
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                今すぐ無料相談を予約
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      </main>

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
