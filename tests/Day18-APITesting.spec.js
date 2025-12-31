//Understandoing About API calls

// All web actions are driven by API requests at the backend


//https://rahulshettyacademy.com/api/ecom/auth/login
//Body
/* {
    "userEmail": "balaji.ravichandran@gmail.com",
    "userPassword": "test@121A"
}*/
//POST method in postman

//Right click Inspect Got to Network tab  take API URL and PAyload

//Once Login via UI

// check the session token is Availbale in Developer tools -> applications->local storage-> session token

// If session token expires we have to login again

//Logi the same web Page in Incoginito it will ask to enter user name and pasword
// Copy the same session token and paste it incognito the it will not ask login again

//Purpose No need to login every time if we have mutiple test the same Web app Ex. orders

// skip the login using the session token

//https://rahulshettyacademy.com/client/#/auth/login

// we gonna see how can this we implement via playwright

