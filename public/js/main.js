var input = document.getElementById("search");

input.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        var loader = document.getElementById('loader');
        var fetch_record = document.getElementById('fetch_record');

        var search_data = this.value;

        if(search_data == ''){
            fetch_record.innerHTML = '<p style="color:red;">Enter Movie Name.</p>';
            return false;
        }
        
        loader.style.display = "block";

        fetch('/getDetails?search=' + search_data)
            .then(response => response.json())
            .then(data => { 
                var x = '';
                console.log(data.error);
                if(data.error == undefined){
                     x+= `<table class="table">
                        <tbody>
                        <tr>
                            <td></td>
                            <td><img src="${data.data.poster}" height="200" width="150"></td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>${data.data.title}</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>${data.data.rating[0].Value}</td>
                        </tr>
                    </tbody>
                </table >`;
                }else{
                    x+= `<p style="color:red;">${data.error}</p>`;
                }
                
                fetch_record.innerHTML = x;
                loader.style.display = "none";
            });
    }
});
