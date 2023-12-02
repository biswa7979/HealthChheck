function checkHealth() {
    // Get values from the form
    const heartRate = parseInt(document.getElementById('heartRate').value);
    const spo2 = parseInt(document.getElementById('spo2').value);
    const sysBloodPressure = parseInt(document.getElementById('sysBloodPressure').value);
    const diaBloodPressure = parseInt(document.getElementById('diaBloodPressure').value);

    // Check if values are in the normal range (adjust these ranges as needed)
    const isHeartRateValid = !isNaN(heartRate) && heartRate >= 60 && heartRate <= 100;
    const isSpo2Valid = !isNaN(spo2) && spo2 >= 95 && spo2 <= 100;
    const isSysBloodPressureValid = !isNaN(sysBloodPressure) && sysBloodPressure >= 90 && sysBloodPressure <= 120;
    const isDiaBloodPressureValid = !isNaN(diaBloodPressure) && diaBloodPressure >= 60 && diaBloodPressure <= 80;

    if (isHeartRateValid && isSpo2Valid && isSysBloodPressureValid && isDiaBloodPressureValid) {
        showPopup('You are absolutely fine.');
    } else {
    let errorMessage  = 'Your health parameters are out of bounds. ';

        // if (!isHeartRateValid) {
        //     errorMessage += 'Heart Rate should be between 60 and 100. ';
        // }

        // if (!isSpo2Valid) {
        //     errorMessage += 'SpO2 should be between 95 and 100. ';
        // }

        // if (!isSysBloodPressureValid) {
        //     errorMessage += 'Systolic Blood Pressure should be between 90 and 120. ';
        // }

        // if (!isDiaBloodPressureValid) {
        //     errorMessage += 'Diastolic Blood Pressure should be between 60 and 80. ';
        // }

        errorMessage += 'You should inform a doctor.';

        // showPopup(errorMessage, true);
        showPopup();

    }
}
function showPopup() {
    const popup2 = document.getElementById('popup2');
    popup2.style.display = 'flex';
    popup2.style.flexDirection ="column";
}
function showPopupy(informDoctor = false) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    
    popupText.textContent = "You should consoult a Doctor";

    if (informDoctor) {
        // Additional logic to inform the doctor can be added here
        console.log('Informing the doctor...');
    }
    const popup2 = document.getElementById('popup2');
    popup2.style.display = "none";
    popup.style.display = 'flex';
    popup.style.flexDirection ="column";
}
function showPopupn(informDoctor = false) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    
    popupText.textContent = "Your health parameters are out of bounds. Informing a Doctor";

    if (informDoctor) {
        // Additional logic to inform the doctor can be added here
        console.log('Informing the doctor...');
    }
    const popup2 = document.getElementById('popup2');
    popup2.style.display = "none";
    popup.style.display = 'flex';
    popup.style.flexDirection ="column";
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
