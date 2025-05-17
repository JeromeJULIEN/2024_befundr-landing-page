type Props = {
  label: string;
};

const MainButtonLabel = (props: Props) => {
  return (
    <div className=" bg-accent hover:bg-accent/50 rounded-full h-10 w-44 px-2 py-1 transition-all ease-in-out text-black flex justify-center items-center">
      {props.label}
    </div>
  );
};

export default MainButtonLabel;
