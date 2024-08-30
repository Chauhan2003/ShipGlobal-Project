// This is my Javascript file

// Wait for the DOM to fully load before running the JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class 'accordion-header'
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  // Loop through each accordion header element
  accordionHeaders.forEach((header) => {
    // Add a click event listener to each header
    header.addEventListener("click", function () {
      // Toggle the 'active' class on the clicked header
      // This class can be used for additional styling - to show an open state
      this.classList.toggle("active");

      // Get the next sibling element (the content area associated with this header)
      const content = this.nextElementSibling;

      // Check if the content area is already open (i.e., has a max-height set)
      if (content.style.maxHeight) {
        // If it's open, close it by setting max-height to null
        content.style.maxHeight = null;
        // Adjust the padding to make the collapse smooth and consistent
        content.style.padding = "0 15px";
      } else {
        // Close all other open accordion contents first
        document.querySelectorAll(".accordion-content").forEach((item) => {
          // Set max-height to null to collapse any open content areas
          item.style.maxHeight = null;
          // Remove the 'active' class from their headers
          item.previousElementSibling.classList.remove("active");
          // Reset the padding
          item.style.padding = "0 15px";
        });

        // Open the clicked accordion content
        // Set max-height to the content's scrollHeight to make it fully visible
        content.style.maxHeight = content.scrollHeight + "px";
        // Adjust the padding to give some space for the content when expanded
        content.style.padding = "15px 15px";
      }
    });
  });
});
