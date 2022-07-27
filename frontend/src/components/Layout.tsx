import Cloud from "./Cloud";

type LayoutProps = {
    children: JSX.Element
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex relative h-screen w-full bg-gradient-to-b from-sky-600 to-sky-800 justify-center">
      <div className="relative flex flex-col-reverse justify-between items-end h-full w-1/6">
        <div className="absolute w-1/2 top-0 left-0 aspect-square">
          <Cloud />
        </div>
        <div className="absolute w-1/2 bottom-3/4 left-1/3 aspect-square">
          <Cloud />
        </div>
        <div className="h-1/3 w-1/2 bg-sky-400" />
      </div>
      <div className="flex w-4/6 px-20 bg-sky-400">{props.children}</div>
      <div className="relative flex flex-col-reverse justify-between items-start h-full w-1/6">
        <div className="absolute w-1/2 top-1/3 right-1/4 aspect-square">
          <Cloud />
        </div>
        <div className="flex flex-col justify-end items-end h-1/3 w-1/2 bg-sky-400">
          <text className="font-sans mr-4">Made by: Sarah Tell</text>
        </div>
      </div>
    </div>
  );
}
