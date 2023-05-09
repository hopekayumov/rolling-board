import Hero from "@/components/hero/hero";
import Card from "@/components/card/card";
import ContentInfo from "@/components/content-info/content-info";
import styles from "./page.module.css";

// Cards Images
import Icon1 from "../assets/Group.svg";
import Icon2 from "../assets/2.svg";
import Icon3 from "../assets/3.svg";

import ProjectIcon from "../assets/Projects.svg";
import PackageIcon from "../assets/Package.svg";
import SignUpIcon from "../assets/Signup.svg";

interface CardsData {
  title: string;
  description: string;
  icon: any;
}

interface PurposeData {
  purpose: string;
  title: string;
  description: string;
  image: any;
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

const PurposeData: PurposeData[] = [
  {
    purpose: "Universal",
    title: "Build the workflow you want",
    description:
      "Manage your boards using Drag-n-Drop, create adittional boards and tasks.",
    image: ProjectIcon,
  },
  {
    purpose: "Optimized",
    title: "Everything you need in one place",
    description:
      "You can specify additional info in task description and assign users.",
    image: PackageIcon,
  },
  {
    purpose: "Unlimited",
    title: "No limits for all users.",
    description: "Unlimited kanban boards, columns and tasks.",
    image: SignUpIcon,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      {/* Cards */}
      <section className={styles.cards}>
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
      </section>

      {/* Purpose section */}

      <section className={styles.purpose}>
        <ul className={styles.purpose__list}>
          {PurposeData.map((item, index) => (
            <li key={index}>
              <ContentInfo
                row={index % 2 === 0 ? "row" : "reverse"}
                title={item.title}
                description={item.description}
                purpose={item.purpose}
                image={item.image}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
