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
  <div style={{ marginTop: '60px' }}>
    <QuickCTA />
  </div>
  <div style={{ marginTop: '80px' }}>
    <ProjectsSection projects={projects} />
  </div>
  <div style={{ marginTop: '60px' }}>
    <ContactSection />
  </div>
</main>
  )
}