let lastResult = "";

function checkPalindrome() {
  const text = document.getElementById('inputText').value;
  const resultDiv = document.getElementById('result');

  const clean = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversed = clean.split('').reverse().join('');

  if (clean === "") {
    lastResult = "";
    resultDiv.textContent = "Please enter something.";
    resultDiv.style.color = "red";
  } else if (clean === reversed) {
    lastResult = `"${text}" is a palindrome!`;
    resultDiv.textContent = lastResult;
    resultDiv.style.color = "green";
  } else {
    lastResult = `"${text}" is NOT a palindrome.`;
    resultDiv.textContent = lastResult;
    resultDiv.style.color = "red";
  }

  // clear previous download link
  document.getElementById('downloadLink').innerHTML = "";
}

function saveResult() {
  if (!lastResult) {
    alert("Check a string first.");
    return;
  }

  const blob = new Blob([lastResult], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const linkDiv = document.getElementById('downloadLink');
  linkDiv.innerHTML = ""; // clear old

  const a = document.createElement('a');
  a.href = url;
  a.download = "palindrome_result.txt";
  a.textContent = "Download result";
  a.style.display = "inline-block";
  a.style.marginTop = "5px";
  a.onclick = () => {
    setTimeout(() => URL.revokeObjectURL(url), 500);
  };

  linkDiv.appendChild(a);
}
