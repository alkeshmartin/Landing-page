class Landing 
    {
        //Property
        dataBase = 
            {
                "Milan":{username:"Milan", password:"Milan123"},
                "Manu":{username:"Manu", password:"Manu123"},
                "Anu":{username:"Anu", password:"Anu123"},
                "Manual":{username:"Manual",password:"Manual123"}
            }
            //method
            save()
                {
                    localStorage.setItem("dataBase",JSON.stringify(this.dataBase))
                }
            //get data
            getData()
                {
                    this.dataBase=JSON.parse(localStorage.getItem("dataBase"))
                }
            //register
            register()
                {
                    this.getData()
                    let user=regUname.value;
                    let pswd=regPswd.value;
                    console.log(user, pswd);
                    if (user=="" || pswd=="")
                        {
                            alert("Please fill the form completely");
                        }
                    else
                        {
                            if(user in this.dataBase)
                                {
                                    alert("User already exist!!")
                                }
                            else
                                {
                                    this.dataBase[user]={username:user,password:pswd}
                                    this.save();
                                    alert("User added successfully!!")
                                    window.location="index.html";
                                }
                        }
                }
            //Login
            login()
                {
                    let luser = loginuser.value;
                    let lpswd = loginpswd.value;
                    console.log(luser, lpswd)
                    this.getData()
                    if(luser=="" || lpswd=="")
                        {
                            alert('Please fill the form completely!!')
                        }
                    else
                        {
                            if(luser in this.dataBase)
                                {
                                    if(this.dataBase[luser].password==lpswd)
                                        {
                                            alert('Login successfully!!')
                                            localStorage.setItem("user",luser)
                                            window.location="home.html";
                                        }
                                    else
                                        {
                                            alert('Wrong username or password!!')
                                        }
                                }
                            else
                                {
                                    alert('Wrong username or password')
                                }
                        }
                }
    }
    //object
    const obj = new Landing()
    obj.getData();