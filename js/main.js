var input = document.getElementById("search");
alert('sfs');
input.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) { 
        var search_data = this.value;
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                var x = `<table>
                    <tbody>
                    <tr>
                        <td colspan="2"><img src="${data.data.poster}"></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td></td>
                    </tr>
                </tbody>
            </table >`;
                var fetch_record = document.getElementById('fetch_record'); 
                fetch_record.innerHTML = x;
            });
    }
});
