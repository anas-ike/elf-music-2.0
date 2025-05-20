'use client'

import { useState } from 'react'
import Image from 'next/image'

import { faLastfm, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faChartSimple, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const highlights = [
  {
    icon: faLastfm,
    title: 'Scrobble to Last.fm',
    description:
      'Seamlessly integrate with Last.fm to track and record your music listening history. By scrobbling your listening activity, you can analyze your music preferences over time.',
    image: '/highlights/lastfm.svg',
  },
  {
    icon: faSpotify,
    title: 'Spotify Playlist',
    description:
      "Easily like songs directly on your Spotify account or import Spotify playlists into Mewwme's for a seamless music experience.",
    image: '/highlights/spotifypl.svg',
  },
  {
    icon: faChartSimple,
    title: 'Twitch & Youtube Notify',
    description:
      'Get fast and customizable Twitch/Youtube notifications in your Discord server with just a few clicks.',
    image: '/highlights/notify.svg',
  },
  {
    icon: faThumbsUp,
    title: 'User Statistics',
    description:
      'Track your usage statistics with Mewwme, including the number of songs played, commands executed, votes received, and more. Get detailed insights into how you interact with the bot!',
    image: '/highlights/stats.svg', // Gambar tetap sesuai
  },
]

export function Highlights() {
  const [hoveredHighlight, setHoveredHighlight] = useState<{
    title: string
    description: string
    image: string
  } | null>(null)

  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      {/* Left Section */}
      <div className="flex w-full flex-1 flex-col">
        <div className="w-full">
          <h2
            className="text-5xl font-bold sm:text-4xl"
            style={{ color: '#f4e0c7' }}
          >
            Me? More than just a music Bot!
          </h2>
          <p className="mt-2 text-muted-foreground sm:text-lg">
            Enjoy Seamless Music Streaming on Discord with Mewwme&apos;s
            High-Quality Sound and Reliable Service!
          </p>

          {/* Show images only on large screens */}
          {hoveredHighlight && (
            <div className="mt-4 hidden sm:block">
              <Image
                className="opacity-100 transition-opacity duration-500 ease-in-out" // Tambahkan transisi disini
                src={hoveredHighlight.image}
                alt={hoveredHighlight.title}
                width={700}
                height={300}
              />
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full flex-1 flex-col gap-8 md:gap-12">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex w-full flex-row items-start gap-6"
            onMouseEnter={() => setHoveredHighlight(highlight)}
            onMouseLeave={() => setHoveredHighlight(null)}
          >
            <div className="bg-guppie/10 flex aspect-square h-12 w-12 items-center justify-center rounded-xl">
              <FontAwesomeIcon
                className="h-5 w-5"
                style={{ color: '#f4e0c7' }}
                icon={highlight.icon}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2
                className="font-heading text-4xl font-extrabold md:text-4xl"
                style={{ color: '#f4e0c7' }}
              >
                {highlight.title}
              </h2>
              <p className="mt-2 text-muted-foreground sm:text-lg">
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
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
