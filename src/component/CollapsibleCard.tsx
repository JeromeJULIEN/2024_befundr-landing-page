"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";

type Props = {
  title: string;
  text: string[];
};

const CollapsibleCard = (props: Props) => {
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <Collapsible className="w-full flex flex-col items-center">
      <CollapsibleTrigger asChild className="mb-4">
        <Button
          variant="ghost"
          onClick={() => setIsCollapse(!isCollapse)}
          className="textStyle-headline !text-main"
        >
          {props.title}
          <FaCaretRight
            className={`${
              isCollapse ? "" : "rotate-90"
            } transition-all ease-in-out`}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mb-4 textStyle-body !text-main text-center">
        {props.text.map((paragraph, index) => (
          <p key={index} className="mb-2">
            {paragraph}
          </p>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleCard;
