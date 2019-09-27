const request = require('request');
module.exports = (router) => {

    router.post('/login', (req, res) => {
        if (!req.body.email) {
            res.json({ success: false, message: 'email is required' })
        } else {
            if (!req.body.password) {
                res.json({ success: false, message: 'password is required' })
            } else {
                const url = "http://157.245.77.175:8070/web/session/authenticate/";
                const email = req.body.email;
                const pass = req.body.password;
                const db = "demo12"
                request(
                    {
                        method: 'POST',
                        url: url,

                        json: {
                            "params": {
                                "login": email,
                                "password": pass,
                                "db": db
                            }
                        }

                    },
                    function (error, response, body) {
                        if (error) {
                            console.log(error);

                        } else {

                            //console.log(req.headers.cookie.trim());


                            if (response.statusCode != 200) {
                                res.json({ message: response.statusCode })
                            } else {
                                try {
                                    res.json(JSON.parse(body)).status(200)
                                } catch (error) {
                                    res.json({ success: false, message: 'invalid response' })
                                }

                            }
                        }

                    }
                )
            }
        }
    })
    router.post('/projects', (req, res) => {
        if (!req.body.cookie) {
            res.json({ success: false, message: 'invalid cookie' })
        } else {
            const param = req.body.cookie;

            const url = "http://157.245.77.175:8070/api/project.project/?session_id=" + param;


            request(
                {

                    url: url,


                },
                function (error, response, body) {
                    if (error) {
                        console.log(error);

                    } else {
                        if (response.statusCode != 200) {
                            res.json({ success: false, message: response.statusCode })
                        } else {
                            try {
                                res.json(JSON.parse(body)).status(200)
                            } catch (error) {
                                res.json({ success: false, message: 'invalid response' })
                            }

                        }

                    }

                }
            )
        }

    })
    router.post('/tasks', (req, res) => {

        if (!req.body.cookie) {
            res.json({ success: false, message: 'invalid cookie' })
        } else {
            const param = req.body.cookie;

            const url = "http://157.245.77.175:8070/api/project.task/?session_id=" + param;


            request(
                {

                    url: url,


                },
                function (error, response, body) {
                    if (error) {
                        console.log(error);

                    } else {
                        if (response.statusCode != 200) {
                            res.json({ success: false, message: response.statusCode })
                        } else {
                            try {
                                res.json(JSON.parse(body)).status(response.statusCode)
                            } catch (error) {
                                res.json({ success: false, message: 'invalid response' })
                            }

                        }

                    }

                }
            )
        }
    })

    router.post('/add', (req, res) => {
      if (!req.body.title) {
        res.json({success:false,message:'Title of the project required'}) 
      } else {
        if (!req.body.cookie) {
            res.json({success:false,message:'Invalid session'}) 
        } else {
            const param=req.body.cookie
            const url = "http://157.245.77.175:8070/api/project.project/?session_id="+param;
            const name = req.body.title;
          
            const db = "demo12"
            request(
                {
                    method: 'POST',
                    url: url,
  
                    json: {
                        "params": {
                            "data": {
                                "name": name
                            }
                        }
                    }
  
                },
                function (error, response, body) {
                    if (error) {
                        console.log(error);
  
                    } else {
  
                        //console.log(req.headers.cookie.trim());
  
  
                        if (response.statusCode != 200) {
                            res.json({success:false, message: response.statusCode })
                        } else {
                            try {
                                res.json({success:true,message:'project added',body}).status(response.statusCode)
                            } catch (error) {
                                res.json({ success: false, message: 'invalid response' })
                            }
  
                        }
                    }
  
                }
            ) 
        }
        
      }
    })

    router.post('/users',(req,res)=>{
        if (!req.body.cookie) {
            res.json({ success: false, message: 'invalid cookie' })
        } else {
            const param = req.body.cookie;

            const url = "https://157.245.77.175:8070/api/res.partner/?session_id=" + param;


            request(
                {

                    url: url,


                },
                function (error, response, body) {
                    if (error) {
                        console.log(error);

                    } else {
                        if (response.statusCode != 200) {
                            res.json({ success: false, message: response.statusCode })
                        } else {
                            try {
                                res.json(JSON.parse(body)).status(200)
                            } catch (error) {
                                res.json({ success: false, message: 'invalid response' })
                            }

                        }

                    }

                }
            )
        }
    })

    router.post('/task',(req,res)=>{
        if (!req.body.title) {
            res.json({success:false,message:'Title of the project required'}) 
          } else {
            if (!req.body.cookie) {
                res.json({success:false,message:'Invalid session'}) 
            } else {
                const param=req.body.cookie
                const url = "https://157.245.77.175:8070/api/project.task/?session_id="+param;
                const name = req.body.title;
              
                const db = "demo12"
                request(
                    {
                        method: 'POST',
                        url: url,
      
                        json: {
                            "params": {
                                "data": {
                                    "name": name
                                }
                            }
                        }
      
                    },
                    function (error, response, body) {
                        if (error) {
                            console.log(error);
      
                        } else {
      
                            //console.log(req.headers.cookie.trim());
      
      
                            if (response.statusCode != 200) {
                                res.json({success:false, message: response.statusCode })
                            } else {
                                try {
                                    res.json({success:true,message:'Task added',body}).status(response.statusCode)
                                } catch (error) {
                                    res.json({ success: false, message: 'invalid response' })
                                }
      
                            }
                        }
      
                    }
                ) 
            }
            
          }
    })
    return router
}