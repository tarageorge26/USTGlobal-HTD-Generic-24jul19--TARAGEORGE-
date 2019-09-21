let formEle=document.getElementById('formid').innerhtml=
                        `<form>
                        <label for="Name">Name</label><br>
                        <input type="text" name="Name" id="Name">
                        </div>
                    
                        <div>
                        <label for="Age">Age</label><br>
                        <input type="Age" name="age" id="age">
                        </div>
                    
                        <div>
                        <label for="adr">Address</label><br>
                        <input type="Address" name="adr" id="adr">
                        </div>
                        <div>
                        <label for="em">Email</label><br>
                        <input type="email" name="em" id="em">
                        </div>
                    
                        <div>
                        <label for="dob">DOB</label><br>
                        <input type="date" name="dob" id="dob">
                        </div>
                    
                        <div>
                            <label for="gn">Gender</label><br>
                            <input type="radio" name="gender" id="gn">Male
                            <input type="radio" name="gender" id="gn">Female
                            <input type="radio" name="gender" id="gn">Others
                        </div><br>

                        </form> `
                        document.write(formEle);