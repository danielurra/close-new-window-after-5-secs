# Automatically close a new window after 5 secs
This exercise involves basic HTML and Javascript to make a new window to be automatically closed after 5 seconds.<br>
<img width="874" alt="javascript-automatic-close-new-windows-v2" src="https://github.com/danielurra/close-new-window-after-5-secs/assets/51704179/12f8e131-44cb-45e2-9cb5-252b0d5df59e"><br>

## Elements and functions
HTML elements can be connected to a function that gets called automatically when something happens to the HTML element.<br>
In this case the **button** element is connected to a function that gets invoked when the user clicks the button, see below:<br>
## index.html
```html
<!DOCTYPE html>

<head>
    <title>Open new Window</title>
    <script src="./script.js"></script>
</head>

<body>
    <h1>Do you wanna visit my website ciscoar.com?</h1>
    <p>Click below button, the page will automatically close after 5 seconds</p>
    <button onclick="opNeWi()">go visit Ciscoar</button>
</body>

</html>
```
If you run above code as it is now, you'll get an error, because the referred function `opNeWi()` is not being defined.<br>
<img width="559" alt="function-not-defined-error" src="https://github.com/danielurra/close-new-window-after-5-secs/assets/51704179/614f86d5-42dd-45d3-9aac-bbd85c0188f4"><br>

We'll write this function in a separate javascript file, see the following section.<br>
## Javascript function
Below function make use of the **window.open()** method to open a new web page, it accepts three arguments:<br>
* website URL
* Open in a new windows (default value)
* Window size<br>
  
## script.js
```javascript
function opNeWi(){
            let ciscoarUrl = 'https://www.ciscoar.com';
            let opNeWi = window.open(ciscoarUrl, "", "width=800, height=400");
            setTimeout(() => {
                opNeWi.close();
            }, 5000);   
        }
```
## How to test the onclick event
The **onclick** event executes a function, that function can be defined either in the same **index.html** file<br>
by using the `<script></script>` tags or in a separated file called e.g. **script.js** by using javascript programming language.<br>
```javascript
function opNeWi() {
    console.log("Onclick event is working");
}
```
<img width="542" alt="test-onclick-event-function-01-v2" src="https://github.com/danielurra/close-new-window-after-5-secs/assets/51704179/81b8673d-dec3-4d96-8808-7c6e0cd67592"><br>
Immediately after you click the button you'll see the message appearing in the console, see image below:<br>
<img width="355" alt="test-onclick-event-function-02" src="https://github.com/danielurra/close-new-window-after-5-secs/assets/51704179/39031724-b314-4d13-8cc5-a8d3794f37ff"><br>


