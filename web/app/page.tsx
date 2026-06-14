import { client } from '@/sanity/client'
import { projectsQuery } from '@/sanity/queries'
import Hero from '@/components/Hero'
import QuickCTA from '@/components/QuickCTA'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export const revalidate = 60

export default async function Home() {
  const projects = await client.fetch(projectsQuery)

  return (
    <main>
      <Hero />
      <div className="mt-8">
        <QuickCTA />
      </div>
      <div className="mt-24">
        <ProjectsSection projects={projects} />
      </div>
      <div className="mt-16">
        <ContactSection />
      </div>
    </main>
  )
}