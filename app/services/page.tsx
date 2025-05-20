import Balancer from 'react-wrap-balancer'

import { links } from '@/config/links'
import { Separator } from '@/components/ui/separator'
import { Blur } from '@/components/blur'
import { LinkWrapper } from '@/components/link-wrapper'

export default function Page() {
  return (
    <div className="relative">
      <Blur />
      <div className="relative mt-20 space-y-4">
        <h1 className="font-heading text-4xl font-bold text-mewwme lg:text-5xl">
          Mewwme&apos;s Services
        </h1>
        <p className="text-l text-muted-foreground">
          <Balancer>
            If you&apos;ve purchased the <strong>Mewwme&apos;s</strong> Discord
            music bot source code and need support in managing your bot,
            I&apos;m opening up 3 slots for developer and moderator services.
          </Balancer>
        </p>
        <Separator className="my-4" />

        {/* Developer Section */}
        <div>
          <h2 className="font-heading text-2xl font-semibold">
            Developer & Moderator
          </h2>
          <p className="text-lg text-muted-foreground">
            <Balancer>
              <strong>Responsibilities:</strong>
              <ul className="list-inside list-disc">
                <li>
                  <strong>Bot Performance Monitoring:</strong> Ensure the bot
                  runs smoothly and catch any issues early on.
                </li>
                <li>
                  <strong>Bug Fixes & Updates:</strong> Handle bug fixes or
                  feature updates directly on the hosting server or via GitHub
                  commits in the bot&apos;s organization repository.
                </li>
                <li>
                  <strong>Regular Reporting:</strong> Provide routine updates to
                  the bot owner on any changes, fixes, or improvements.
                </li>
                <li>
                  <strong>User Support & Issue Resolution:</strong> Assist bot
                  users, answer questions, address any issues, provide
                  information, suggestions, and solutions as needed.
                </li>
                <li>
                  <strong>Premium Management:</strong> Help with premium feature
                  activations and manage premium users to ensure a smooth
                  experience.
                </li>
                <li>
                  <strong>Community Monitoring:</strong> Keep the support server
                  active and help maintain a positive interaction environment.
                </li>
              </ul>
              <p className="mt-2">
                <strong>Price:</strong>{' '}
                <code>
                  <strong>(One-Time Fee): $100</strong>
                </code>{' '}
                – Lifetime support for your bot as long as it remains active.
              </p>
            </Balancer>
          </p>
        </div>

        {/* Installation Service Section */}
        <div>
          <h2 className="font-heading text-2xl font-semibold">
            Installation of Pterodactyl Panel & Lavalink
          </h2>
          <p className="text-lg text-muted-foreground">
            <Balancer>
              <strong>Responsibilities:</strong>
              <ul className="list-inside list-disc">
                <li>
                  <strong>Install & Setup Pterodactyl Panel:</strong> Set up the
                  Pterodactyl Panel for easy server and bot management.
                </li>
                <li>
                  <strong>Setup Lavalink & IPV6 Rotation:</strong> Install
                  Lavalink for music streaming support with IPV6 rotation.
                </li>
                <li>
                  <strong>Requirements:</strong> You need to have a domain and a
                  VPS with an Ubuntu or Debian OS.
                </li>
              </ul>
              <p className="mt-2">
                <strong>Price:</strong>{' '}
                <code>
                  <strong>$20</strong>
                </code>{' '}
                /two months warranty for installation, setup & migration
              </p>
            </Balancer>
          </p>
        </div>

        {/* Final Call to Action */}
        <div>
          <h2 className="font-heading text-2xl font-semibold">Interested?</h2>
          <p className="text-lg text-muted-foreground">
            <Balancer>
              If you&apos;re interested in this service or would like to discuss
              further, feel free to reach out!{' '}
              <LinkWrapper href={links.supportServer} external>
                Join our Support Server
              </LinkWrapper>{' '}
              to connect with me directly.
            </Balancer>
          </p>
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
