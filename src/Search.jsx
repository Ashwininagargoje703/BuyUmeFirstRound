import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Search = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
const [searchResult, SetsearchResult] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(response?.data);
    SetsearchResult(response?.data);
  };
  

  const handleSubmit = () => {
    const filterData = data?.filter((post) => post.title?.includes(search) 
    );
    SetsearchResult(filterData);
    
  };



  return (
    <>
  <Box sx={{
    textAlign:"center",
    height:"100vh",
    alignItems:"center", 
    justifyContent:"center",
    overflowY:"Scroll"
  }}>
<Typography fontSize={22} fontWeight={600}>Search post</Typography>
      <input
        placeholder="Search..."
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        style={{
            width:'400px',
            height:'45px',
        }}
      />
      <button style={{

    backgroundColor:"black",
    color:'white',
    height:'45px',

      }}
        onClick={handleSubmit}>Search</button>

      {searchResult &&
        searchResult.map((post) => (
       <Card 
       sx={{width:700,  mt:2, textAlign:"left", p:2, ml:50}}
       > 
        
        <h3>{`Title: ${post.title}`}</h3>
       <p>{`Body: ${post.body}`}</p></Card>
        ))}
  </Box>
    </>
  );
};
export default Search;