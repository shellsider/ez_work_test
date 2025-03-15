//Importing styles
import styles from "./CardGrid.module.css";

//Importing Components
import Card from "./Card";

//Importing Logos
import PresentationDesignLogo from "./../../assets/presentation-design.png";
import AudioVisualLogo from "./../../assets/audio-visual.png";
import TranslationServiceLogo from "./../../assets/translation-service.png";
import GraphicDesignLogo from "./../../assets/graphic-design.png";
import ResearchAnalyticsLogo from "./../../assets/research-analysis.png";
import DataProcessingLogo from "./../../assets/data-processing.png";

//Setting Card's Data
const cardData = [
  {
    title: "Presentation Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    icon: PresentationDesignLogo,
  },
  {
    title: "Audio - Visual Production",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    icon: AudioVisualLogo,
  },
  {
    title: "Translation Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    icon: TranslationServiceLogo,
  },
  {
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    icon: GraphicDesignLogo,
  },
  {
    title: "Research & Analytics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    icon: ResearchAnalyticsLogo,
  },
  {
    title: "Data Processing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    icon: DataProcessingLogo,
  },
];

function CardGrid() {
  return (
    <div className={styles.gridContainer}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
}

export default CardGrid;
