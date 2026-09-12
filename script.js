/* =================================================
   HALWA & MATHICURRY
   FOOD ANALYZER
================================================= */


/* =================================================
   FOOD DATABASE
================================================= */

const foodDatabase = {

    "halwa": {

        combination: "Mathi Curry",

        dialogue:
            "അയ്യോ മോളേ, ഹൽവയും മത്തിക്കറിയും കൂടെയോ?! ഇതൊക്കെ ആരുടെ ബുദ്ധിയാ?"

    },


    "mathi": {

        combination: "Halwa",

        dialogue:
            "മത്തിക്കറിയും ഹൽവയും! മോളേ, നീ ഇതെന്താ പുതിയ പരീക്ഷണം?"

    },


    "mathi curry": {

        combination: "Halwa",

        dialogue:
            "മത്തിക്കറിയുടെ കൂടെ ഹൽവയോ? എന്റെ അടുക്കളയ്ക്ക് ഇത് താങ്ങാൻ പറ്റില്ല!"

    },


    "parotta": {

        combination: "Payasam",

        dialogue:
            "പറോട്ടയും പായസവും ഒന്നിച്ചോ? ഇത് ഭക്ഷണമാണോ അതോ പുതിയ കണ്ടുപിടുത്തമാണോ?"

    },


    "payasam": {

        combination: "Pickle",

        dialogue:
            "പായസത്തിൽ അച്ചാറോ? അയ്യോ, ഇത്രയും സാഹസം വേണ്ടായിരുന്നു!"

    },


    "dosa": {

        combination: "Chocolate",

        dialogue:
            "ദോശയ്ക്ക് ചമ്മന്തി ഇല്ലേ? ചോക്ലേറ്റ് ആണോ ഇനി കൂട്ടാൻ പോകുന്നത്?"

    },


    "idli": {

        combination: "Ice Cream",

        dialogue:
            "ഇഡ്ഡലിയും ഐസ്ക്രീമും! ഇത് കഴിച്ചാൽ തണുത്ത ഇഡ്ഡലി കിട്ടുമോ?"

    },


    "puttu": {

        combination: "Ice Cream",

        dialogue:
            "പുട്ടും ഐസ്ക്രീമും! മോളേ, നീ എന്തൊക്കെയാ കണ്ടുപിടിക്കുന്നത്?"

    },


    "appam": {

        combination: "Mango Pickle",

        dialogue:
            "അപ്പത്തിനൊപ്പം മാങ്ങാ അച്ചാറോ? അമ്മയ്ക്ക് ഒന്നും പറയാനില്ല!"

    },


    "biriyani": {

        combination: "Banana",

        dialogue:
            "ബിരിയാണിയിൽ പഴമോ? ഇത് കണ്ടിട്ട് ബിരിയാണി തന്നെ കരയുമല്ലോ!"

    },


    "fried rice": {

        combination: "Payasam",

        dialogue:
            "ഫ്രൈഡ് റൈസും പായസവും! ഒരേ പ്ലേറ്റിൽ ഇത്രയും drama വേണ്ട!"

    },


    "rice": {

        combination: "Chocolate Sauce",

        dialogue:
            "ചോറിന് ചോക്ലേറ്റ് സോസ് ഒഴിക്കണോ? അരി പോലും ഞെട്ടിപ്പോയി!"

    },


    "sambar": {

        combination: "Ice Cream",

        dialogue:
            "സാമ്പാറും ഐസ്ക്രീമും? ചൂടും തണുപ്പും തമ്മിൽ വഴക്കാകും!"

    },


    "rasam": {

        combination: "Jalebi",

        dialogue:
            "രസവും ജിലേബിയും! നാവിന് ഇന്ന് എന്ത് പാപമാണ് ചെയ്തത്?"

    },


    "vada": {

        combination: "Jam",

        dialogue:
            "വടയ്ക്ക് ജാം പുരട്ടണോ? അമ്മയുടെ അടുക്കളയിൽ ഇതൊന്നും നടക്കില്ല!"

    },


    "banana": {

        combination: "Sambar",

        dialogue:
            "പഴവും സാമ്പാറും? പഴത്തിന് പോലും ഇപ്പോൾ പേടിയാണ്!"

    },


    "cake": {

        combination: "Fish Curry",

        dialogue:
            "കേക്കും മീൻ കറിയും! പിറന്നാൾ ആഘോഷമാണോ അതോ ഓണസദ്യയാണോ?"

    },


    "ice cream": {

        combination: "Fish Curry",

        dialogue:
            "ഐസ്ക്രീമിൽ മീൻ കറിയോ? അയ്യോ, ഫ്രിഡ്ജ് തന്നെ അടച്ചിടാം!"

    },


    "pizza": {

        combination: "Coconut Chutney",

        dialogue:
            "പിസ്സയും തേങ്ങാ ചമ്മന്തിയും! ഇറ്റലിയും കേരളവും ഇന്ന് ഒന്നായി!"

    },


    "burger": {

        combination: "Payasam",

        dialogue:
            "ബർഗറിന്റെ കൂടെ പായസം കുടിക്കണോ? ഇതെന്താ പുതിയ combo?"

    },


    "noodles": {

        combination: "Banana Fry",

        dialogue:
            "നൂഡിൽസും പഴംപൊരിയും! ഇത് കേട്ടിട്ട് ചൈന പോലും confused ആകും!"

    },


    "chicken": {

        combination: "Payasam",

        dialogue:
            "ചിക്കനും പായസവും! ആദ്യം ചിക്കൻ കഴിക്ക്, പിന്നെ പായസം. ദയവായി!"

    },


    "fish": {

        combination: "Chocolate",

        dialogue:
            "മീനിനൊപ്പം ചോക്ലേറ്റോ? മീൻ തന്നെ വെള്ളത്തിലേക്ക് തിരിച്ചു പോകും!"

    },


    "mango": {

        combination: "Sambar",

        dialogue:
            "മാങ്ങയും സാമ്പാറും! മാങ്ങയ്ക്ക് ഇത്രയും മോശം fate എന്തിനാ?"

    },


    "biscuit": {

        combination: "Sambar",

        dialogue:
            "ബിസ്കറ്റ് സാമ്പാറിൽ മുക്കണോ? ചായ പോലും ഇത് അംഗീകരിക്കില്ല!"

    },


    "tea": {

        combination: "Fish Fry",

        dialogue:
            "ചായയും മീൻ ഫ്രൈയും! ചായക്കടയിൽ ഇന്ന് പുതിയ ചരിത്രം!"

    },


    "coffee": {

        combination: "Pickle",

        dialogue:
            "കാപ്പിയും അച്ചാറും? കാപ്പിയുടെ കയ്പ്പ് പോലും ഇത്ര കയ്പ്പല്ല!"

    }

};


/* =================================================
   RANDOM COMBINATIONS
================================================= */

const randomCombinations = [

    {
        name: "Mathi Curry",

        dialogue:
            "ഇത് എന്ത് combination ആണെന്ന് അമ്മയ്ക്ക് പോലും മനസ്സിലായില്ല!"
    },

    {
        name: "Payasam",

        dialogue:
            "ഇതൊക്കെ കഴിക്കാൻ ധൈര്യം വേണം മോളേ!"
    },

    {
        name: "Mango Pickle",

        dialogue:
            "ഇത് കഴിച്ചാൽ നാവ് നിന്നോട് പിണങ്ങും!"
    },

    {
        name: "Ice Cream",

        dialogue:
            "ചൂടുള്ള ഭക്ഷണത്തിനൊപ്പം ഐസ്ക്രീമോ? അമ്മയ്ക്ക് തലകറങ്ങുന്നു!"
    },

    {
        name: "Banana Fry",

        dialogue:
            "എന്തായാലും പഴംപൊരി ആണെങ്കിൽ അമ്മയ്ക്ക് എതിർപ്പില്ല!"
    },

    {
        name: "Chocolate",

        dialogue:
            "ചോക്ലേറ്റ് എല്ലാത്തിനും കൂട്ടാൻ പറ്റില്ല മോളേ!"
    },

    {
        name: "Coconut Chutney",

        dialogue:
            "തേങ്ങാ ചമ്മന്തി എല്ലാത്തിനും കൂട്ടണമെന്നില്ല!"
    },

    {
        name: "Fish Fry",

        dialogue:
            "മീൻ ഫ്രൈ ഉണ്ടെങ്കിൽ അമ്മയ്ക്ക് കുറച്ച് ചോറ് കൂടി വേണം!"
    },

    {
        name: "Jalebi",

        dialogue:
            "ഇത് കണ്ടിട്ട് ജിലേബി തന്നെ ചുറ്റിക്കറങ്ങുന്നു!"
    }

];


/* =================================================
   HTML ELEMENTS
================================================= */

const foodInput =
    document.getElementById("foodInput");

const resultSection =
    document.getElementById("resultSection");

const foodName =
    document.getElementById("foodName");

const weirdFoodName =
    document.getElementById("weirdFoodName");

const ammaDialogue =
    document.getElementById("ammaDialogue");

const errorMessage =
    document.getElementById("errorMessage");

const weirdButton =
    document.getElementById("weirdButton");


/* =================================================
   ANALYZE FOOD
================================================= */

function analyzeFood() {


    const input =
        foodInput.value.trim();


    /* Empty input */

    if (input === "") {

        errorMessage.textContent =
            "👩‍🍳 Amma says: ആദ്യം ഒരു food name കൊടുക്കൂ മോളേ!";

        resultSection.classList.remove("show");

        foodInput.focus();

        return;

    }


    errorMessage.textContent = "";


    /* Convert to lowercase */

    const searchFood =
        input.toLowerCase();


    let result;


    /* =================================================
       EXACT MATCH
    ================================================= */

    if (foodDatabase[searchFood]) {

        result =
            foodDatabase[searchFood];

    }


    /* =================================================
       PARTIAL MATCH
    ================================================= */

    else {

        const matchingFood =
            Object.keys(foodDatabase).find(
                key =>
                    searchFood.includes(key) ||
                    key.includes(searchFood)
            );


        if (matchingFood) {

            result =
                foodDatabase[matchingFood];

        }

        else {

            /* RANDOM RESULT */

            const randomIndex =
                Math.floor(
                    Math.random() *
                    randomCombinations.length
                );


            result =
                randomCombinations[randomIndex];

        }

    }


    /* =================================================
       DISPLAY USER FOOD
    ================================================= */

    foodName.textContent =
        capitalizeWords(input);


    /* =================================================
       DISPLAY WEIRD COMBINATION
    ================================================= */

    weirdFoodName.textContent =
        result.combination ||
        result.name;


    /* =================================================
       AMMA DIALOGUE
    ================================================= */

    ammaDialogue.textContent =
        result.dialogue;


    /* =================================================
       SHOW RESULT
    ================================================= */

    resultSection.classList.remove("show");


    setTimeout(() => {

        resultSection.classList.add("show");


        resultSection.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });


    }, 100);


    /* =================================================
       BUTTON CHANGE
    ================================================= */

    weirdButton.innerHTML =
        "🤯 TRY ANOTHER!";


}


/* =================================================
   CAPITALIZE
================================================= */

function capitalizeWords(text) {

    return text
        .split(" ")
        .map(word => {

            if (word.length === 0) {

                return word;

            }

            return (
                word.charAt(0).toUpperCase() +
                word.slice(1).toLowerCase()
            );

        })
        .join(" ");

}


/* =================================================
   ENTER KEY
================================================= */

foodInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            analyzeFood();

        }

    }
);


/* =================================================
   REMOVE ERROR WHEN TYPING
================================================= */

foodInput.addEventListener(
    "input",
    function() {

        errorMessage.textContent = "";

    }
);


/* =================================================
   RANDOM PLACEHOLDER
================================================= */

window.addEventListener(
    "load",
    function() {


        const examples = [

            "Halwa",
            "Parotta",
            "Puttu",
            "Biriyani",
            "Dosa",
            "Appam",
            "Pizza",
            "Mathi Curry"

        ];


        const randomExample =
            examples[
                Math.floor(
                    Math.random() *
                    examples.length
                )
            ];


        foodInput.placeholder =
            "Try: " + randomExample;

    }
);