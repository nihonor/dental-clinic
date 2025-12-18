
interface Props {
  src: string;
  message: string;
  head: string;
}
const Emerg = ({ src, message, head }: Props) => {
  return (
    <>
      <div className="md:px-4 px-4  md:mt-0 mt-4 ">
        <div className="h-80 w-66 bg-white p-8 py-3 pt-10 ">
          <div className="flex justify-center ">
            <img src={src} alt="" className="h-18 w-18" />
          </div>
          <h1 className="flex justify-center text-xl py-4">{head}</h1>
          <div className="flex justify-center py-3">
            <div className="h-1 w-10 bg-btncolor "></div>
          </div>
          <div className="text-sm font-bold text-['']  overflow-wrap break-word  flex justify-center text-center text-backText">
            <p className="w-[29%] ">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Emerg;
