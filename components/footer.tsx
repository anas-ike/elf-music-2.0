import { links } from '@/config/links'
import { Separator } from '@/components/ui/separator'
import { LinkWrapper } from '@/components/link-wrapper'

export function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-neutral-900">
      <div className="mx-auto w-full max-w-7xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mb-4 flex items-center space-x-2 sm:mb-0"></div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row">
          <div className="mx-auto mb-4 flex-1 text-center sm:mx-0 sm:mb-0 sm:text-left">
            <h3 className="text-xl font-semibold text-mewwme">Recommended</h3>
            <ul className="m-0 list-none p-0">
              <li>
                <LinkWrapper href="/" className="text-muted-foreground">
                  Home
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/commands" className="text-muted-foreground">
                  Commands
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/blog" className="text-muted-foreground">
                  Read Blog
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/team" className="text-muted-foreground">
                  Team
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/premium" className="text-muted-foreground">
                  Get Premium
                </LinkWrapper>
              </li>
            </ul>
          </div>
          <div className="mx-auto mb-4 flex-1 text-center sm:mx-0 sm:mb-0 sm:text-left">
            <h3 className="text-xl font-semibold text-mewwme">Legal</h3>
            <ul className="m-0 list-none p-0">
              <li>
                <LinkWrapper href="/privacy" className="text-muted-foreground">
                  Privacy Policy
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  href="/termsofservice"
                  className="text-muted-foreground"
                >
                  Terms of Service
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  href="/refundpolicy"
                  className="text-muted-foreground"
                >
                  Refund Policy
                </LinkWrapper>
              </li>
            </ul>
          </div>
          <div className="mx-auto flex-1 text-center sm:mx-0 sm:text-left">
            <h3 className="text-xl font-semibold text-mewwme">Links</h3>
            <ul className="m-0 list-none p-0">
              <li>
                <LinkWrapper
                  href={links.botInvite}
                  className="text-muted-foreground"
                >
                  Invite
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  href={links.supportServer}
                  className="text-muted-foreground"
                >
                  Server Support
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  href={links.topgg}
                  external={true}
                  className="text-l text-muted-foreground"
                >
                  Vote on Top.gg
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/status" className="text-muted-foreground">
                  Status
                </LinkWrapper>
              </li>
            </ul>
            <LinkWrapper
              href={links.mewstify}
              external={true}
              className="text-l text-muted-foreground"
            >
              Mewstify
            </LinkWrapper>
            <Separator className="my-6 lg:my-8" />
          </div>
        </div>
        <div className="text-center">
          <span className="text-sm text-muted-foreground">
            Made with ♥ in Bogor <br />
            Mewwme&apos;s &copy; 2022 - {new Date().getFullYear()} All Rights
            Reserved.
          </span>
          {/* 
          Designed by L RMN 
          DO NOT EDIT OR REMOVE THIS SECTION WITHOUT PERMISSION.
          */}
          <div className="absolute bottom-10 right-10 hidden text-sm text-muted-foreground md:block">
            Designed by
            <LinkWrapper
              href={links.developer}
              external={true}
              className="text-l text-muted-foreground hover:underline"
            >
              {' '}
              L RMN
            </LinkWrapper>
          </div>
        </div>
      </div>
    </footer>
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
