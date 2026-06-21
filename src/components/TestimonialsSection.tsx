import { motion } from "motion/react";
import { EmptyTestimonial } from "@/components/EmptyTestimonial";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

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
];

export function TestimonialsSection() {
  if (testimonials.length === 0) {
    return <EmptyTestimonial />;
  }

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

        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ text, image, name, role }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="rounded-3xl border shadow-lg shadow-primary/10 p-8 flex flex-col justify-between"
            >
              <p className="text-foreground/90 leading-relaxed">{text}</p>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t">
                <img
                  width={44}
                  height={44}
                  src={image}
                  alt={name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold tracking-tight">{name}</p>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

