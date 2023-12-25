# close-new-window-after-5-secs
basic HTML, JS, how to close new window after 5 secs
<img width="828" alt="javascript-automatic-close-new-windows" src="https://github.com/danielurra/close-new-window-after-5-secs/assets/51704179/9c190a0a-cb3c-4ec0-9ad6-37b9fe023317"><br>
## Grab the code
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Open new Window</title>
</head>

<body>
    <h1>Quieres ir a mi pagina ciscoar.com?</h1>
    <p>Haz clic en el boton, la pagina cierra automaticamente a los 5 seg.</p>
    <button onclick="opNeWi()">Ir a Ciscoar</button>
    <script>
        function opNeWi(){
            // console.log("Onclick event is working");
            let ciscoarUrl = 'https://www.ciscoar.com';
            let opNeWi = window.open(ciscoarUrl, "", "width=800, height=400");
            setTimeout(() => {
                opNeWi.close();
            }, 5000);   
        }
    </script>


</body>

</html>
```
## How to test the onclick event
<img width="796" alt="test-onclick-event-function-01" src="https://github.com/danielurra/close-new-window-after-5-secs/assets/51704179/0e237632-e060-40ad-b6d4-e3b772fe0620"><br>
<img width="355" alt="test-onclick-event-function-02" src="https://github.com/danielurra/close-new-window-after-5-secs/assets/51704179/39031724-b314-4d13-8cc5-a8d3794f37ff"><br>


