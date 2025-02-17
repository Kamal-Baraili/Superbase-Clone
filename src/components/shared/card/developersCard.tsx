interface DeveloperCard {
  setDeveloperHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeveloperCard: React.FC<DeveloperCard> = ({ setDeveloperHover }) => {
  return (
    <>
      <div
        onMouseEnter={() => setDeveloperHover(true)}
        onMouseLeave={() => setDeveloperHover(false)}
        className="pt-8"
      >
        <div className="w-[700px] h-[300px] bg-[#121212] p-2 border border-zinc-700 rounded-2xl ease-in-out duration-1000">
          fasdfasd
        </div>
      </div>
    </>
  );
};

export default DeveloperCard;
