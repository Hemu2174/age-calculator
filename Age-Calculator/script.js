function calculateAge(){

    const birthdate = new Date(document.getElementById("birthdate").value);

    const today = new Date();


    if(isNaN(birthdate.getTime())){
        document.getElementById("result").innerHTML = 'Please enter a valid date.';
        return;
    }

    // DOB = 10/25/1995    today = 08/11/2024

    let age = today.getFullYear() - birthdate.getFullYear(); // 29
    let monthDiff = today.getMonth() - birthdate.getMonth(); // -2
    let dayDiff = today.getDate() - birthdate.getDate();   // -14

      // Adjust age if birthday hasn't occurred this year

    if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
        age--;    // 28 
        monthDiff +=12; // 10
    }  

    // Adjust months and days
    if(dayDiff < 0){
        monthDiff--;  // 9
        dayDiff += new Date(today.getFullYear(), today.getMonth(),0).getDate();  //  -14 + 31 = 17 
    }

    // print data on the result Element

    let resultHTML =   `
          <div class="result-item">Age:<span> ${age} years</span></div>  
          <div class="result-item">Months:<span> ${monthDiff} months </span></div>  
          <div class="result-item">Days:<span> ${dayDiff} days</span></div>  
    `;

    document.getElementById('result').innerHTML = resultHTML;
}