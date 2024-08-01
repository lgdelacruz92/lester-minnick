import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

type ContentProps = {
  src: string;
  category: string;
  title: string;
  feedback: string;
};

const Content = ({ src, category, title, feedback }: ContentProps) => {
  return (
    <>
      <div className="dark:bg-neutral-800 md:p-14 mb-4 rounded-3xl bg-[#F5F5F7] p-8">
        <p className="text-neutral-600 dark:text-neutral-400 md:text-2xl mx-auto max-w-3xl font-sans text-base">
          {feedback}
        </p>
        <p className="text-white text-left text-center font-sans text-base font-light">
          {category}
        </p>
        <p className="text-white font-sans[text-wrap:balance] mt-2 text-center text-lg font-bold">
          {title}
        </p>
        <Image
          src={src}
          alt={title}
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 mx-auto h-full w-full object-contain"
        />
      </div>
    </>
  );
};

const data = [
  {
    category: "Previous Manager",
    title: "Jeffrey Eubanks",
    src: "/images/jeff.jpeg",
    feedback:
      "Lester was a level 2 software engineer on a development team that I managed. Shortly after hiring him, I was quickly impressed by his willingness and ability to dive into unfamiliar territory and make progress with very ambiguous requirements. Lester values modern software development practices and has very up-to-date knowledge on the latest tools, technologies, and practices. Given a daunting task in a complex codebase, he is not afraid to dive in and figure out how to get the job done. I also valued Lester’s willingness to unblock teammates and provide suggestions when people were stuck on a problem. Overall, Lester is a productive software engineer who excels at solving challenging technical problems.",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    feedback: "",
  },
];

export default function References() {
  const content = data.map((d) => ({
    ...d,
    content: <Content {...d} />,
  }));
  const cards = content.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="flex flex-col items-center rounded-md p-4">
      <div className="text-white flex items-center pt-4 text-base font-bold">
        <span className="w-full text-center">References</span>
      </div>

      <div className="h-full w-full">
        <Carousel items={cards} />
      </div>
    </div>
  );
}
