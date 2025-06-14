import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "サービス紹介 | AI Nexus - 生成AI導入支援・データ戦略・トレーニング",
  description: "AI Nexusの3つの核となるサービス：生成AI導入支援、データ戦略コンサルティング、トレーニング・サポート。ChatGPT・Claude等のAI導入から運用まで包括的にサポートします。",
  openGraph: {
    title: "サービス紹介 | AI Nexus",
    description: "生成AI導入支援、データ戦略コンサルティング、トレーニング・サポートの3つのサービスで企業のAI変革を支援",
    url: "/services",
  },
}

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Users, Database, GraduationCap, Zap, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      id: 'ai-implementation',
      title: '生成AI導入支援',
      description: 'ChatGPT、Claude等の生成AIツールの導入から運用まで一気通貫でサポート',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      features: [
        'AI活用戦略の策定',
        'プロトタイプ開発',
        'セキュリティ対策',
        'ROI測定・改善'
      ],
      benefits: [
        '業務効率50%向上',
        '3ヶ月での本格導入',
        '24/7サポート体制'
      ]
    },
    {
      id: 'data-strategy',
      title: 'データ戦略コンサルティング',
      description: 'AI活用に必要なデータ整備から分析基盤構築まで戦略的にサポート',
      icon: <Database className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600',
      features: [
        'データ監査・整備',
        '分析基盤構築',
        'データガバナンス',
        'AI学習データ準備'
      ],
      benefits: [
        'データ品質90%向上',
        '分析速度10倍高速化',
        'コンプライアンス準拠'
      ]
    },
    {
      id: 'training-support',
      title: 'トレーニング・サポート',
      description: '社内でのAI活用促進のための研修プログラムと継続的サポート',
      icon: <GraduationCap className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      features: [
        'カスタム研修プログラム',
        'ハンズオン実習',
        '社内AI推進者育成',
        '継続的スキルアップ'
      ],
      benefits: [
        '社員のAIスキル向上',
        '自立的なAI活用',
        '変化への適応力強化'
      ]
    }
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
            <Link href="/services" className="text-blue-600 font-medium">サービス</Link>
            <Link href="/cases" className="text-gray-600 hover:text-blue-600 transition-colors">事例</Link>
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
              AI導入を成功に導く
              <br />
              包括的サービス
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              戦略策定から実装、運用まで。企業のAI変革を支援する3つの核となるサービス
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">主な機能</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">期待効果</h3>
                    <div className="grid gap-3">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center bg-gray-50 p-3 rounded-lg">
                          <TrendingUp className="h-5 w-5 text-blue-500 mr-3" />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button size="lg" className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all`}>
                    詳細を相談する
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white p-8 rounded-3xl shadow-2xl border">
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-2xl">
                        <h4 className="font-bold text-gray-900 mb-3">実装フロー</h4>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                            <span className="text-gray-700">現状分析・課題特定</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                            <span className="text-gray-700">戦略設計・計画策定</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                            <span className="text-gray-700">実装・テスト</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                            <span className="text-gray-700">本格運用・改善</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                        <div className="flex items-center mb-3">
                          <Shield className="h-6 w-6 text-blue-600 mr-2" />
                          <h4 className="font-bold text-gray-900">安心のサポート体制</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• 専任担当者による伴走支援</li>
                          <li>• 24時間技術サポート</li>
                          <li>• 定期的な成果測定・改善提案</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
              AI導入の第一歩を踏み出しませんか？
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              無料相談で、お客様のビジネス課題に最適なAIソリューションをご提案します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                  無料相談を予約
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full transition-all">
                資料ダウンロード
              </Button>
            </div>
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
                <li><Link href="/services#ai-implementation" className="hover:text-white transition-colors">生成AI導入支援</Link></li>
                <li><Link href="/services#data-strategy" className="hover:text-white transition-colors">データ戦略コンサルティング</Link></li>
                <li><Link href="/services#training-support" className="hover:text-white transition-colors">トレーニング・サポート</Link></li>
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