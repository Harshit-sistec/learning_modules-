<!DOCTYPE html>
<html>
<body>
  <h3>Average Marks Calculator</h3>

  <input id="m1" placeholder="Subject 1"><br><br>
  <input id="m2" placeholder="Subject 2"><br><br>
  <input id="m3" placeholder="Subject 3"><br><br>
  <input id="m4" placeholder="Subject 4"><br><br>
  <input id="m5" placeholder="Subject 5"><br><br>

  <button onclick="calc()">Get Average</button>
  <p id="result"></p>

  <script>
    function calc() {
      let a = +m1.value, b = +m2.value, c = +m3.value, d = +m4.value, e = +m5.value;
      let avg = (a + b + c + d + e) / 5;
      result.innerText = "Average: " + avg.toFixed(2);
    }
  </script>
</body>
</html>

