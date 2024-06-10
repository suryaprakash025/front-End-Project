document.getElementById('country').addEventListener('change', function() {
    var pincodeField = document.getElementById('pincodeField');
    if (this.value === 'India') {
        pincodeField.classList.remove('hidden');
        document.getElementById('pincode').setAttribute('required', 'required');
    } else {
        pincodeField.classList.add('hidden');
        document.getElementById('pincode').removeAttribute('required');
    }
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    var fileInput = document.getElementById('file');
    if (fileInput.files[0].size > 2 * 1024 * 1024) { // 2MB
        alert('File size must be less than 2MB');
        event.preventDefault();
    }

   

});


ClassicEditor
    .create(document.querySelector('#message'))
    .catch(error => {
        console.error(error);
    });