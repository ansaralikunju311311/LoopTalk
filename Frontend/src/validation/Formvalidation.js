export const userValidation ={
    firstName:{
        required:"First name is required",
        minLenght:{value:3,message:"First name must be at least 3 characters long"}
    },
    lastName:{
        required:"Last name is required",
        minLenght:{value:3,message:"Last name must be at least 3 characters long"}
    },
    email:{
        required:"Email is required",
        pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,message:"Invalid email address"}
    },
    password:{
        required:"Password is required",
        minLenght:{value:6,message:"Password must be at least 6 characters long"}
    },
    confirmPassword:{
        required:"Confirm Password is required",
        minLenght:{value:6,message:"Confirm Password must be at least 6 characters long"}
    },
    phone:{
        required:"Phone is required",
        minLenght:{value:10,message:"Phone must be at least 10 characters long"}
    }

}