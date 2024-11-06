import React, { useState } from "react";

const NameSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample array of names
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank","madhur","mad","manish"];

  // Filter the names based on the search term
  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-black">
      <input
        type="text"
        placeholder="Search names..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameSearch;
