import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 section-padding">
      <div ref={ref} className="max-w-3xl mx-auto">
        <p className={`text-primary text-sm font-medium tracking-[0.25em] uppercase mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Background
        </p>
        <h2 className={`font-display text-4xl md:text-5xl tracking-wide text-foreground mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          ABOUT ME
        </h2>

        <div className={`space-y-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            I am a strong and aggressive defender who brings control, discipline, and leadership to the backline. I take pride in my ability to read the game, win duels, and maintain defensive structure under pressure. My communication on the field allows me to organize the defense effectively and ensure stability throughout the game.ing me a reliable and versatile presence on the flank.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            My game is built on confidence, awareness, and consistency. I excel in 1v1 situations, staying composed while making decisive interventions. Whether defending deep or stepping forward to challenge, I bring intensity, focus, and a winning mentality every time I step onto the pitch.
          </p>
          <p className="text-foreground font-semibold text-lg mt-8 border-l-2 border-primary pl-4">
            Competing at club level in Sweden, bringing consistency and defensive leadership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
