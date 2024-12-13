"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedBackground from "./background";

export function PortfolioComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <AnimatedBackground /> */}
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold"
          >
            Litti8
          </a>
          <div className="hidden md:flex space-x-4">
            <a
              href="#about"
              className="hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-16 left-0 right-0 bg-background z-40 md:hidden"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
      <AnimatedBackground>
        {/* Hero Section */}
        <section
          id="about"
          className="pt-20 md:pt-32 pb-16 md:pb-32 flex items-center"
        >
          <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between md:space-x-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Lisandro Piatti
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Software Developer
              </p>
              <p className="max-w-2xl text-lg mb-8">
                Proactive and solutions-oriented{" "}
                <strong>Software Developer</strong>. Skilled in presenting
                creative, analytical, or pragmatic solutions.{" "}
                <strong>Problem-solving</strong> applying expertise to generate
                innovative ideas. Committed to continuous learning of new
                technologies and enhancing skills. Efficient team player with
                experience in using <strong>SCRUM</strong>.
              </p>
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 md:mb-0"
            >
              <Image
                src="/profile_webp.webp"
                alt="Lisandro Piatti"
                width={300}
                height={300}
                className="rounded-full border-4 border-primary"
              />
            </motion.div>
          </div>
        </section>
      </AnimatedBackground>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 md:py-32 bg-muted/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            My Skills
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {[
              "JavaScript",
              "Python",
              "Node.js",
              "TypeScript",
              "React",
              "HTML5",
              "CSS3",
              "MongoDB",
              "PostgreSQL",
              "Git",
              "GitHub",
              "Jest",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-background p-4 rounded-lg shadow-md text-center"
              >
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatedBackground>
        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 md:py-32"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "E-commerce Platform",
                  description:
                    "A full-stack e-commerce solution with React and Node.js",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Task Management App",
                  description:
                    "A React-based task manager with drag-and-drop functionality",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Weather Dashboard",
                  description: "Real-time weather app using OpenWeatherMap API",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Portfolio Website",
                  description:
                    "A responsive portfolio website built with Next.js",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted p-6 rounded-lg shadow-md"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="default"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-32 bg-muted/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Get in Touch
          </h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded-md border border-input bg-background"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md border border-input bg-background"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-2 rounded-md border border-input bg-background"
              ></textarea>
              <Button
                type="submit"
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}
