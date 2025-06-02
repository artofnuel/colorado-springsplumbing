import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCheck,
  FaUsers,
  FaHandshake,
  FaAward,
  FaTools,
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import Testimonials from "../components/Testimonials";

const AboutPage = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PageTransition>
      <section className="bg-primary-500 py-24 md:py-32">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our company, our values, and our commitment to providing
            exceptional plumbing services in Colorado Springs.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16" ref={heroRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Colorado Springs Plumbing began with a simple
                mission: to provide honest, reliable, and high-quality plumbing
                services to the Colorado Springs community. What started as a
                small, family-owned business has grown into a trusted local
                plumbing company with a reputation for excellence.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, James Wilson, started his career as an apprentice
                plumber and worked his way up through the industry. After years
                of seeing how larger companies often prioritized profits over
                people, he decided to create a plumbing service that would put
                customers first and focus on building lasting relationships
                within the community.
              </p>
              <p className="text-gray-700">
                Today, our team of licensed plumbers continues this tradition,
                combining technical expertise with exceptional customer service
                to solve plumbing problems of all sizes.
              </p>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1619759247378-6a73e3ad45f1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our team of plumbers"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50" ref={valuesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">
              These core principles guide everything we do and shape how we
              serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandshake />,
                title: "Integrity",
                description:
                  "We believe in honesty, transparency, and doing what's right—even when no one is looking.",
              },
              {
                icon: <FaAward />,
                title: "Excellence",
                description:
                  "We're committed to delivering the highest quality workmanship on every job, no matter the size.",
              },
              {
                icon: <FaUsers />,
                title: "Community",
                description:
                  "As a local business, we're dedicated to serving and giving back to the Colorado Springs community.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16" ref={teamRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Our experienced professionals are dedicated to providing you with
              the best plumbing service possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "James Wilson",
                position: "Founder & Master Plumber",
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                bio: "With over 20 years of experience, James founded Colorado Springs Plumbing to provide honest, quality service to the community.",
              },
              {
                name: "Maria Rodriguez",
                position: "Service Manager",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                bio: "Maria ensures our operations run smoothly and that our customers receive prompt, professional service on every call.",
              },
              {
                name: "David Thompson",
                position: "Lead Technician",
                image:
                  "https://images.unsplash.com/photo-1540476547779-348beb642680?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                bio: "David specializes in complex installations and repairs, bringing technical expertise and attention to detail to every project.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-[350px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Credentials</h2>
              <p className="text-gray-700 mb-6">
                We're proud to be fully licensed, bonded, and insured. Our team
                is committed to ongoing training to stay current with the latest
                plumbing technologies and techniques.
              </p>

              <ul className="space-y-4">
                {[
                  "Licensed Master Plumbers",
                  "Fully Insured and Bonded",
                  "BBB A+ Rating",
                  "EPA Certified",
                  "Green Plumbing Certified",
                  "Member of Colorado Plumbing Association",
                  "Ongoing Professional Training",
                ].map((credential, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FaCheck className="text-primary-500 mt-1.5 mr-3" />
                    <span className="text-gray-700">{credential}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow p-6 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                      <FaAward />
                    </div>
                    <p className="font-medium">Certification {index}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </PageTransition>
  );
};

export default AboutPage;
