// Select input elements for principal, times compounded, total years, interest volume, and output
const principalBox = document.querySelector("#principal");
const timesCompoundedBox = document.querySelector("#timesCompounded");
const totalYearsBox = document.querySelector("#totalYears");
const interestVolume = document.getElementById("interestVolume");
const interestSliderVal = document.getElementById("interestSliderVal");
const compoundOutput = document.querySelector("#compound");

// Attach event listeners to input fields to update compound interest calculation
principalBox.addEventListener("input", updateCompoundInterest);
timesCompoundedBox.addEventListener("input", updateCompoundInterest);
totalYearsBox.addEventListener("input", updateCompoundInterest);
interestVolume.addEventListener("input", function () {
  // Update the interest slider value and display it
  interestSliderVal.textContent = this.value;
  // Recalculate compound interest when slider value changes
  updateCompoundInterest();
});

// Function to compute and update compound interest based on input values
function updateCompoundInterest() {
  const principal = Number(principalBox.value); // Principal amount
  const percent = Number(interestVolume.value) / 100; // Interest rate as decimal
  const times = Number(timesCompoundedBox.value); // Compounding frequency per year
  const years = Number(totalYearsBox.value); // Investment duration in years

  // Check if all input fields have valid values
  if (!principal || !percent || !times || !years) {
    console.log("Please fill out all fields with valid numbers.");
    compoundOutput.value = "0"; // Reset output if inputs are invalid
    return;
  }

  // Calculate compound interest using the formula: A = P(1 + r/n)^(nt)
  const compoundInterest =
    principal * Math.pow(1 + percent / times, times * years);

  // Update the output element with the computed compound interest
  compoundOutput.value = `${compoundInterest.toFixed(2)}`;
}
