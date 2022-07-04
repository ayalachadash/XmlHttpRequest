import React from 'react';


function ReadJson() {
    let xmlhttp = new XMLHttpRequest();
    let url = "https://jsonplaceholder.typicode.com/posts";

    const toReadJson = () => {
        xmlhttp.onreadystatechange = function () {
            debugger

            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                console.log(this.status);
                console.log(this.responseURL);

                const element: HTMLElement = document.getElementById('toShowJson') as HTMLElement
                element.innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    return (
        <div>
            <p>hello read json</p>
            <button onClick={toReadJson}>json</button>
            <div id='toShowJson'></div>
        </div>
    )
}
export default ReadJson;