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
    category: "Previous CTO",
    title: "Shinji Kuwayama",
    src: "/images/shinji.jpeg",
    feedback:
      "Lester's a productive engineer, and a proactive, good-natured teammate. He was well-respected by his team and manager, and I hope to work with him again in the future!",
  },
  {
    category: "Previous CEO",
    title: "Burton Tripathi",
    src: "/images/burton.jpeg",
    feedback:
      "Lester was a pleasure to work with. He is smart, thoughtful, humble, and interesting. He fits in well and always brings a smile and positive attitude. You will not regret time spent with Lester.",
  },
  {
    category: "Former Teammate",
    title: "Josh Isaac",
    src: "/images/josh.jpeg",
    feedback:
      "Lester is super sharp. In the brief period I worked with him, he taught me about the details of our front end XML code, how to get the arcane properties of Visual Studio to play nice when debugging and running tests, and how you might use lambdas in C++. He's super friendly, highly motivated, and always trying to learn something new. Can't recommend him enough.",
  },
  {
    category: "Former Teammate",
    title: "Chen Chen",
    src: "/images/chen.jpeg",
    feedback:
      "I worked with Lester for a year at TrueVision Systems. He is really good at learning and applying the knowledge. Also, his teamwork impressed me deeply. Lester is a good learner and he enjoys learning. He can learn new skill very quickly and use them in the work. Though he already have the skills to resolve the problems descently, he still tries to explore new Cpp 11 or 17 features, or new design patterns in his programming to do the things more elegantly. He also helped engineers of another team set up our distributed Jenkins test server, though it was not his domain. After that he became the tech lead of testing and guided us a a lot on it. Moreover, Lester likes sharing knowledges after he learn it. He always sends the email to the team to introduce those new knowledges and documents them explicitly on Confluence, our knowledge sharing web. When I ask questions in his domain, he always gives me detailed answer and sometimes pair-programs with me. He is a real team worker. Also he is really a funny guy and awesome photographer! It’s very exciting and it’s my pleasure to work with him.",
  },
  {
    category: "Former Teammate",
    title: "Logan Scheiner",
    src: "/images/josh.jpeg",
    feedback:
      "I met Lester at TrueVision Systems, Inc. and worked alongside him developing software for approximately one year. Lester was a great asset to our team: his exploratory nature is well suited to unraveling complex problems. Whether it's integrating new technologies to existing systems or simply wading into uncharted code, Lester's able to dive in, learn about the environment, and make considerable progress. What I see in Lester is a true passion for learning new skills, technologies, and processes. It's a pleasure to work and collaborate with Lester. I always feel comfortable asking him for assistance or clarification. While pairing and during code review he takes his time to elaborate on questions and gives and receives constructive criticism well. His sincere and energetic personality is a welcome addition to any day of the week.",
  },
  {
    category: "Former Teammate",
    title: "Nicholas Tovar",
    src: "/images/nick.jpeg",
    feedback:
      "Lester and I first worked together at TrueVision when he was an intern and then after he successfully made the jump to full-time employee. Even though I can't speak directly to his strengths as a programmer, I do know that he is a great person to have on a team and an asset to any company. He is dedicated to his work and takes his tasks very seriously. He also has a thirst for knowledge and an interest in understanding. This is demonstrated through some of his post here on LinkedIn and his general attitude in daily life. I remember every time I would run into him he would tell me about a new aspect of a project he was working on, but instead of complaining about having to learn something new, he reveled in it, even taking the time to help me understand concepts that he was just beginning to master. Lester's general positive attitude and helpful nature make him a pleasure to work with and when paired with his great work.",
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
      <div className="text-white flex items-center text-base font-bold">
        <span className="w-full text-center">References</span>
      </div>

      <div className="h-full w-full">
        <Carousel items={cards} />
      </div>
    </div>
  );
}
