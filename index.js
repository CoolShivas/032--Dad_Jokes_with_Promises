// //======// // Starting of accessing the reference of id's and classess. // //======// //

const accApiBody = document.querySelector(".api_body");
//   console.log(accApiBody); // Getting section tab on browser console;
const accFetchJokesBtn = document.getElementById("fetch_Jokes");
//   console.log(accFetchJokesBtn); // Getting btn tab on browser console;

// //======// // Ending of accessing the reference of id's and classess. // //======// //

//////-----------------------------------------------------------------------------------------------////////////
//////-----------------------------------------------------------------------------------------------////////////

// //======// // Starting of defining the api link. // //======// //

const apiUrl = "https://official-joke-api.appspot.com/random_joke";

// //======// // Ending of defining the api link. // //======// //

//////-----------------------------------------------------------------------------------------------////////////
//////-----------------------------------------------------------------------------------------------////////////

// //======// // Starting of defining the function on btn invoke. // //======// //

// const handlerOnFetchDataBtn = (event) => {
//   // console.log(event.target); // Getting the event on clicking the btn;

//   const response = fetch(apiUrl, {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((res) => {
//       console.log(res); // Getting Response with ok:true, status:200;
//       // apiBody.innerHTML = res; // Getting on display [object Response];
//       // // // Therefore, we are getting the raw data only;

//       // accApiBody.innerHTML = res; // Getting response on display as [object Response]; So, we have to use header with apiURL;

//       return res.json(); // Converting the res data to json format;
//     })
//     .then((data) => {
//       accApiBody.innerHTML = data.setup;
//       document.querySelector(".api_punch").innerHTML = data.punchline;
//     })
//     .catch((err) => {
//       console.log(err); // If api doesn't response with ok:true, and status:400 i.e, failed;
//     });
// };

// // // Use of Async and Await instead of .then and .catch;
const handlerOnFetchDataBtn = async () => {
  const response = await fetch(apiUrl, {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();
  console.log(data); // Getting Response with ok:true, status:200;

  accApiBody.innerHTML = data.setup;
  document.querySelector(".api_punch").innerHTML = data.punchline;
};
// //======// // Ending of defining the function on btn invoke. // //======// //

// // // Calling the function for getting the default joke on page reload with click instead of blank or without joke;
handlerOnFetchDataBtn();

//////-----------------------------------------------------------------------------------------------////////////
//////-----------------------------------------------------------------------------------------------////////////

// //======// // Starting of firing the event listener on button click. // //======// //

//   accFetchJokesBtn.addEventListener("click", (event) => {
//     console.log(event.target); // Getting the event on clicking the btn;
//   });

// // // Invocation of handlerOnFetchDataBtn() on btn click;
accFetchJokesBtn.addEventListener("click", handlerOnFetchDataBtn);

// //======// // Ending of firing the event listener on button click. // //======// //

//////-----------------------------------------------------------------------------------------------////////////
//////-----------------------------------------------------------------------------------------------////////////
