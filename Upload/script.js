function upload() {
    let image = document.getElementById("image");
    var a = document.createElement("input");
    a.type = "file";
    a.accept = "images/*";
    a.name = "file";
    a.id = "file";
    a.style = "visibility:hidden";
    a.multiple = "false";
    document.body.appendChild(a);

    a.addEventListener('change', function(e) {
        
        let len = this.files.length;

        var fd = new FormData();
        for(i=0;i<len;i++){
            var file = this.files[i];
            fd.append("file"+(i+1), file);
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'upload.py', true);

        xhr.upload.onprogress = function(e) {
            if (e.lengthComputable) {
                var percentComplete = (e.loaded / e.total) * 100;
                console.log(percentComplete + '% uploaded');
            }
        }

        xhr.onload = function() {
            if (this.status == 200) {
                var resp = this.response;
                image.src = resp;
                image.style.display = "block";
                console.log('Server got:', resp);
                
            } else {
                console.log("Error")
            }
        }

        xhr.send(fd);
    }, false);

    a.click();
}