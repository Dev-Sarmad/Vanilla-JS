const input = document.querySelector("input");
const generatedImage = document.querySelector(".generated-image");
const submit = document.querySelector(".submit");
// create a token from the hugging face api
async function query() {
  showSpinner();
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: input.value }),
      }
    );
    const result = await response.blob();
    hideSpinner();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

const getImage = async () => {
  query().then((response) => {
    const objectUrl = URL.createObjectURL(response);
    // image.src = objectUrl
    // Create a new image element
    const newImageDiv = document.createElement("div");
    newImageDiv.className =
      "image relative h-full md:w-[700px] w-full overflow-hidden rounded-lg bg-neutral-800 shadow-inner";

    const newImage = document.createElement("img");
    newImage.src = !objectUrl
      ? "https://fal.media/files/rabbit/xqxAv3Zs0YOAXg2lzNJ54.jpeg"
      : objectUrl;
    newImage.alt = "";
    newImage.className = "h-[384px] w-full transition-all duration-75 xl:h-[512px]";

    // Append the image to the new image div
    newImageDiv.appendChild(newImage);

    // Remove any existing image divs
    const existingImageDiv = generatedImage.querySelector(".image");
    if (existingImageDiv) {
      generatedImage.removeChild(existingImageDiv);
    }

    // Append the new image div
    generatedImage.appendChild(newImageDiv);
  });
};

const showSpinner = () => {
  const spinner = document.createElement("span");
  spinner.classList.add("loader");
  spinner.textContent = "Loading...";

  if (!generatedImage.querySelector(".loader")) {
    generatedImage.appendChild(spinner);
  }
};

const hideSpinner = () => {
  const spinner = generatedImage.querySelector(".loader");
  if (spinner) {
    generatedImage.removeChild(spinner);
  }
};

submit.addEventListener("click", getImage);
