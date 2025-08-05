const ToggleButton = ({ selectedPlayer = 0, activePage, setActivePage }) => {
  return (
    <div className="font-semibold mt-20 flex justify-between items-center">
      <button onClick={() => setActivePage("available")}
        className={`border text-[12px] py-1 px-2 md:py-2 md:px-3 rounded-lg mr-2 ${
          activePage === "available" ? "bg-[#E7FE29]" : ""
        }`}
      >
        Available
      </button>
      <button onClick={() => setActivePage("selected")}
        className={`border text-[12px] py-1 px-2 md:py-2 md:px-3 rounded-lg ${
          activePage === "selected" ? "bg-[#E7FE29]" : ""
        }`}
      >
        Selected ({selectedPlayer})
      </button>
    </div>
  );
};

export default ToggleButton;
