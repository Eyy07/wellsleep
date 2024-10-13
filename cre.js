function showModal(imageId) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var img = document.getElementById(imageId);
    modal.style.display = "flex"; // Show the modal
    modalImg.src = img.src; // Set the modal image to the clicked image
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal when clicked outside
}
