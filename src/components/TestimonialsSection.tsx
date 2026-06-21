import { motion } from "motion/react";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns";
import { EmptyTestimonial } from "@/components/EmptyTestimonial";

const testimonials: Testimonial[] = [
  {
    text: "The Aira Dry Cleaning website exceeded our expectations. Fast, responsive, and the design perfectly captures our brand identity. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Aira Wahyuni",
    role: "Owner, Aira Dry Cleaning",
  },
  {
    text: "Professional, reliable, and detail-oriented. Delivered the Scholarify project on time with zero issues. The platform handles thousands of users smoothly.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Rizky Hidayat",
    role: "Founder, Scholarify Academy",
  },
  {
    text: "Shipped our redesign 2 weeks ahead of schedule. Best frontend engineer we've worked with — communication was crystal clear the whole way.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Sarah Lestari",
    role: "Product Manager",
  },
  {
    text: "A rare developer who understands both design and code. The animations made our landing page stand out and conversion rate improved significantly.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Dewi Permata",
    role: "Marketing Lead",
  },
  {
    text: "His frontend skills are top-notch. React components were well-structured, reusable, and easy to maintain. Our dev team learned a lot from his code.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Maya Anggraini",
    role: "Senior Engineer",
  },
  {
    text: "Took our vague ideas and turned them into a polished product. The UI/UX suggestions he made were spot-on. Will definitely work together again.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Andi Pratama",
    role: "CEO, Startup",
  },
  {
    text: "Responsive, communicative, and always meets deadlines. He cares about the product, not just the code. A true professional.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Fitri Handayani",
    role: "Project Manager",
  },
  {
    text: "Clean code, clean design, clean communication. Three things I value most in a developer, and Ahmad delivers all of them consistently.",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
    name: "Sari Indah",
    role: "Design Director",
  },
  {
    text: "The attention to micro-interactions elevated the entire product. Users notice the difference — and they love it.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Doni Firmansyah",
    role: "CTO",
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

