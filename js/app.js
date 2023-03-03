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
                      
                        <!-- The details btn -->
            <label for="my-modal-3" onclick= "loadDetails('${eachToolData.id}')" class="btn bg-red-50 border-none text-red-400 text-2xl rounded-full"><i class="fa-solid fa-arrow-right"></i></label>
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
                      <div class="card-actions justify-end">
                      <!-- tool details btn -->
                      <label for="my-modal-3" onclick= "loadDetails('${eachToolData.id}')" class="btn bg-red-50 border-none text-red-400 text-2xl rounded-full"><i class="fa-solid fa-arrow-right"></i></label>
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

const loadDetails = (id) => {
  document.getElementById("modal-loader").classList.remove("hidden");
  url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.data));
};

// details btn
const displayDetails = (toolData) => {
  console.log(Array.isArray(toolData.pricing) ? toolData.pricing[0] : 'Not Pricing Data Found');
  const cardBody = document.getElementById("card-body");
  cardBody.innerHTML = "";
  cardBody.innerHTML = `
  <div class="flex justify-between gap-5">
  <div class="card w-1/2 bg-red-50 shadow-xl p-4 border-2 border-red-300">
      <h1 class="text-2xl font-medium">
          ${toolData.description}
      </h1>
      <div class="card-body p-1">
          <div class="flex gap-4 text-lg text-center my-3">
              <div class="bg-white p-5 text-green-500 rounded-xl">
               ${Array.isArray(toolData.pricing) ? `${toolData.pricing[0].price} ${toolData.pricing[0].plan}` : 'Not Pricing Data Found'}
              </div>
              <div class="bg-white p-5 text-orange-500 rounded-xl">
              ${Array.isArray(toolData.pricing) ? `${toolData.pricing[1].price} ${toolData.pricing[1].plan}` : 'Not Pricing Data Found'}
              </div>
              <div class="bg-white p-5 text-pink-500 rounded-xl">
              ${Array.isArray(toolData.pricing) ? `${toolData.pricing[2].price} ${toolData.pricing[2].plan}` : 'Not Pricing Data Found'}
              </div>
          </div>
          <div class="flex gap-5 items-center justify-between">
              <div class="">
                  <h2 class="text-xl font-semibold">Features</h2>
                  <ul class="list-disc pl-5">
                      <li>Customizable responses</li>
                      <li>Multilingual support</li>
                      <li>Seamless integration</li>
                  </ul>
              </div>
              <div>
                  <h2 class="text-xl font-semibold">Integrations</h2>
                  <ul class="list-disc pl-5">
                      <li>FB Messenger</li>
                      <li>Slack</li>
                      <li>Telegram</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  <div class="card w-1/2 bg-base-100 shadow-xl">

      <div class="w-full">
          <span class=" badge badge-secondary absolute right-24 top-1">
              ${(typeof(toolData.accuracy.score) == 'number') ? `${toolData.accuracy.score * 100}% accuracy` : 'Accuracy Not Found'}
          </span>
          <figure class="">
              <img src="${toolData.image_link[0]}" alt="${toolData.tool_name}" class="rounded-xl w-72  h-40" />
          </figure>
      </div>

      <div class="card-body items-center text-center">
          <h2 class="card-title">${Array.isArray(toolData.input_output_examples) ? toolData.input_output_examples[0].input : 'No Data Found' }</h2>
          <p>${Array.isArray(toolData.input_output_examples) ? toolData.input_output_examples[0].output : 'No Data Found' }</p>
      </div>
  </div>
</div>
  `;
  document.getElementById("modal-loader").classList.add("hidden");
};
