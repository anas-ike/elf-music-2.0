'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Blur } from '@/components/blur'

export default function ChatExporter() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [htmlContent, setHtmlContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const urlParam = searchParams.get('url')
    if (urlParam) {
      try {
        const decodedUrl = decodeURIComponent(urlParam)
        const fetchHtml = async () => {
          try {
            const response = await fetch(decodedUrl)
            if (response.ok) {
              const text = await response.text()
              setHtmlContent(text)
            } else {
              console.error('Failed to fetch HTML:', response.statusText)
              router.push('/not-found')
            }
          } catch (error) {
            console.error('Error fetching HTML:', error)
            router.push('/not-found')
          } finally {
            setLoading(false)
          }
        }
        fetchHtml()
      } catch (error) {
        console.error('Error decoding URL:', error)
        router.push('/not-found')
      }
    } else {
      router.push('/not-found')
    }
  }, [searchParams, router])

  return (
    <div style={{ height: '80vh', margin: 0, padding: 0 }}>
      {loading ? (
        <div className="relative">
          <Blur />
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="mt-20 font-heading text-4xl font-bold text-mewwme lg:text-5xl">
              Loading your chat export...
            </h1>
          </div>
        </div>
      ) : (
        <div
          style={{ height: '100%', overflow: 'auto', borderRadius: '15px' }}
          dangerouslySetInnerHTML={{ __html: htmlContent || '' }}
        />
      )}
    </div>
  )
}

/**
 *  __  __            Made by Tragic              _
 * |  \/  |   L RMN - https://hi-lrmn.is-a.dev   ( )
 * | \  / | _____      ____      ___ __ ___   ___|/ ___
 * | |\/| |/ _ \ \ /\ / /\ \ /\ / / '_ ` _ \ / _ \ / __|
 * | |  | |  __/\ V  V /  \ V  V /| | | | | |  __/ \__ \
 * |_|  |_|\___| \_/\_/    \_/\_/ |_| |_| |_|\___| |___/
 *
 *     Discord Support: https://meww.me/support
 *     Community Resources: https://meww.me/premium
 */
