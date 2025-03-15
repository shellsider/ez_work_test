import Card from "./Card";
import PresentationDesignLogo from "./../../assets/presentation-design.png";
import AudioVisualLogo from "./../../assets/audio-visual.png";
import TranslationServiceLogo from "./../../assets/translation-service.png";
import GraphicDesignLogo from "./../../assets/graphic-design.png";
import ResearchAnalyticsLogo from "./../../assets/research-analysis.png";
import DataProcessingLogo from "./../../assets/data-processing.png";

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
    <div className="grid grid-cols-1 gap-5 justify-items-center w-full px-2 sm:px-0 sm:mx-auto md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 lg:max-w-none">
      {cardData.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  );
}

export default CardGrid;
