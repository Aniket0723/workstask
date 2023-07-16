import { useState } from "react";
import panelData from "../../assets/panelData";
import "./Main.css";

const Main = () => {
  const [panelStates, setPanelStates] = useState(Array(panelData.length).fill(false));
  const [selectedLetter, setSelectedLetter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleParagraph = (index) => {
    const updatedPanelStates = [...panelStates];
    updatedPanelStates[index] = !updatedPanelStates[index];
    setPanelStates(updatedPanelStates);
  };

  const handleAlphabeticalChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLetter(selectedValue);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };
  const filteredPanelData = panelData.filter((panel) => {
    const title = panel.title.toLowerCase();
    const content = panel.content.toLowerCase();
    const query = searchQuery.toLowerCase();
    return (
      (selectedLetter ? title.startsWith(selectedLetter.toLowerCase()) : true) &&
      (searchQuery ? (title.includes(query) || content.includes(query)) : true)
    );
  });

  return (
    <div className="wrapper">
      <div className="filterMethod">
        <label>
          ALPHABETICALLY
          <br />
          <select name="letters" value={selectedLetter} onChange={handleAlphabeticalChange}>
            <option value="">A-Z</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="I">I</option>
            <option value="M">M</option>
            <option value="O">O</option>
            <option value="P">P</option>
            <option value="R">R</option>
            <option value="T">T</option>
          </select>
        </label>
        <br />
        <label>
          SEARCH
          <br />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by title or content..."
          />
        </label>
      </div>
      <hr />
      <div className="accordion-main">
        {filteredPanelData.map((panel, index) => (
          <div className={`panel ${panelStates[index] ? "expanded" : ""}`} key={index}>
            <div className="title" onClick={() => toggleParagraph(index)}>
              {panel.title}
              <div>{panelStates[index] ? "-" : "+"}</div>
            </div>
            <div className="subtitle">{panel.subtitle}</div>
            <div className="content-wrapper">{panelStates[index] && <p>{panel.content}</p>}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;