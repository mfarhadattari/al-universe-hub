/*-------------------------------------------------
    Default 6 Tools Data Card Section
----------------------------------------------------*/
// Load first 6 data
const load6Data = async() => {
  // loader1
  document.getElementById("loader1").classList.remove("hidden");

  // get data from api
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  const res = await fetch(url) ;
  const data = await res.json() ;
  display6Data(data.data.tools) ;
};

// Display 6 card of tools
const display6Data = (toolsData) => {

  // card container
  const toolsInfoCardContainer = document.getElementById(
    "tools-information-container"
  );

  // See More Button
  const seeMoreBtn = document.createElement("div");
  seeMoreBtn.classList.add("mt-10");
  seeMoreBtn.innerHTML = `
  <!-- more btn -->
                <button onclick="loadAllData()" id="see-more-btn"
                    class="btn bg-red-400 hover:bg-sky-500 capitalize border-none text-white w-36">See More</button>
  `;

  // create , set and append Card 
  for (const eachToolData of toolsData) {
    if (toolsData.indexOf(eachToolData) < 6) {

      // Date Formatting
      const date = new Date(eachToolData.published_in);
      const year = "" + date.getFullYear();
      const mouth =
        ("" + (date.getMonth() + 1)).length == 2
          ? "" + (date.getMonth() + 1)
          : "0" + (date.getMonth() + 1);
      const day =
        ("" + date.getDate()).length == 2
          ? "" + date.getDate()
          : "0" + date.getDate();

      // create card element
      const toolCard = document.createElement("div");
      toolCard.classList.add(
        "card",
        "w-96",
        "bg-base-100",
        "shadow-xl",
        "p-5",
        "rounded-3xl"
      );

      // Set Card Element
      toolCard.innerHTML = `
        <!-----------------------------------------
                   Each tool card 
                   --------------------------------->
                   <!-- Card body -->
                   
            <!-- Tool Image -->
            <figure>
                <img src="${eachToolData.image}"
                    alt="${eachToolData.name}" style = "height: 200px"  />
            </figure>

            <div class="card-body">
                <!-- tool features Section -->
                <div>
                    <h1 class="font-semibold text-xl">Features</h1>
                    <ol class="list-decimal pl-5">
                    ${
                      eachToolData.features[0]
                        ? `<li>${eachToolData.features[0]}</li>`
                        : ""
                    }
                    ${
                      eachToolData.features[1]
                        ? `<li>${eachToolData.features[1]}</li>`
                        : ""
                    }
                    ${
                      eachToolData.features[2]
                        ? `<li>${eachToolData.features[2]}</li>`
                        : ""
                    }
                    ${
                      eachToolData.features[3]
                        ? `<li>${eachToolData.features[3]}</li>`
                        : ""
                    }
                    ${
                      eachToolData.features[4]
                        ? `<li>${eachToolData.features[4]}</li>`
                        : ""
                    }
                    </ol>
                </div>
                <hr>

                <!-- Card footer -->
                <div class="flex justify-between items-center">
                    <div>
                        <!-- tool title -->
                        <h2 class="card-title mb-2">
                            ${eachToolData.name}
                        </h2>
                        <!-- tool published date -->
                        <h4 class = "flex items-center gap-2" >
                            <i class="fa-solid fa-calendar-days"></i>
                            <span class = "published-date"> ${mouth}/${day}/${year}</span>
                        </h4>
                    </div>

                    <!-- tool details btn -->
                    <div class="card-actions justify-end">
            <label for="my-modal-3" onclick= "loadDetails('${eachToolData.id}')" class="btn bg-red-50 border-none text-red-400 text-2xl rounded-full"><i class="fa-solid fa-arrow-right"></i></label>
                    </div>
                </div>
            </div>
        `;

        // append card to cardContainer
      toolsInfoCardContainer.appendChild(toolCard);
    }

    // append see more button to parent of card container
    toolsInfoCardContainer.parentNode.appendChild(seeMoreBtn);
  }
  //   loader1
  document.getElementById("loader1").classList.add("hidden");
};



/* -------------------------------------------------------------------------
                              See More Data Section
------------------------------------------------------------------------------*/

// Load all data when click in see more btn
const loadAllData = async() => {
  // loader2
  document.getElementById("loader2").classList.remove("hidden");

  // get data form API
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  const res = await fetch(url) ;
  const data = await res.json() ;
  displayAllData(data.data.tools) ;
};

// display all data
const displayAllData = (toolsData) => {

  // card container
  const toolsInfoCardContainer = document.getElementById(
    "tools-information-container"
  );
  toolsInfoCardContainer.innerText = "";

  // Create , set and append card
  toolsData.forEach((eachToolData) => {

    // Date Formatting
    const date = new Date(eachToolData.published_in);
    const year = "" + date.getFullYear();
    const mouth =
      ("" + (date.getMonth() + 1)).length == 2
        ? "" + (date.getMonth() + 1)
        : "0" + (date.getMonth() + 1);
    const day =
      ("" + date.getDate()).length == 2
        ? "" + date.getDate()
        : "0" + date.getDate();

        // Create Card
    const toolCard = document.createElement("div");
    toolCard.classList.add(
      "card",
      "w-96",
      "bg-base-100",
      "shadow-xl",
      "p-5",
      "rounded-3xl"
    );

    // set card Element
    toolCard.innerHTML = `
          <!----------------------------------------------
                     Each tool card
                     ----------------------------------------------->
              <!--Card body -->

              <!-- Tool Image -->
              <figure>
                  <img src="${eachToolData.image}"
                      alt="${eachToolData.name}" style = "height: 200px"  />
              </figure>


              <div class="card-body">
                  <!-- tool features section-->
                  <div>
                      <h1 class="font-semibold text-xl">Features</h1>
                      <ol class="list-decimal pl-5">
                      ${
                        eachToolData.features[0]
                          ? `<li>${eachToolData.features[0]}</li>`
                          : ""
                      }
                      ${
                        eachToolData.features[1]
                          ? `<li>${eachToolData.features[1]}</li>`
                          : ""
                      }
                      ${
                        eachToolData.features[2]
                          ? `<li>${eachToolData.features[2]}</li>`
                          : ""
                      }
                      ${
                        eachToolData.features[3]
                          ? `<li>${eachToolData.features[3]}</li>`
                          : ""
                      }
                      ${
                        eachToolData.features[4]
                          ? `<li>${eachToolData.features[4]}</li>`
                          : ""
                      }
                      </ol>
                  </div>
                  <hr>
  
                  <!--card footer -->
                  <div class="flex justify-between items-center">
                      <div>
                          <!-- tool title -->
                          <h2 class="card-title mb-2">
                              ${eachToolData.name}
                          </h2>
                          <!-- tool published date -->
                          <h4 class = "flex items-center gap-2" >
                              <i class="fa-solid fa-calendar-days"></i>
                              <span class = "published-date"> ${mouth}/${day}/${year}</span>
                          </h4>
                      </div>
                      <div class="card-actions justify-end">
                      <!-- tool details btn -->
                      <label for="my-modal-3" onclick= "loadDetails('${
                        eachToolData.id
                      }')" class="btn bg-red-50 border-none text-red-400 text-2xl rounded-full"><i class="fa-solid fa-arrow-right"></i></label>
                      </div>
                  </div>
              </div>
          `;

    // append card to card container
    toolsInfoCardContainer.appendChild(toolCard);
  });

  // hide see more btn
  document.getElementById("see-more-btn").classList.add("hidden");

  //   loader2
  document.getElementById("loader2").classList.add("hidden");
};



/* ------------------------------------------------------------------------------------
                              Details Modal Section
--------------------------------------------------------------------------------------*/

// details loader
const loadDetails = async(id) => {
  // modal loader
  document.getElementById("modal-loader").classList.remove("hidden");
// get data from API
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url) ;
  const data = await res.json() ;
  displayDetails(data.data) ;
};

// details display
const displayDetails = (toolData) => {
  const cardBody = document.getElementById("card-body");
  cardBody.innerHTML = "";

  // set details element
  cardBody.innerHTML = `
  <div class="flex  flex-col lg:flex-row justify-between gap-5 p-1">
  <div class="card lg:w-1/2 bg-red-50 shadow-xl p-2 border-2 border-red-300">

   <!--Tool Description-->
      <h1 class="text-2xl font-medium">
          ${toolData.description}
      </h1>

      <div class="card-body p-1">
      <!--Tool Pricing Section -->
          <div class="flex flex-col md:flex-row gap-4 text-lg text-center my-3">
              <div class="bg-white p-5 text-green-500 rounded-xl">
               ${
                 Array.isArray(toolData.pricing)
                   ? `${toolData.pricing[0].price} ${toolData.pricing[0].plan}`
                   : "Free of Cost /Basic"
               }
              </div>
              <div class="bg-white p-5 text-orange-500 rounded-xl">
              ${
                Array.isArray(toolData.pricing)
                  ? `${toolData.pricing[1].price} ${toolData.pricing[1].plan}`
                  : "Free of Cost  /Pro"
              }
              </div>
              <div class="bg-white p-5 text-pink-500 rounded-xl">
              ${
                Array.isArray(toolData.pricing)
                  ? `${toolData.pricing[2].price} ${toolData.pricing[2].plan}`
                  : "Free of Cost /Enterprise"
              }
              </div>
          </div>
          <div class="flex gap-5 items-center justify-between">
          <!--Details Feature section-->
              <div class="">
                  <h2 class="text-xl font-semibold">Features</h2>
                  <ul id="details-features-list" class="list-disc pl-5">
                      
                  </ul>
              </div>

              <!--Details Integrations section -->
              <div>
                  <h2 class="text-xl font-semibold">Integrations</h2>
                  <ul id="integrations-list" class="list-disc pl-5">
                      
                  </ul>
              </div>
          </div>
      </div>
  </div>

  <div class="card lg:w-1/2 bg-base-100 shadow-xl">
      <div class="w-full">

      <!--Tool accuracy-->
          <span id="accuracy" class=" badge badge-secondary absolute right-5 md:right-52 lg:right-28 top-7 z-10">
              ${
                typeof toolData.accuracy.score == "number"
                  ? `${toolData.accuracy.score * 100}% accuracy`
                  : "Accuracy Not Found"
              }
          </span>

          <!---tool picture--->
          <figure class="relative right-2 lg:right-4 top-5 z-0">
              <img src="${toolData.image_link[0]}" alt="${toolData.tool_name}" class="rounded-xl w-80  h-44" />
          </figure>
    </div>

      <!-- Question and Answer section -->
      <div class="card-body items-center text-center">
          <h2  class="card-title">${
            Array.isArray(toolData.input_output_examples)
              ? toolData.input_output_examples[0].input
              : "Can you give any example?"
          }</h2>
          <p>${
            Array.isArray(toolData.input_output_examples)
              ? toolData.input_output_examples[0].output
              : "No! Not Yet! Take a break!!!"
          }</p>
      </div>
  </div>
</div>
  `;

  // integrationsList section
  const integrationsList = document.getElementById("integrations-list");
  const integrations = toolData.integrations;
  if (Array.isArray(integrations)) {
    integrations.forEach((integrationsItem) => {
      const integrationsLi = document.createElement("li");
      integrationsLi.innerText = `${integrationsItem}`;
      integrationsList.appendChild(integrationsLi);
    });
  } else {
    integrationsList.innerText = "No Data Found";
  }

  // Details section features section
  const featuresList = document.getElementById("details-features-list");
  const features = toolData.features;
  for (const key in features) {
    const featuresLi = document.createElement("li");
    featuresLi.innerText = `${features[key].feature_name}`;
    featuresList.appendChild(featuresLi);
  }

  // accuracyData
  const accuracyDataCon = document.getElementById("accuracy");
  if (accuracyDataCon.innerText === "Accuracy Not Found") {
    accuracyDataCon.classList.add("hidden");
  } else {
    accuracyDataCon.classList.remove("hidden");
  }

  // modal-loader hide
  document.getElementById("modal-loader").classList.add("hidden");
};

/* ------------------------------------------------------------------------------------
                              Sort by date section
--------------------------------------------------------------------------------------*/

// convert date in number function
const convertDate = (date) => {
  let dateArray = date.split("/");
  dateArray = dateArray.reverse();
  let dateYMD = "";
  dateArray.forEach((dateElement) => {
    dateYMD = dateYMD + dateElement;
  });
  return dateYMD;
};


// sorting by date function
const sortByDate = (direction) => {
  // card container
  const cardContainer = document.getElementById("tools-information-container");

  // cards list
  const allDateList = document.getElementsByClassName("published-date");
  const dateList = [].slice.call(allDateList);

  if (direction === "descending") {
    dateList.sort((a, b) => {
      const def = convertDate(b.innerText) - convertDate(a.innerText);
      return def;
    });
  } else {
    dateList.sort((a, b) => {
      const def = convertDate(a.innerText) - convertDate(b.innerText);
      return def;
    });
  }
  dateList.forEach((dateContainer) => {
    const card = dateContainer.parentNode.parentNode.parentNode.parentNode.parentNode;
    cardContainer.appendChild(card);
  });
};


// sort by date btn
document
  .getElementById("sort-by-date-btn")
  .addEventListener("click", function () {
    const sortBtn = document.getElementById("sort-by-date-btn");
    const sortBtnText = sortBtn.innerText;
    if (sortBtnText == "Sort By Date (Descending)") {
      sortBtn.innerText = "Sort By Date (Ascending)";
      sortByDate("descending");
    } else {
      sortBtn.innerText = "Sort By Date (Descending)";
      sortByDate("ascending");
    }
  });
