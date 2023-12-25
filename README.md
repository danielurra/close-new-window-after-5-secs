# Automatically close a new window after 5 secs
basic HTML, JS, how to close new window after 5 secs
<img width="828" alt="javascript-automatic-close-new-windows" src="https://github.com/danielurra/close-new-window-after-5-secs/assets/51704179/9c190a0a-cb3c-4ec0-9ad6-37b9fe023317"><br>
## Grab the code - index.html
HTML elements can be connected to a function that gets called automatically when something happens to the HTML element.<br>
In this case the **button** element is connected to a function that gets invoked when the user clicks the button, see below:<br>
```html
<!DOCTYPE html>

<head>
    <title>Open new Window</title>
    <script src="./script.js"></script>
</head>

<body>
    <h1>Quieres ir a mi pagina ciscoar.com?</h1>
    <p>Haz clic en el boton, la pagina cierra automaticamente a los 5 seg.</p>
    <button onclick="opNeWi()">Ir a Ciscoar</button>
</body>

</html>
```
If you run above code as it is now, you'll get an error, because the referred function `opNeWi()` is not being defined.<br>
<img width="559" alt="function-not-defined-error" src="https://github.com/danielurra/close-new-window-after-5-secs/assets/51704179/614f86d5-42dd-45d3-9aac-bbd85c0188f4"><br>

We'll write this function in a separate javascript file, see the following section.<br>
## Grab the code - script.js
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
Onclick event executes a function, that function can be defined either in the same **index.html** file or<br>
in a separated file called e.g. **script.js** by using javascript programming language.<br>
<img width="796" alt="test-onclick-event-function-01" src="https://github.com/danielurra/close-new-window-after-5-secs/assets/51704179/0e237632-e060-40ad-b6d4-e3b772fe0620"><br>
<img width="355" alt="test-onclick-event-function-02" src="https://github.com/danielurra/close-new-window-after-5-secs/assets/51704179/39031724-b314-4d13-8cc5-a8d3794f37ff"><br>


