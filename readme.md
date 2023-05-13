DATABASE SCHEMAS
endpoints:-
/user
|GET
`/user`-------> |POST
                |-----> `/user/register`  //for registering user

                   {
                        name:"Saurabh",
                        email:"sau4478@gmail.com",
                        password:"12234",
                        phone:37949740 (optional)
                    }
-------------------------------------------------------------------------------------------------------
                |POST
                |-----> `/user/login`

                   {
                       
                        email:"sau4478@gmail.com",
                        password:"12234",
                       
                    }

-------------------------------------------------------------------------------------------------------

                |GET
                |---> `/user/admin` 

                  headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                    }

-------------------------------------------------------------------------------------------------------

                |PATCH
                |------> `/user/superadmin/:id`



                  headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                    }

/product
|GET/POST
`/product`---> |GET/PATCH/DELETE
                |-----------------> `/product/:id`

            |GET -----> /product?category=kurta

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
            }

-------------------------------------------------------------------------------------------------------            

            |POST --> /product

                [{

                    image: { type: String, required: true },
                    title: { type: String, required: true },
                    description: { type: String, required: true },
                    price: { type: Number, required: true },
                    originalPrice: { type: Number, required: true },
                    sizes: { type: String, required: true },
                    category: { type: String ,required:true },
                    style: { type: String, required: true },
                    color: { type: String, required: true },
                    material: { type: String},
                    fit: { type: String },
                    occasion: { type: String},
                    sleeves: { type: String },
                    neck: { type: String, },
                    brand: { type: String, required: true },
                    gender: { type: String, required: true },
                    delivery:{ type: Number, required: true },
                    tags:{type: String},
                    stock:{type: Number, required: true},


                }]

                 headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                    }

-------------------------------------------------------------------------------------------------------

            |PATCH -----> /product/:id
                {
                    key:"value"
                }

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                }

------------------------------------------------------------------------------------------------------

            |DELETE -----> /product/:id

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                }

/cart
|GET/POST 
`/cart`-------> |PATCH/DELETE 
                |-------------> `/cart/:id`

            |GET -----> /cart

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
            }

-------------------------------------------------------------------------------------------------------            

            |POST --> /cart

                [{

                        image:{type:String,required:true},
                        title:{type:String,required:true}, 
                        description:{type:String,required:true},
                        price:{type:Number,required:true},
                        originalPrice: { type: Number, required: true },
                        sizes:{type:String,required:true},
                        category:{type:String,required:true},
                        style:{type:String},
                        color:{type:String,required:true},
                        material: { type: String},
                        fit: { type: String },
                        occasion: { type: String},
                        sleeves: { type: String },
                        neck: { type: String, },
                        brand:{type:String,required:true},
                        gender:{type:String,required:true},
                        delivery:{ type: Number, required: true },
                        adminId:{type: String, required: true},
                        quantity:{type:Number,required:true},(Add manually)
                        user:{type:String,required:true},
                        pid:{type:String,required:true},
                        tags:{type: String},
                        stock:{type: Number, required: true},


                }]

                 headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                    }

-------------------------------------------------------------------------------------------------------

            |PATCH -----> /cart/:id
                {
                    key:"value"
                }

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                }

------------------------------------------------------------------------------------------------------

            |DELETE -----> /cart/:id

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                }



/order
|GET/POST
`/order`-----> |PATCH
                |------> `/orders/:id`

            |GET -----> /order

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
            }

-------------------------------------------------------------------------------------------------------            

            |POST --> /order

               [{

                            image:{type:String,required:true},
                            title:{type:String,required:true},
                            description:{type:String,required:true},
                            price:{type:Number,required:true},
                            originalPrice: { type: Number, required: true },
                            sizes:{type:String,required:true},
                            category:{type:String,required:true},
                            style:{type:String},<br>
                            color:{type:String,required:true},
                            material: { type: String},
                            fit: { type: String },
                            occasion: { type: String},
                            sleeves: { type: String },
                            neck: { type: String, },
                            brand:{type:String,required:true},
                            gender:{type:String,required:true},
                            quantity:{type:Number,required:true},
                            user:{type:String,required:true},
                            status:{type:String,required:true},(Automatic)
                            address:{type:String,required:true},
                            orderDate:{type:String,required:true}, (Automatic)
                            pid:{type:String,required:true},
                            delivery:{ type: Number, required: true },
                            adminId:{type: String, required: true},
                            tags:{type: String},
                            stock:{type: Number, required: true},
                            totalDiscountPrice:{type:Number,required:true}


                }]

                 headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                    }

-------------------------------------------------------------------------------------------------------

            |PATCH -----> /order/:id
                {
                    key:"value"
                }

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                }
            
|GET
/search

Middlewares
Authencator--> verify user

Querys:-
`/search?q=`<br>
`/products?`<size, price, category, style, color, material, fir, occasion, sleeves, neck, brand, gender> =<br>

user keys
name
email
password
role
phone

Product keys
image
title
description
price
originalPrice
sizes
category
style
color
material
fit
occasion
sleeves
neck
brand
gender
delivery
adminId
tags

user schema for Registering
name:{type:String,required:true},
email:{type:String},
password:{type:String},
role:{type:String,required:true},
(Automatic) phone:title:{type:String},

Product Schema
_id:{type:String,required:true},
(Automatic) image: { type: String, required: true },
title: { type: String, required: true },
description: { type: String, required: true },
price: { type: Number, required: true },
originalPrice: { type: Number, required: true },
sizes: { type: String, required: true },
category: { type: String ,required:true },
style: { type: String, required: true },
color: { type: String, required: true },
material: { type: String},
fit: { type: String },
occasion: { type: String},
sleeves: { type: String },
neck: { type: String, },
brand: { type: String, required: true },
gender: { type: String, required: true },
delivery:{ type: Number, required: true },
adminId:{type: String, required: true},
(Automatic) tags:{type: String},
stock:{type: Number, required: true},

Cart Schema
_id:{type:String,required:true},
(Automatic) image:{type:String,required:true},
title:{type:String,required:true},
description:{type:String,required:true},
price:{type:Number,required:true},
originalPrice: { type: Number, required: true },
sizes:{type:String,required:true},
category:{type:String,required:true},
style:{type:String},
color:{type:String,required:true},
material: { type: String},
fit: { type: String },
occasion: { type: String},
sleeves: { type: String },
neck: { type: String, },
brand:{type:String,required:true},
gender:{type:String,required:true},
delivery:{ type: Number, required: true },
adminId:{type: String, required: true},
quantity:{type:Number,required:true},
(Add manually) user:{type:String,required:true},
pid:{type:String,required:true},
tags:{type: String}
stock:{type: Number, required: true},

Order Schema
image:{type:String,required:true},
title:{type:String,required:true},
description:{type:String,required:true},
price:{type:Number,required:true},
originalPrice: { type: Number, required: true },
sizes:{type:String,required:true},
category:{type:String,required:true},
style:{type:String},
color:{type:String,required:true},
material: { type: String},
fit: { type: String },
occasion: { type: String},
sleeves: { type: String },
neck: { type: String, },
brand:{type:String,required:true},
gender:{type:String,required:true},
quantity:{type:Number,required:true},
user:{type:String,required:true},
status:{type:String,required:true},
(Automatic) address:{type:String,required:true},
orderDate:{type:String,required:true},
(Automatic) pid:{type:String,required:true},
delivery:{ type: Number, required: true },
adminId:{type: String, required: true},
tags:{type: String},
stock:{type: Number, required: true}
totalDiscountPrice:{type:Number,required:true}