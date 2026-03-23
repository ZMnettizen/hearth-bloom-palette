import { motion } from "framer-motion";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  { img: project1, title: "Modern Residence", location: "Los Angeles, CA" },
  { img: project2, title: "Timber Living", location: "Portland, OR" },
  { img: project3, title: "Green Retreat", location: "Aspen, CO" },
];

const HeroGrid = () => (
  <section id="projects" className="grid grid-cols-1 md:grid-cols-3 h-[50vh] md:h-[90vh]">
    {projects.map((p, i) => (
      <motion.div
        key={p.title}
        className="relative overflow-hidden cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
      >
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 w-full bg-foreground/50 text-primary-foreground p-5 text-center">
          <h3 className="font-display text-lg font-semibold">{p.title}</h3>
          <p className="font-body text-sm opacity-80">{p.location}</p>
        </div>
      </motion.div>
    ))}
  </section>
);

export default HeroGrid;
