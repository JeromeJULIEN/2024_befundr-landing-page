import Image from "next/image";
import logo from "../../public/logo.png";
import communities from "../../public/communities.png";
import funds from "../../public/funds.png";
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
        <h1 className="textStyle-title text-center -mt-10">
          Trust and Fund <strong className="text-accent">Your Community</strong>
        </h1>
        {/* <a
          href="https://app.befundr.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MainButtonLabel label="Launch App" />
        </a> */}
        <h3 className="textStyle-headline w-full md:w-2/3 text-center">
          The blockchain/Web3 has been compromised by untrustworthy individuals…
          <br />
          …we need to restore trust in the system
        </h3>
        <h3 className="textStyle-headline w-full md:w-2/3 text-center !font-bold">
          With beFundr, back people you trust, keep control of your funds and
          get project rewards
        </h3>
        <FaChevronDown size={30} className="text-accent animate-bounce" />
      </div>
      {/* second block */}
      <div className=" flex flex-col justify-center items-center w-full gap-10 py-10 pb-20 px-4 md:px-0">
        <h2 className="textStyle-subtitle text-textColor-main text-center">
          Back <strong className="!text-accent font-bold">trusted </strong>
          people
        </h2>
        <Image
          src={communities}
          alt="logo"
          width={400}
          height={400}
          className=""
        />
        <p className="textStyle-headline w-full md:w-2/3 text-center">
          beFUNDR is built by and for Solana&apos;s{" "}
          <strong className="!text-accent">OG communities</strong>
        </p>
        <p className="textStyle-headline w-full md:w-2/3 text-center">
          On beFUNDR, project founder must be part of one of the OG
          Solana&apos;s communities. <br />
          <br />
          This way, you can be sure that the project you are supporting comes
          from a real builder, commited to Solana ecosystem.
        </p>
        <p className="textStyle-headline w-full md:w-2/3 text-center">
          In addition, it values communities&apos; assets (token and/or NFT) and
          provide realtime data on the building activity of their members!
        </p>
      </div>
      {/* second block black bg */}
      <div className="flex flex-col justify-start items-center gap-10 mb-20  px-4 md:px-0">
        <h2 className="textStyle-subtitle text-center">
          <strong className="!text-accent !font-bold">Control</strong> the funds
        </h2>
        <div className="relative w-full md:w-2/3 h-[200px] md:h-[300px] flex justify-center items-center">
          <Image
            src={funds}
            alt="logo"
            fill
            className="object-contain -mt-10"
          />
        </div>
        <div className="flex flex-col items-center gap-6">
          <h3 className="textStyle-headline w-full md:w-2/3 text-center">
            Trust may not be enough, so we decentralized it with a
            milestone-based fund release process
          </h3>
          <p className="textStyle-headline w-full md:w-2/3 text-center">
            From the web3 community, we&apos;re creating project community,
            where all contributors will vote on whether to approve or deny the
            fund release requested by the project founder
          </p>
          <p className="textStyle-headline w-full md:w-2/3 text-center">
            As a serious builder, it&apos;s the best way to foster a strong
            community !
          </p>
        </div>
      </div>
      {/* second block black bg */}
      <div className="flex flex-col justify-start items-center gap-10 mb-20  px-4 md:px-0">
        <h2 className="textStyle-subtitle text-center">
          Launch your project on beFUNDR{" "}
          <strong className="!text-accent !font-bold">by 2025</strong>
        </h2>
        <div className="flex flex-col items-center gap-6">
          <h3 className="textStyle-headline w-full md:w-2/3 text-center">
            There&apos;s a lot to do, but we&apos;re working hard !
          </h3>
          <p className="textStyle-headline w-full md:w-2/3 text-center">
            Proudly supported by{" "}
            <strong className="!text-accent">Superteam France</strong> !
          </p>
          <p className="textStyle-headline w-full  text-center ">
            If you don&apos;t want to miss any updates or contact us, as a
            founder or a community
          </p>

          <p className="scale-150">👇</p>
          <a
            href="https://x.com/befundr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MainButtonLabel label="Follow us on X" />
          </a>
          <a
            href="https://t.me/+VdmvjEpKrjlkOTFk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MainButtonLabel label="Join us on telegram" />
          </a>
        </div>
      </div>
    </div>
  );
}
