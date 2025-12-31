class APIUtils {

    // create tww async methods one for GetToken from loginpage and then
    //  use the session token create order and retrun orderid

    //For that we need APItext (glablly used), , login payload( gloabaly used), order payload

    // Globally used thing can get as parameterized consutructor

    constructor(apiContext, loginPayload) {
        
        this.apiContext = apiContext;

        this.loginPayload = loginPayload;

    }

    async getToken() {
        //To get token 

        //need to give login api with payload post method

        // return session token

        const apiResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayload
            }
        );
        //how to identify the syntax -> jus mouse hover in name of post

        //await expect(apiResponse.ok()).toBeTruthy();

        const loginResposne = await apiResponse.json(); // extract Response message

        const sessionToken = loginResposne.token;

        console.log(sessionToken);

        return sessionToken;

    }

    async createOrder(orderPayload) {
        //create repsone varibale can store mutiple property and values which can be returned

        //becuase  we need token for to store loacla storage and order id verify order details

        let response = {};

        response.sessionToken = await this.getToken(); // take the session token from above method

        // this keywordd refers current class method

        const createOrderRepsone = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayload,
                headers: {
                    'Authorization': response.sessionToken,
                    'Content-Type': 'application/json'
                },
            }
        )

        //await expect(createOrderRepsone.ok()).toBeTruthy();

        const oderJson = await createOrderRepsone.json();

        console.log(oderJson)

        response.orderID = oderJson.orders[0];

        return response;


    }
         
}

module.exports = { APIUtils };


// TO MAKE THIS apiutILS CLASS TO GLOBALLY AVAILABLE
