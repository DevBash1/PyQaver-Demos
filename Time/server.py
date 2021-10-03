from time import gmtime, strftime

now = strftime("%H:%M", gmtime())
name = _POST("name")

if(name):
    print("Hello {}, The Server Time is {}".format(name,now))
else:
    print("Please Enter Your Name!")