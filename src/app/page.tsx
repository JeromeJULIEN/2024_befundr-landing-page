import Image from "next/image";
import logo from "../../public/logo.png";
import logo_only from "../../public/logo_only.png";
import X from "../../public/x.png";
import CollapsibleCard from "@/component/CollapsibleCard";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10 ">
      {/* fist block white bg */}
      <div className="flex flex-col justify-center items-center h-screen gap-10 px-4 md:px-0">
        <div className="relative w-full md:w-2/3">
          <Image alt="logo" src={logo} />
        </div>
        <h1 className="textStyle-title text-center">
          Your <strong className="text-accent">secured</strong> crowdfunding
          platform
        </h1>
        <h3 className="textStyle-headline w-full md:w-2/3 text-center">
          With beFundr, contribute to early projects in the most secure way.
          <br />
          Don&apos;t want to wait for the project&apos;s delivery? Buy an
          available reward directly.
        </h3>
        <FaChevronDown size={30} className="text-accent animate-bounce" />
      </div>
      {/* second block black bg */}
      <div className="bg-black flex flex-col justify-center items-center w-full gap-10 py-10 px-4 md:px-0">
        <h2 className="textStyle-subtitle !text-main text-center">
          Why befundr{" "}
          <strong className="!text-accent">change the crowdfunding</strong> game
          ?
        </h2>
        <div className="flex flex-col items-center justify-start gap-10">
          <CollapsibleCard
            title="More secured"
            text={[
              "Do you know that 18% of kickstarter tunrover is done on projects which never deliver ?",
              "BeFundr put security at the top level of its priority for contributors. You want to support an early project, that's very positive ; but you should never assume one chance out of five to be scammed.",
              "With beFundr, contributors has the ability to block a project that gives the impression of not going in the right direction.",
            ]}
          />
          <CollapsibleCard
            title="More liquid"
            text={[
              "Average project's delirery time is more than one year. Meaning that you put money on a project, and you have to wait a very long time before being able to get back your reward.",
              "Befundr, allow contributors to go in and out from a project thanks to a dedicated contributions marketplace. ",
            ]}
          />
          <CollapsibleCard
            title="More profitable"
            text={[
              "Befundr bringing more security for contributors. But why project founders should assume to be more controlled ?",
              "To raise more money ! Thanks to a part of the Marketplace fees that are gave back to project founder.",
              "If your project attract attention, and generate exhanges on marketplace, you will be the first to get back the benefit !",
            ]}
          />
        </div>
      </div>
      {/* second block black bg */}
      <div className="flex flex-col justify-start items-center gap-10 h-screen  px-4 md:px-0">
        <h2 className="textStyle-subtitle text-center">
          Work in progress,
          <strong className="!text-accent"> but working hard !!</strong>
        </h2>
        <div className="flex flex-col items-center gap-6">
          <h3 className="textStyle-headline w-full md:w-2/3 text-center">
            Befundr is under development during the solana Coloseum Radar
            hachathon.
          </h3>
          <h3 className="textStyle-headline w-full md:w-2/3 text-center ">
            To be sure to not miss any news, follow us
          </h3>
          <a
            href="https://x.com/befundr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt="x" src={X} width={30} height={30} />
          </a>
          <div className="relative w-2/3 md:w-1/3 animate-pulse">
            <Image alt="logo" src={logo_only} />
          </div>
        </div>
      </div>
    </div>
  );
}
