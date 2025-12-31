import React from 'react'
import Layout from './layout'
import Navbar from '@/app/(home)/components/Navbar'
import Hero from '@/app/(home)/components/Hero'
import ComponentsShowcase from '@/app/(home)/components/ComponentsShowcase'
import AuditCallout from '@/app/(home)/components/AuditCallout'
import Testimonials from '@/app/(home)/components/Testimonials'
import Work from '@/app/(home)/components/Work'
import Link from '@/app/(home)/components/Link'
import AboutUs from '@/app/(home)/components/AboutUs'
import Footer from '@/app/(home)/components/Footer'



const  Page = () => {
  return (
   <Layout>
     <Navbar/>
     <Hero/>
     <div className="bg-background">
       <ComponentsShowcase/>
       <AuditCallout/>
       <Testimonials/>
       <Work/>
      
       <AboutUs/>
       <Link/>
       <Footer/>
     </div>
   </Layout>
  )
}

export default  Page