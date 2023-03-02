const loadData = () => {
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools));
};

const displayData = (toolsData) => {
  const toolsInfoCardContainer = document.getElementById(
    "tools-information-container"
  );
  toolsData.forEach((eachToolData) => {
    console.log(eachToolData);
    const toolCard = document.createElement("div");
    toolCard.classList.add("card", "w-96", "bg-base-100", "shadow-xl");
    toolCard.innerHTML = `
        <!-- Each tool card -->
            <!-- Tool Image -->
            <figure>
                <img src="${eachToolData.image}"
                    alt="chatgpt_assistente" />
            </figure>
            <div class="card-body">

                <!-- tool features -->
                <div>
                    <h1 class="font-semibold text-xl">Features</h1>
                    <ol class="list-decimal pl-5">
                        <li>Natural language processing</li>
                        <li>Contextual understanding</li>
                        <li>Text generation</li>
                    </ol>
                </div>
                <hr>

                <!-- footer -->
                <div class="flex justify-between items-center">
                    <div>
                        <!-- tool title -->
                        <h2 class="card-title">
                            ChartGPT
                        </h2>
                        <!-- tool published date -->
                        <h4>
                            <i class="fa-solid fa-calendar-days"></i>
                            <span>11/01/2022</span>
                        </h4>
                    </div>
                    <!-- tool details btn -->
                    <div class="card-actions justify-end">
                        <button class="text-red-400 text-2xl">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        toolsInfoCardContainer.appendChild(toolCard) ;
  });
};

loadData();
