const loadData = () => {
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools));
};

const displayData = (toolsData) => {
    console.log(toolsData);
    toolsData.forEach(eachToolData => {
        console.log(eachToolData) ;
    })
}

loadData()