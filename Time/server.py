from time import gmtime, strftime

now = strftime("%H:%M", gmtime())

if("name" in _POST):
    #_POST is like $_POST in PHP
    name = _POST["name"]
    if(name.strip() == ""):
        print("Please Enter Your Name!")
    else:
        print("Hello {}, The Server Time is {}".format(name,now))
else:
    print("Please Enter Your Name!")