  let numbers = document.querySelectorAll(".calcbtn");
  let input = document.getElementById("input");
  let string = "";
  let arr = Array.from(numbers);

  arr.filter((numbers) => {
    numbers.addEventListener("click", (e) => {
      if (e.target.innerHTML === "=") {
        string = eval(string);
        input.value = string;
        string = ""; 
      } else {
        if (!isNaN(e.target.innerHTML) && (string === "" || string.toString().startsWith("0"))) {
          string = e.target.innerHTML; 
        } else {
          string += e.target.innerHTML;
        }
        input.value = string;
        console.log(input.value);
      }
    });
  });

  clearAll.addEventListener("click", () => {
    input.value = "";
    string = 0;
  });
