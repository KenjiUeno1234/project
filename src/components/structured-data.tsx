export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Nexus",
    "description": "生成AI導入支援のエキスパートとして、ChatGPT・Claude等のAIツール導入からデータ戦略まで包括的にサポート",
    "url": "https://ai-nexus.com",
    "logo": "https://ai-nexus.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-3-1234-5678",
      "contactType": "customer service",
      "email": "info@ai-nexus.com",
      "availableLanguage": "Japanese"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "六本木1-2-3 AIビル 10階",
      "addressLocality": "港区",
      "addressRegion": "東京都",
      "postalCode": "106-0032",
      "addressCountry": "JP"
    },
    "sameAs": [
      "https://twitter.com/ai_nexus"
    ],
    "foundingDate": "2024",
    "numberOfEmployees": "50-100",
    "industry": "Technology Consulting"
  }

  const servicesData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "生成AI導入支援サービス",
    "provider": {
      "@type": "Organization",
      "name": "AI Nexus"
    },
    "serviceType": "AI Consulting",
    "description": "ChatGPT、Claude等の生成AIツールの導入から運用まで一気通貫でサポート",
    "areaServed": "JP",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Nexus Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "生成AI導入支援",
            "description": "ChatGPT、Claude等の生成AIツールの導入から運用まで一気通貫でサポート"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "データ戦略コンサルティング",
            "description": "AI活用に必要なデータ整備から分析基盤構築まで戦略的にサポート"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "トレーニング・サポート",
            "description": "社内でのAI活用促進のための研修プログラムと継続的サポート"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesData)
        }}
      />
    </>
  )
}