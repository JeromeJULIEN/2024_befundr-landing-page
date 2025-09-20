import Image from "next/image";
import { AnimatedBlock } from "./displayElements/AnimatedBlock";
import FaqQuestionCard from "./displayElements/FaqQuestionCard";

const FaqSection = () => {
  return (
    <AnimatedBlock className="relative flex flex-col w-full mt-8 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12 ">
        <h1 className="h1Style my-6 text-center">
          Frequently Asked <strong className="text-accent">Questions</strong>
        </h1>

        <h2 className="h2Style mb-6">Builders</h2>
        <FaqQuestionCard question="How do I launch my project on beFUNDR?">
          <p>
            Launching is simple. If you&apos;re part of our trusted communities,
            you can list your project directly on beFUNDR. From there, share
            your progress, gather feedback, and engage your early supporters.
            Once ready, you can launch your token sale through Jupiter Studio.
          </p>
        </FaqQuestionCard>
        <FaqQuestionCard question="What happens if my token sale succeeds?">
          <p>
            If your token reaches the migration point of the bonding curve and
            becomes tradable, your project officially enters the incubation
            phase. From there, you&apos;ll receive community support, partner
            workshops, and access to exclusive resources to grow.
          </p>
          <Image
            src="/images/incubation-process/incubation-selection.png"
            alt="befundr funding process"
            width={500}
            height={500}
            className="w-full md:w-2/3 mx-auto my-6"
          />
          <p>Then, you earn 40% of the LP fees, fueling your growth.</p>
        </FaqQuestionCard>

        <FaqQuestionCard question="Do I need a full team or product before applying?">
          <p>
            No. beFUNDR is designed for early builders. You can start with an
            idea or prototype. What matters is credibility, commitment, and
            engagement with your community.
          </p>
        </FaqQuestionCard>
        <FaqQuestionCard question="What support do incubated projects get?">
          <p>
            Incubated projects are fueled by their token sale and 40% of the LP
            fees. Those funds can be used to pay for partner services.
          </p>
          <Image
            src="/images/incubation-process/incubation-LP-fee.png"
            alt="befundr funding process"
            width={500}
            height={500}
            className="w-full md:w-2/3 mx-auto my-6"
          />
          <p>
            They also gain access to dedicated Discord channels, ecosystem
            partners (legal, marketing, development, tokenomics), and our Skills
            & Missions Hub to recruit teammates or contributors.
          </p>
        </FaqQuestionCard>
        <FaqQuestionCard question="What is the cost of incubation?">
          <p>beFUNDR take 10% of the LP fees and 2% of the token supply.</p>
        </FaqQuestionCard>
        <h2 className="h2Style mb-6 mt-12">Investors</h2>
        <FaqQuestionCard question="How can I support early projects?">
          <p>
            You can invest directly during a project’s token sale on Jupiter
            Studio. Participation gives you early access, liquidity exposure,
            and the chance to back credible builders vetted by trusted
            communities.
          </p>
        </FaqQuestionCard>

        <FaqQuestionCard question="What are the risks of supporting early-stage projects?">
          <p>
            As with all early-stage ventures, there&apos;s risk. Some teams may
            pivot or fail. But beFUNDR reduces this risk by aligning incentives
            around community reputation, transparent on-chain processes, and
            demand-driven validation.
          </p>
        </FaqQuestionCard>
        <h2 className="h2Style mb-6 mt-12">Communities</h2>
        <FaqQuestionCard question="Why are communities central to beFUNDR?">
          <p>
            Communities are the new trust layer. They help validate projects
            through investment, provide the first users, and even contribute
            directly through the Skills & Missions Hub. Unlike traditional
            incubators, selection and support come from the people who will
            actually use and build the ecosystem.
          </p>
          <p>
            This decentralized trust layer replaces the need for traditional
            gatekeepers and aligns incentives around real builder reputation.
          </p>
        </FaqQuestionCard>

        <FaqQuestionCard question="How can my community contribute to the beFUNDR ecosystem?">
          <p>
            Communities can contribute by endorsing projects, offering
            mentorship, and even co-incubating projects.
          </p>
          <p>
            Being active in beFUNDR opens doors to early project access and
            reputation-based influence across the ecosystem.
          </p>
          <p>Want to join our list of communities? Contact us!</p>
        </FaqQuestionCard>
        <h2 className="h2Style mb-6 mt-12">Partners</h2>
        <FaqQuestionCard question="How can I become a beFUNDR partner?">
          <p>
            We&apos;re looking for Web3-native partners across dev tools, infra,
            security, legal, tokenomics, and growth. If you want to support
            credible early builders, reach out through our X account or website.
          </p>
        </FaqQuestionCard>

        <FaqQuestionCard question="What role do partners play?">
          <p>
            Partners bring specialized expertise. They provide dedicated
            workshops and give access to their services to incubated teams.
            Communities bring energy, but partners bring precision and guidance.
          </p>
        </FaqQuestionCard>
        <FaqQuestionCard question="How do projects work with partners?">
          <p>
            Teams can use funds from their token sale and LP fees to pay for
            partner services. This ensures the right expertise at the right
            time.
          </p>
        </FaqQuestionCard>
      </div>
    </AnimatedBlock>
  );
};

export default FaqSection;
