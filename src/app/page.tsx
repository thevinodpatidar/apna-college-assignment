"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    text: "This platform has significantly improved my understanding of DSA. Highly recommended!",
    name: "John Doe",
    title: "Software Engineer",
  },
  {
    id: 2,
    text: "The interactive coding environment is fantastic for practicing DSA concepts.",
    name: "Jane Smith",
    title: "Full Stack Developer",
  },
  {
    id: 3,
    text: "I've seen a notable improvement in my problem-solving skills thanks to this platform.",
    name: "Mike Johnson",
    title: "Data Scientist",
  },
  // Add more reviews as needed
];

export default function Home() {
  const router = useRouter();
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = useCallback(() => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevReview = useCallback(() => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextReview, 5000); // Change review every 5 seconds
    return () => clearInterval(timer);
  }, [nextReview]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="text-2xl font-bold">
            DSA Platform
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/courses" className="hover:text-blue-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/problems" className="hover:text-blue-400">
                  Problems
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div className="space-x-4">
            <Button variant="outline" onClick={() => router.push("/login")}>
              Log In
            </Button>
            <Button onClick={() => router.push("/signup")}>Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16">
          {/* Text and button section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              DSA Learning Platform
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Master Data Structures and Algorithms with our interactive
              learning platform
            </p>
            <Button
              className="text-lg px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              onClick={() => router.push("/login")}
            >
              Get Started
            </Button>
          </div>

          {/* Image/placeholder section */}
          <div className="md:w-1/2">
            <div className="bg-gray-700 w-full h-80 md:h-96 rounded-lg flex items-center justify-center">
              <span className="text-2xl text-gray-400">Image Placeholder</span>
            </div>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="bg-gray-700 py-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">
              Trusted by leading companies
            </h2>
            <div className="flex overflow-hidden space-x-8">
              <div className="flex space-x-8 animate-carousel">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    className="flex items-center justify-center w-40 h-20 bg-gray-600 rounded"
                  >
                    <span className="text-gray-400">Logo {num}</span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-8 animate-carousel">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div
                    key={num}
                    className="flex items-center justify-center w-40 h-20 bg-gray-600 rounded"
                  >
                    <span className="text-gray-400">Logo {num}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Sections */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Interactive Learning
                </h2>
                <p className="text-lg">
                  Engage with our interactive coding environment to practice DSA
                  concepts in real-time.
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <span className="text-2xl text-gray-400">Feature Image 1</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center mb-16">
              <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Comprehensive Curriculum
                </h2>
                <p className="text-lg">
                  Access a wide range of DSA topics, from basic to advanced,
                  curated by industry experts.
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <span className="text-2xl text-gray-400">Feature Image 2</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Progress Tracking</h2>
                <p className="text-lg">
                  Monitor your learning journey with detailed progress reports
                  and performance analytics.
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <span className="text-2xl text-gray-400">Feature Image 3</span>
              </div>
            </div>
          </div>
        </section>

        {/* Review Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Users Say
            </h2>
            <div className="max-w-2xl mx-auto relative">
              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full"
                aria-label="Previous review"
              >
                ←
              </button>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-lg mb-4">{reviews[currentReview].text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-semibold">
                      {reviews[currentReview].name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {reviews[currentReview].title}
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full"
                aria-label="Next review"
              >
                →
              </button>
              <div className="flex justify-center mt-4">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      index === currentReview ? "bg-blue-500" : "bg-gray-500"
                    }`}
                    onClick={() => setCurrentReview(index)}
                    aria-label={`Go to review ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">DSA Platform</h3>
              <p className="text-gray-400">
                Empowering developers to master Data Structures and Algorithms.
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/courses"
                    className="text-gray-400 hover:text-white"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/problems"
                    className="text-gray-400 hover:text-white"
                  >
                    Problems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Email: info@dsaplatform.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
                <a href="#" className="text-gray-400 hover:text-white">
                  FB
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  TW
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  IN
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 DSA Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
