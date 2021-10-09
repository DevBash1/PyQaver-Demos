import os

if("file1" in _FILES):
    #image holds path of uploaded file
    #_FILES is like $_FILES in PHP
    image = _FILES["file1"]

    #Move Uploaded file from temp directory to main
    os.rename(image,"upload.jpg")
    print("upload.jpg")