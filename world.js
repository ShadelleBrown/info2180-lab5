document.addEventListener('DOMContentLoaded', function() {
    const lookupButton = document.getElementById('lookup');
    const lookupCitiesButton = document.getElementById('lookup-cities');
    const resultDiv = document.getElementById('result');
    const countryInput = document.getElementById('country');
    
   //Button - Look Up country
    lookupButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const country = countryInput.value;
        
        fetch(`world.php?country=${encodeURIComponent(country)}`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = '<p>An error occurred. Please try again.</p>';
            });
    });
    
    //Button - Look Up cities
    lookupCitiesButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const country = countryInput.value;
        
        fetch(`world.php?country=${encodeURIComponent(country)}&lookup=cities`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = '<p>An error occurred. Please try again.</p>';
            });
    });
});