// Toggle the language list
let languageBtn = document.querySelector(".language");
languageBtn.addEventListener("click", function () {
  let languageList = document.querySelector(".select-language");
  languageList.classList.toggle("active");
  console.log("hello");
  console.log(languageList);
});

// Functionality of javascript button
let jsButton = document.querySelector(".select-language #jsBtn");
// console.log(jsButton)

let language_title = document.querySelector("header .title");

jsButton.addEventListener("click", function () {
  // CHange title
  language_title.innerHTML = "Javascript";
  // Change frame to javascript frame
  let frame = document.querySelector("iframe");
  frame.src = "javascript.html";
  document.querySelector(".select-language").classList.add("active");
  // Updating sidebar menu list with javascript topics
  let listOfJsFeatures = ["Dom.html", "Ajax.html", "R.html"];
  document.querySelector("aside ul").innerHTML = listOfJsFeatures
    .map((list) => {
      return `
                        <li><p onclick="updateFrameWithJs(this)" >${list}</p></li>
                        `;
    })
    .join(" ");
});

// Update fram with js
function updateFrameWithJs(a) {
  document.querySelector("iframe").src = `javascript/${a.innerHTML}`;
  document.querySelector("aside").classList.add("active2");
}





   // Functionality of CSS button
   let cssButton = document.querySelector(".select-language #cssBtn");
   // console.log(cssButton)

   language_title = document.querySelector("header .title");

   cssButton.addEventListener("click", function () {
     // CHange title
     language_title.innerHTML = "CSS";
     // Change frame to javascript frame
     let frame = document.querySelector("iframe");
     frame.src = "css.html";
     document.querySelector(".select-language").classList.add("active");

     // Updating sidebar menu list withcss topics
     let listOfJsFeatures = [
       "animation.html",
       "selector.html",
       "effect.html",
     ];
     document.querySelector("aside ul").innerHTML = listOfJsFeatures
       .map((list) => {
         return `
                     <li><p onclick="updateFrameWithcss(this)" >${list}</p></li>
                     `;
       })
       .join(" ");
   });




      // Update fram with js
      function updateFrameWithcss(a) {
          document.querySelector("iframe").src = `css/${a.innerHTML}`;
          document.querySelector("aside").classList.add("active2");
        }
     
        // Functionality of html button
        let htmlButton = document.querySelector(".select-language #htmlBtn");
        // console.log(cssButton)
  
        language_title = document.querySelector("header .title");
  
        htmlButton.addEventListener("click", function () {
          // CHange title
          language_title.innerHTML = "HTML";
          // Change frame to javascript frame
          let frame = document.querySelector("iframe");
          frame.src = "html.html";
          document.querySelector(".select-language").classList.add("active");
  
          // Updating sidebar menu list withHtml topics
          let listOfHTMLFeatures = ["introduction.html"];
          document.querySelector("aside ul").innerHTML = listOfHTMLFeatures
            .map((list) => {
              return `
                          <li><p onclick="updateFrameWithhtml(this)" >${list}</p></li>
                          `;
            })
            .join(" ");
        });


// Update fram with html
      function updateFrameWithhtml(a) {
        document.querySelector("iframe").src = `html/${a.innerHTML}`;
        document.querySelector("aside").classList.add("active2");
      }

      // Side bar toggle
      let burger = document.querySelector(".hamburger");
      let aside = document.querySelector("aside");

      burger.addEventListener("click", function () {
        aside.classList.toggle("active2");
      });