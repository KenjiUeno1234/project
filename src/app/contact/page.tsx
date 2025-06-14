import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "お問い合わせ | AI Nexus - 無料相談でAI導入をサポート",
  description: "AI導入に関する無料相談を承っています。現状の課題分析から具体的なAI活用ロードマップまで、専門コンサルタントがサポートします。24時間以内にご返信いたします。",
  openGraph: {
    title: "お問い合わせ | AI Nexus",
    description: "AI導入の無料相談を承ります。課題分析からロードマップ作成まで専門コンサルタントがサポート",
    url: "/contact",
  },
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際のフォーム送信処理を行う
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "メール",
      content: "info@ai-nexus.com",
      description: "24時間以内に返信いたします"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "電話",
      content: "03-1234-5678",
      description: "平日 9:00-18:00"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "住所",
      content: "東京都港区六本木1-2-3\nAIビル 10階",
      description: "六本木一丁目駅より徒歩3分"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "営業時間",
      content: "平日 9:00-18:00",
      description: "土日祝日は休業"
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせありがとうございました</h2>
          <p className="text-gray-600 mb-8">
            24時間以内に担当者よりご連絡いたします。
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              ホームに戻る
            </Button>
          </Link>
        </motion.div>
      </div>
    )
  }

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
            <Link href="/cases" className="text-gray-600 hover:text-blue-600 transition-colors">事例</Link>
            <Link href="/contact" className="text-blue-600 font-medium">お問い合わせ</Link>
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
              お問い合わせ
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              AI導入に関するご相談は無料です。お気軽にお問い合わせください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl border">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">無料相談フォーム</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="田中 太郎"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tanaka@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      企業名 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="株式会社サンプル"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      相談内容 <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="AI導入をご検討の背景や、現在の課題などをお聞かせください..."
                      required
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    相談内容を送信する
                    <Send className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    送信いただいた内容は24時間以内にご返信いたします
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">お問い合わせ先</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-gray-900 font-medium mb-1 whitespace-pre-line">{info.content}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Benefits */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl border">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">無料相談で得られること</h3>
                <ul className="space-y-4">
                  {[
                    "現状の課題分析と改善提案",
                    "AI活用の具体的なロードマップ",
                    "導入コストと期待効果の試算",
                    "成功事例に基づくベストプラクティス"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">よくあるご質問</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              お問い合わせの前に、よくあるご質問をご確認ください
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "相談は本当に無料ですか？",
                answer: "はい、初回の相談は完全に無料です。お客様の課題をお聞きし、AI活用の可能性をご提案いたします。"
              },
              {
                question: "どのくらいの規模の企業が対象ですか？",
                answer: "スタートアップから大企業まで、規模を問わず対応いたします。企業の規模に応じた最適なソリューションをご提案します。"
              },
              {
                question: "導入までの期間はどのくらいですか？",
                answer: "プロジェクトの規模により異なりますが、一般的には3-6ヶ月程度です。お客様のニーズに応じてスケジュールを調整いたします。"
              },
              {
                question: "技術的な知識がなくても大丈夫ですか？",
                answer: "もちろんです。専門用語を使わず、分かりやすくご説明いたします。また、社内向けの研修プログラムもご用意しています。"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl border"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">Q. {faq.question}</h3>
                <p className="text-gray-700">A. {faq.answer}</p>
              </motion.div>
            ))}
          </div>
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