"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Briefcase, Code2, ExternalLink, GraduationCap, Mail, MenuIcon, XIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projeler');


  const projects = [
     {
      id: 0,
      title: "Cybernate Security",
      description: "Siber güvenlik için yaptığım bir uygulama ve onun tanıtıldığı web sitesi`2 proje içerir`",
      image: "/cybernate.jpg",
      tags: ["Next.js", "TypeScript",  "Shadcn-ui", "Tailwind CSS", "Docker"],
      demo: "http://cybernate.com.tr/",
      year: "2025"
    },
    {
      id: 1,
      title: "E-Ticaret Web Sitesi",
      description: "Modern ve ölçeklenebilir bir e-ticaret çözümü. Ödeme entegrasyonları, envanter yönetimi ve kullanıcı analitikleri içerir.",
      image: "/e-commerce.png",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Shadcn-ui", "Tailwind CSS", "Supabase", "Mongosh", "Docker", "Api Route"],
      github: "https://github.com/senayakagunduz/next-prisma-project",
      demo: "https://demo.com",
      year: "2025"
    },
    {
      id: 2,
      title: "LLM Log Dashboard Uygulaması",
      description: "LLM den gelen logların raporlanabilmesi ve filtrelenmesi için yapılan, admin panelli dashboard uygulaması",
      image: "/llm-dashboard.png",
      tags: ["Next.js", "TypeScript", "Shadcn-ui", "Tailwind CSS", "MongoDB", "Prisma", "Mongosh", "Docker"],
      github: "https://github.com/senayakagunduz/llm-dashboard",
      demo: "https://demo.com",
      year: "2025"
    },
    // {
    //   id: 3,
    //   title: "AI Chatbot Dashboard",
    //   description: "OpenAI API kullanarak geliştirilmiş akıllı sohbet botu yönetim paneli. Analytics ve kullanıcı etkileşim raporları.",
    //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    //   tags: ["Next.js", "OpenAI", "Tailwind", "Prisma"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    //   year: "2025"
    // },
    {
      id: 4,
      title: "Otel Rezervasyon Uygulaması",
      description: "Otel rezervasyon sistemi. Kullanıcıların otel rezervasyonlarını yapabilmeleri için tasarlanmış bir uygulama.",
      image: "/hotel-reservation.png",
      tags: ["Next.js", "MongoDB", "Shadcn-ui", "Prisma", "Mongosh", "Docker", "Api Route"],
      github: "https://github.com/senayakagunduz/hotel-reservation",
      demo: "https://demo.com",
      year: "2025"
    },
    {
      id: 5,
      title: "User Management app",
      description: "Kullanıcı ekleme,pagination, search, update, delete fonksiyonların olduğu bir Vue.js uygulaması",
      image: "/usermanagement.png",
      tags: ["Vue.js", "Vite", "Yup", "Axios", "Bootstrap", "Formik", "TypeScript"],
      github: "https://github.com/senayakagunduz/user-management-app",
      demo: "https://user-management-app.vercel.app/",
      year: "2025"
    },
    // {
    //   id: 6,
    //   title: "AI Assistant",
    //   description: "OpenAI API kullanarak geliştirilmiş akıllı sohbet botu yönetim paneli. Analytics ve kullanıcı etkileşim raporları.",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    //   tags: ["Python", "Airtable", "Express", "Redis"],
    //   github: "https://github.com/senayakagunduz/AIAssistant",
    //   demo: "https://demo.com",
    //   year: "2025"
    // },
    {
      id: 7,
      title: "Vantageride",
      description: "Araç Kiralama Platformu",
      image: "/vantageride.png",
      tags: ["React.js", "Rest API", "Axios", "Formik", "Yup", "Swal2", "React-Boootstrap"],
      github: "",
      demo: "https://www.vantageride.com/",
      year: "2024"
    },
    {
      id: 8,
      title: "Ricky and Morty",
      description: "Ricky and Morty karakterlerini yönetebileceğiniz bir uygulama",
      image: "/ricky&morty.png",
      tags: ["React.js", "Bootstrap", "Redux Toolkit", "Axios", "REST API"],
      github: "https://github.com/senayakagunduz/rickyandmorty",
      demo: "https://rickyandmorty-tawny.vercel.app/",
      year: "2024"
    },
    {
      id: 9,
      title: "Let's Watch Movie",
      description: "",
      image: "/letswatchmovie.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React-bootstrap", "Axios", "REST API", "Formik", "Swiper", "Yup", "Swal2", "Daisy-ui"],
      github: "https://github.com/senayakagunduz/letswatchmovie-next",
      demo: "https://letswatchmovie.vercel.app/",
      year: "2024"
    },
    {
      id: 10,
      title: "Shopping web site",
      description: "",
      image: "/shopping.png",
      tags: [],
      github: "https://github.com/senayakagunduz/web-shopping/tree/master",
      demo: "https://web-shopping-five.vercel.app/",
      year: "2023"
    },
    {
      id: 11,
      title: "Cookery",
      description: "Endüstriyel mutfak ürünleri satan bir web sitesi",
      image: "/cookery.png",
      tags: ["React.js", "TypeScript", "Tailwind CSS", "React-bootstrap", "Axios", "REST API", "Formik", "Swiper", "Yup", "Swal2", "Daisy-ui"],
      github: "",
      demo: "https://kitchencom.vercel.app/",
      year: "2023"
    },
    {
      id: 12,
      title: "OneMore Web Site",
      description: "Clone Project",
      image: "/onemore.png",
      tags: [],
      github: "https://github.com/senayakagunduz/OneMoreClone",
      demo: "https://senay-akagunduz-networkmarketing.netlify.app/",
      year: "2022"
    },
    {
      id: 13,
      title: "English Dictionary",
      description: "",
      image: "/dictionary.png",
      tags: ["React", "Tailwind CSS", "Axios", "REST API"],
      github: "https://github.com/senayakagunduz/en-dictionary-tailwind",
      demo: "https://senayakagndz-english-dict-tailwnd.netlify.app/",
      year: "2022"
    },
    {
      id: 14,
      title: "Forecast",
      description: "",
      image: "/forecast.png",
      tags: ["javascript"],
      github: "https://github.com/senayakagunduz/forecast-app",
      demo: "https://forecast-app-q5m5.vercel.app/",
      year: "2022"
    },
    // {
    //   id: 14,
    //   title: "TV Maze Film Platform",
    //   description: "",
    //   image: "/tvmaze.png",
    //   tags: ["javascript"],
    //   github: "https://github.com/senayakagunduz/JS-FILM-PROJECT",
    //   demo: "https://tvmaze-js.netlify.app/",
    //   year: "2022"
    // }
  ];

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Semper-Tech .",
      period: "01.05.2024 - 03.10.2025",
      description: "Modern web uygulamaları geliştirme, backend entegrasyonları, API entegrasyonları, deployment ve mimari kararlar alma.",
      skills: ["React", "Next.js", "TypeScript", "Deployment", "Api Routes", "Prisma", "MongoDB", "Linux", "GitLab", "Tailwind CSS", "Node.js", "Angular", "Vue.js", "Docker", "Redux Toolkit", "Postman", "REST API"]
    },
    {
      role: "Frontend Developer",
      company: "Freelance",
      period: "2022 - 2024",
      description: "Müşteri projeleri için frontend çözümler geliştirme ve Api entegrasyonları.",
      skills: ["Javascript", "React", "PostgreSQL", "Next.js", "Prisma", "MongoDB", "Linux", "Git", "TypeScript", "Redux"]
    },
    {
      role: "Frontend Developer",
      company: "Unite BT",
      period: "2012 - 2014",
      description: "Web uygulaması geliştirme, bug fixing ve kod review süreçlerine katılım.",
      skills: ["JavaScript", "html", "Bootstrap", "REST API", "CSS"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
     if (section) {
      const yOffset = -80; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-indigo-100 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('projeler')}
                className={`transition-colors ${activeSection === 'projeler' ? 'text-indigo-600 font-semibold' : 'text-slate-600 hover:text-indigo-600'}`}>
                Projeler
              </button>
              <button onClick={() => scrollToSection('deneyim')}
                className={`transition-colors ${activeSection === 'deneyim' ? 'text-indigo-600 font-semibold' : 'text-slate-600 hover:text-indigo-600'}`}>
                Deneyim
              </button>
              <button onClick={() => scrollToSection('yetenekler')}
                className={`transition-colors ${activeSection === 'yetenekler' ? 'text-indigo-600 font-semibold' : 'text-slate-600 hover:text-indigo-600'}`}>
                Yetenekler
              </button>
              <button onClick={() => scrollToSection('iletisim')}
                className={`transition-colors ${activeSection === 'iletisim' ? 'text-indigo-600 font-semibold' : 'text-slate-600 hover:text-indigo-600'}`}>
                İletişim
              </button>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('projeler')} className="block w-full text-left px-3 py-2 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                Projeler
              </button>
              <button onClick={() => scrollToSection('deneyim')} className="block w-full text-left px-3 py-2 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                Deneyim
              </button>
              <button onClick={() => scrollToSection('yetenekler')} className="block w-full text-left px-3 py-2 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                Yetenekler
              </button>
              <button onClick={() => scrollToSection('iletisim')} className="block w-full text-left px-3 py-2 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                İletişim
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <div className="p-2 w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              <Image src="/profil3.png" alt="Hero" width={200} height={200} className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
          <h1 className="mb-4">
            <div>
              <span className="bg-gradient-to-r text-2xl md:text-3xl font-bold text-slate-600 bg-clip-text "> 
                 Merhaba, Ben{' '}
              </span>
            </div>

            <div className='mt-2'>
              <span className="bg-gradient-to-r text-2xl md:text-4xl font-bold from-indigo-600 to-blue-600 bg-clip-text text-transparent"> 
                Şenay Akagündüz
              </span>
            </div>

          </h1>
          <p className="text-2xl font-bold md:text-3xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Frontend Developer
          </p>
          <p className="text-lg text-slate-500 mb-10 max-w-3xl mx-auto">
            Modern web teknolojileri kullanarak kullanıcı dostu, ölçeklenebilir ve performanslı
            uygulamalar geliştiriyorum. İnovasyon ve kod kalitesi tutkusuyla çalışıyorum.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Mail className="w-4 h-4 mr-2" />
              İletişime Geç
            </Button>
            <Link href="https://github.com/senayakagunduz" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                <FaGithub className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </Link>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projeler" className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Projelerim</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Üzerinde çalıştığım ve tamamladığım projelerim
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white group">
                {/* <div className="relative overflow-hidden w-full h-72"> */}
                  <div className="relative overflow-hidden w-full aspect-[4/3] md:aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  </div>
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                {/* </div> */}
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">{project.title}</CardTitle>
                  <CardDescription className="text-base text-slate-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex space-x-3">
                  <Button variant="outline" className="flex-1 border-slate-300 hover:bg-slate-50" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-4 h-4 mr-2" />
                      Kod
                    </a>
                  </Button>
                  <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="deneyim" className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Deneyimlerim</h2>
            <p className="text-lg text-slate-600">Profesyonel kariyer yolculuğum</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-indigo-600 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-900">{exp.role}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        <span className="font-semibold text-indigo-600">{exp.company}</span> • {exp.period}
                      </CardDescription>
                    </div>
                    <Briefcase className="w-6 h-6 text-indigo-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="yetenekler" className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Teknik Yetenekler</h2>
            <p className="text-lg text-slate-600">Kullandığım teknolojiler ve araçlar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader>
                <Code2 className="w-12 h-12 mx-auto text-indigo-600 mb-2" />
                <CardTitle className="text-xl">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["React", "Next.js", "TypeScript", "Tailwind", "Redux"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-50 text-blue-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto text-indigo-600 mb-2" />
                <CardTitle className="text-xl">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-50 text-green-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader>
                <GraduationCap className="w-12 h-12 mx-auto text-indigo-600 mb-2" />
                <CardTitle className="text-xl">Araçlar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Git", "Docker", "AWS", "Vercel", "Figma"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-50 text-purple-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">İletişime Geçin</h2>
          <p className="text-lg text-slate-600 mb-12">
            Yeni projeler, iş birlikleri veya sadece merhaba demek için benimle iletişime geçebilirsiniz
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
              <a href="mailto:senayakgndz@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Mail
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300" asChild>
              <a href=" https://github.com/senayakagunduz" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300" asChild>
              <a href="https://www.linkedin.com/in/senayakagunduz/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>

          <Card className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-0">
            <CardContent className="pt-6">
              <p className="text-lg mb-4">Bir proje fikriniz mi var?</p>
              <p className="text-indigo-100 mb-6">
                Birlikte harika bir şeyler yaratmak için konuşalım!
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-slate-100">
                Hemen Başlayalım
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com" className="hover:text-indigo-400 transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-indigo-400 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:email@example.com" className="hover:text-indigo-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-400">
            © 2025 Tüm hakları saklıdır. Sevgiyle tasarlandı ve geliştirildi.
          </p>
        </div>
      </footer>
    </div>
  );
}
