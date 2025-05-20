import Image from 'next/image'

import { MdDiamond } from 'react-icons/md'
import { RiSlashCommands2 } from 'react-icons/ri'
import Balancer from 'react-wrap-balancer'

import { links } from '@/config/links'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { LinkWrapper } from '@/components/link-wrapper'

export function Hero() {
  return (
    <div className="relative mx-4 mt-1 flex flex-col items-center justify-center lg:w-full lg:flex-row">
      <div className="relative order-first flex flex-1 items-center justify-center lg:order-last lg:mt-0">
        <Image
          src="/assets/mewwme.gif"
          alt="Mewwme GIF"
          width={250}
          height={250}
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-10 flex-1 pt-8 text-center lg:text-left">
        {/* H1 Responsif */}
        <h1 className="bg-gradient-to-br from-primary to-primary/80 bg-clip-text py-2 font-heading text-4xl font-black tracking-tighter text-mewwme sm:text-5xl md:leading-[3.5rem]">
          <Balancer>Those who wish to sing, always find a song ♪</Balancer>
        </h1>

        {/* Responsive Description */}
        <p
          className="mt-2 text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{
            textShadow: '1px 1px 2px #000, 0 0 1px #f4e0c7, 0 0 1px #f4e0c7',
          }}
        >
          <Balancer>
            Mewwme&apos;s is a Discord bot that revolutionizes the way you
            experience music on Discord, offering the cleanest user interface,
            high-quality audio, and a wide range of music-related features.
          </Balancer>
        </p>

        {/* Responsive Button */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-4 lg:justify-start">
          <LinkWrapper
            href="/commands"
            className={cn(
              buttonVariants({
                size: 'lg',
                variant: 'outline',
              }),
              'rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-transparent focus:outline-none sm:w-max',
            )}
          >
            <RiSlashCommands2 className="mr-2 h-4 w-4" />
            Commands
          </LinkWrapper>
          <LinkWrapper
            href="/premium"
            className={cn(
              buttonVariants({
                size: 'lg',
                variant: 'outline',
              }),
              'rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-transparent focus:outline-none sm:w-max',
            )}
          >
            <MdDiamond className="mr-2 h-4 w-4" />
            Premium
          </LinkWrapper>
        </div>
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
