document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("registrationForm").addEventListener("submit", function(e) {
        e.preventDefault();
    
        // Calculate individual costs
        const roomCost = calculateRoomCost();
        const amenitiesCost = calculateAmenitiesCost();
        const totalCost = roomCost + amenitiesCost;
        const advancePayment = 1000;  // Given fixed amount
        const balanceAmount = totalCost - advancePayment;
    
        // Display calculated costs in the cost modal
        document.getElementById("roomCostDisplay").textContent = "Room Cost: ₹" + roomCost;
        document.getElementById("amenitiesCostDisplay").textContent = "Amenities Cost: ₹" + amenitiesCost;
        document.getElementById("totalCostDisplay").textContent = "Total Cost: ₹" + totalCost;
        document.getElementById("balanceDisplay").textContent = "Balance to be paid: ₹" + balanceAmount;
    
        // Show the cost modal
        showModal("costModal");
    });

    // Add click event to the Confirm Booking button
    document.getElementById("confirmBooking").addEventListener("click", function() {
        // Close the cost modal and show the success modal
        closeModal("costModal");
        showModal("successModal");
    });

    // Close buttons for the modals
    document.getElementById("closeCostModal").addEventListener("click", function() {
        closeModal("costModal");
    });
    document.getElementById("closeSuccessModal").addEventListener("click", function() {
        closeModal("successModal");
    });

});

function calculateRoomCost() {
    const roomCosts = {
        'deluxe': 2500,
        'suite': 4000
    };
    const roomType = document.getElementById("roomType").value;
    const days = parseInt(document.getElementById("days").value);
    return roomCosts[roomType] * days;
}

function calculateAmenitiesCost() {
    const amenityCosts = {
        'AC': 1000,
        'Locker': 300
    };
    let totalAmenitiesCost = 0;
    Array.from(document.querySelectorAll('input[name="amenities"]:checked')).forEach(amenity => {
        totalAmenitiesCost += amenityCosts[amenity.value];
    });
    return totalAmenitiesCost;
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

document.getElementById("closeModal").onclick = function() {
    modal.style.display = "none";
}