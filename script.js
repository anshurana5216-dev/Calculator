const screen = document.getElementById("screen");
screen.value = "0";
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "AC") {
            screen.value = "";
        }

        else if (value === "DEL") {
            screen.value = screen.value.slice(0, -1);
        }

        else if (value === "=") {
            try {
                screen.value = eval(screen.value);
            }
            catch {
                screen.value = "Error";
            }
        }

       else {
    if (screen.value === "0") {
        screen.value = value;
    } else {
        screen.value += value;
    }
}
    });

});



//KEYBOARD KEYS-OPERSTIONS:-
document.addEventListener("keydown", (e) => {

    const key = e.key;

    if (
        "0123456789+-*/.%".includes(key)
    ) {
      if (screen.value === "0") {
    screen.value = key;
} else {
    screen.value += key;
}
    }

    else if (key === "Enter") {
        try {
            screen.value = eval(screen.value);
        }
        catch {
            screen.value = "Error";
        }
    }

    else if (key === "Backspace") {
        screen.value = screen.value.slice(0, -1);
    }

    else if (key === "Escape") {
       screen.value = "0";
    }

});