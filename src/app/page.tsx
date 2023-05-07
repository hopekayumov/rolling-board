import Hero from "@/components/hero/hero";
import Card from "@/components/card/card";
import styles from "./page.module.css";

// Cards Images
import Icon1 from "../assets/Group.svg";
import Icon2 from "../assets/2.svg";
import Icon3 from "../assets/3.svg";

interface CardsData {
  title: string;
  description: string;
  icon: any;
}

const CardsData: CardsData[] = [
  {
    title: "Integrate",
    description:
      "The ability to quickly set up and customize workflows for just about anything.",
    icon: Icon1,
  },
  {
    title: "Colaborate",
    description:
      "Manage projects, organize tasks, and build team spirit—all in one place.",
    icon: Icon2,
  },
  {
    title: "Succeed",
    description:
      "Every single part of your task can be managed, tracked, and shared with teammates.",
    icon: Icon3,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <div className={styles.cards}>
        <ul className={styles.cards__list}>
          {CardsData.map((card, index) => (
            <li key={index}>
              <Card
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
