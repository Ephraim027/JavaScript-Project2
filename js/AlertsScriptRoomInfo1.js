const alertBookNowButton = document.getElementById('alertBookNowButton');

// Show alert and proceed to the next page
alertBookNowButton.addEventListener('click', function () {
    alert('Are you sure that you want to Book Now?');
    window.location.href = 'RoomInfo.html'; // Replace 'next_page.html' with your actual page link
});

