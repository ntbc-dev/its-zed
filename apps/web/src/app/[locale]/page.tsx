import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { FeaturedCard } from '@/components/featured-card'
import { Announcement } from '@/components/announcement'
import { buttonVariants } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { Vortex } from '@/components/ui/vortex'
import { Icons } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { Link } from '@/navigation'
import { cn } from '@/lib/utils'

import {
  PageHeader,
  PageActions,
  PageHeaderHeading,
  PageHeaderDescription,
} from '@/components/page-header'

import type { LocaleOptions } from '@/lib/opendocs/types/i18n'

export const dynamicParams = true

export default async function IndexPage({
  params,
}: {
  params: { locale: LocaleOptions }
}) {
  unstable_setRequestLocale(params.locale)

  const t = await getTranslations()

  return (
    <div className="container relative">
      <PageHeader>
        {/* <Announcement title={t('site.announcement')} href="/docs" /> */}

        <PageHeaderHeading>
          <FlipWords
            words={["ITS Zambia", "It's ZED"]}
            className="text-7xl lg:text-9xl -z-10"
          />

          <TextGenerateEffect words={t("site.heading")} />
        </PageHeaderHeading>

        <PageHeaderDescription>{t("site.description")}</PageHeaderDescription>

        {/* <PageActions>
          <Link href="/docs" className={cn(buttonVariants())}>
            {t('site.buttons.get_started')}
          </Link>

          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github.url}
            title={siteConfig.links.github.label}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.gitHub className="mr-2 size-4" />
            {siteConfig.links.github.label}
          </Link>
        </PageActions> */}

        <div className="fixed left-0 -top-40 size-full -z-10 overflow-hidden">
          <Vortex
            backgroundColor="transparent"
            className="flex size-full"
            rangeY={300}
            baseRadius={2}
            particleCount={20}
            rangeSpeed={1.5}
          />
        </div>
      </PageHeader>

      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4">
          <FeaturedCard
            icon="🧬"
            title="Facilitating connections and collaborations."
            description="ITS-Zed aspires to provide a platform for attendees to connect with peers, share ideas, and inspire each other"
          />

          <FeaturedCard
            icon="⚡️"
            title="Mentorship and support for tech startups"
            description=" ITS-Zed will offer opportunities for startups to connect with investors, mentors, and ecosystem enablers"
          />

          <FeaturedCard
            icon="🚀"
            title="Celebrating the achievements of Zambian innovators "
            description="The summit will culminate in an awards gala recognizing the winners of various pitching competitions"
          />

          <FeaturedCard
            icon="🌍"
            title="Promote emerging technologies in businesses"
            description="The summit will feature a masterclass and TeDex talk focusing on how tech startups can leverage technologies"
          />
        </div>

        {/* <FeaturedCard
          icon="+"
          orientation="horizontal"
          title={t('site.featured_cards.more.title')}
          description={t('site.featured_cards.more.description')}
        /> */}
      </section>
    </div>
  );
}
