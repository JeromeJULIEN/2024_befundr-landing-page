import Image from "next/image";
import logo from "../../public/logo.png";
import CollapsibleCard from "@/component/CollapsibleCard";
import { FaChevronDown } from "react-icons/fa";
import MainButtonLabel from "@/component/MainButtonLabel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10 ">
      {/* fist block white bg */}
      <div className="flex flex-col justify-center items-center h-screen gap-10 px-4 md:px-0">
        <div className="relative w-full md:w-2/3">
          <Image alt="logo" src={logo} />
        </div>
        <h1 className="textStyle-title text-center">
          Transform Ideas into Reality with{" "}
          <strong className="text-accent">Secure Crowdfunding</strong>
        </h1>
        <h3 className="textStyle-headline w-full md:w-2/3 text-center">
          Join a community where trust and innovation drive success
          <br />
          Start your project with the confidence of blockchain security and
          community support
        </h3>
        <FaChevronDown size={30} className="text-accent animate-bounce" />
      </div>
      {/* second block black bg */}
      <div className="bg-black flex flex-col justify-center items-center w-full gap-10 py-10 px-4 md:px-0">
        <h2 className="textStyle-subtitle !text-main text-center">
          What makes beFundr{" "}
          <strong className="!text-accent">
            a Game Changer in Crowdfunding ?
          </strong>
        </h2>
        <div className="flex flex-col items-center justify-start gap-10">
          <CollapsibleCard
            title="Secure"
            text={[
              "Did you know that 18% of Kickstarter's revenue comes from projects that failed to deliver?",
              "At beFundr, contributor security is our top priority. Supporting early-stage projects is exciting, but no one should face a 1-in-5 chance of being scammed.",
              "With beFundr, contributors have the power to halt a project if it seems to be veering off course, ensuring a safer crowdfunding experience.",
            ]}
          />
          <CollapsibleCard
            title="Liquid"
            text={[
              "The average project delivery time exceeds one year. This means that after investing, you often wait a long time to receive your reward.",
              "With beFundr, contributors can freely enter or exit a project through a dedicated contributions marketplace, offering more flexibility and control over their investments even when the projects is fully funded.",
            ]}
          />
          <CollapsibleCard
            title="Profitable"
            text={[
              "beFundr brings more security for contributors. But why should project founders accept more oversight?",
              "Because increased security leads to more contributions! With greater trust, contributors are more likely to invest in your project.",
              "Additionally, a portion of marketplace fees is returned to project founders. If your project attracts attention and drives activity on the marketplace, you’ll be the first to benefit financially!",
            ]}
          />
        </div>
      </div>
      {/* second block black bg */}
      <div className="flex flex-col justify-start items-center gap-10 mb-20  px-4 md:px-0">
        <h2 className="textStyle-subtitle text-center">
          Work in Progress -
          <strong className="!text-accent"> We&apos;re Working Hard!</strong>
        </h2>
        <div className="flex flex-col items-center gap-6">
          <h3 className="textStyle-headline w-full md:w-2/3 text-center">
            beFundr is under development during the solana Colosseum Radar
            Hackathon
          </h3>
          <div className="flex justify-center items-center gap-1">
            <h3 className="textStyle-headline w-full  text-center ">
              To ensure you don&apos;t miss any updates
            </h3>
          </div>
          <a
            href="https://x.com/befundr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MainButtonLabel label="Follow us on X" />
          </a>
        </div>
      </div>
    </div>
  );
}
