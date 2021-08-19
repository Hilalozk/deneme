const { authService } = require("../services");

const authController = {
async register(req,res,next) {
    try {
      const userHello = await authService.hello();
      console.log(userHello);
    } catch (error) {}
},

async signIn(req,res,next){
    try{

    }catch(error){

    }
},
async isauth(req,res,next){
    try{

    }catch(error){

    }
}
};

module.exports = authController;
