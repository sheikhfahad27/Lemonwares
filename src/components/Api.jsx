import { useEffect, useState } from "react";

export const Abdullah = () => {
  const [companies, setCompanies] = useState([]);

  const getCompanies = () => {
    fetch('http://localhost:3000/get')
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <>
      {companies.map((item, index) => (
        <div key={index}>
          <h1 className="text-8xl font-serif">{item.name}</h1>
          <h1 className="text-8xl font-serif">{item.password}</h1>
<img src={item.name} alt="" />

        </div>
      ))}
      <h1>s</h1>
    </>
  );
};

