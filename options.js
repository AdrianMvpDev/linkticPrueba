import $ from 'jquery';

console.log("Aqui");

$(document).ready(function() {
    $('#fruitsSelect').select2({
        allowClear: true,
        language: {
            noResults: function() {
                return 'No items were found.';
                },
                searching: function() {
                    return 'This is a search input';
                    },
        }
    });
});