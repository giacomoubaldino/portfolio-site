import { client } from '@/sanity/client'
import { projectsQuery } from '@/sanity/queries'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'

export const revalidate = 60

export default async function Home() {
  const projects = await client.fetch(projectsQuery)

  return (
    <main>
      <Hero />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <ContactSection />
    </main>
  )
}