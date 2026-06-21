import { motion } from "motion/react";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns";
import { EmptyTestimonial } from "@/components/EmptyTestimonial";

const testimonials: Testimonial[] = [
  {
    text: "Working with Ahmad was a great experience. He translated our complex requirements into a clean, well-structured web app. Communication was smooth throughout.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Sarah Lestari",
    role: "Product Manager, EdTech",
  },
  {
    text: "The Aira Dry Cleaning website exceeded our expectations. Fast, responsive, and the design perfectly captures our brand identity. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Budi Santoso",
    role: "Owner, Aira Dry Cleaning",
  },
  {
    text: "Professional, reliable, and detail-oriented. Delivered the Scholarify project on time with zero issues. The platform handles thousands of users smoothly.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Rizky Hidayat",
    role: "Founder, Scholarify Academy",
  },
  {
    text: "Took our vague ideas and turned them into a polished product. The UI/UX suggestions he made were spot-on. Will definitely work together again.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Andi Pratama",
    role: "CEO, Startup",
  },
];

export function TestimonialsSection() {
  if (testimonials.length === 0) {
    return <EmptyTestimonial />;
  }

  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);

  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            Kind words from people I've worked with
          </h2>
          <p className="text-center mt-5 opacity-75">
            A few words from clients, teammates, and collaborators.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={first} duration={15} />
          <TestimonialsColumn
            testimonials={second}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={third}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

