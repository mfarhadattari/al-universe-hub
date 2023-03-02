const loader1 = document.getElementById("loader1");
const loader2 = document.getElementById("loader2");

// Load first 6 data
const load6Data = () => {
  // loader1
  loader1.classList.remove("hidden");
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(url)
    .then((res) => res.json())
    .then((data) => display6Data(data.data.tools));
};

const display6Data = (toolsData) => {
  const toolsInfoCardContainer = document.getElementById(
    "tools-information-container"
  );
  for (const eachToolData of toolsData) {
    if (toolsData.indexOf(eachToolData) < 6) {
      console.log(eachToolData.features[0]);
      const toolCard = document.createElement("div");
      toolCard.classList.add(
        "card",
        "w-96",
        "bg-base-100",
        "shadow-xl",
        "p-5",
        "rounded-3xl"
      );
      toolCard.innerHTML = `
        <!-- Each tool card -->
            <!-- Tool Image -->
            <figure>
                <img src="${eachToolData.image}"
                    alt="${eachToolData.name}" style = "height: 200px"  />
            </figure>
            <div class="card-body">

                <!-- tool features -->
                <div>
                    <h1 class="font-semibold text-xl">Features</h1>
                    <ol class="list-decimal pl-5">
                        <li>${eachToolData.features[0]}</li>
                        <li>${eachToolData.features[1]}</li>
                        <li>${eachToolData.features[2]}</li>
                    </ol>
                </div>
                <hr>

                <!-- footer -->
                <div class="flex justify-between items-center">
                    <div>
                        <!-- tool title -->
                        <h2 class="card-title mb-2">
                            ${eachToolData.name}
                        </h2>
                        <!-- tool published date -->
                        <h4>
                            <i class="fa-solid fa-calendar-days"></i>
                            <span>${eachToolData.published_in}</span>
                        </h4>
                    </div>
                    <!-- tool details btn -->
                    <div class="card-actions justify-end">
                        <button class="btn bg-red-50 border-none text-red-400 text-2xl rounded-full">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
      toolsInfoCardContainer.appendChild(toolCard);
    }
  }
  //   loader1
  loader1.classList.add("hidden");
};

load6Data();


// Load all data when click in see more btn
const loadAllData = () => {
  // loader2
  loader2.classList.remove("hidden");
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllData(data.data.tools));
};
const displayAllData = (toolsData) => {
  const toolsInfoCardContainer = document.getElementById(
    "tools-information-container"
  );
  toolsInfoCardContainer.innerText = "";
  toolsData.forEach((eachToolData) => {
    console.log(eachToolData.features[0]);
    const toolCard = document.createElement("div");
    toolCard.classList.add(
      "card",
      "w-96",
      "bg-base-100",
      "shadow-xl",
      "p-5",
      "rounded-3xl"
    );
    toolCard.innerHTML = `
          <!-- Each tool card -->
              <!-- Tool Image -->
              <figure>
                  <img src="${eachToolData.image}"
                      alt="${eachToolData.name}" style = "height: 200px"  />
              </figure>
              <div class="card-body">
  
                  <!-- tool features -->
                  <div>
                      <h1 class="font-semibold text-xl">Features</h1>
                      <ol class="list-decimal pl-5">
                          <li>${eachToolData.features[0]}</li>
                          <li>${eachToolData.features[1]}</li>
                          <li>${eachToolData.features[2]}</li>
                      </ol>
                  </div>
                  <hr>
  
                  <!-- footer -->
                  <div class="flex justify-between items-center">
                      <div>
                          <!-- tool title -->
                          <h2 class="card-title mb-2">
                              ${eachToolData.name}
                          </h2>
                          <!-- tool published date -->
                          <h4>
                              <i class="fa-solid fa-calendar-days"></i>
                              <span>${eachToolData.published_in}</span>
                          </h4>
                      </div>
                      <!-- tool details btn -->
                      <div class="card-actions justify-end">
                          <button class="btn bg-red-50 border-none text-red-400 text-2xl rounded-full">
                              <i class="fa-solid fa-arrow-right"></i>
                          </button>
                      </div>
                  </div>
              </div>
          `;
    toolsInfoCardContainer.appendChild(toolCard);
  });
  document.getElementById("see-more-btn").classList.add("hidden");
  //   loader2
  loader2.classList.add("hidden");
};
