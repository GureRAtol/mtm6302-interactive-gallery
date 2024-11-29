document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("gallery-container");

    const images = [
        { src: "img/Bread.jpeg", title: "Image 1", description: "Bread is a staple food made from a mixture of flour, water, and usually yeast, which is then baked. It comes in various shapes, sizes, and textures, depending on the ingredients and preparation methods used. The most common types of bread include white, whole wheat, sourdough, and multigrain. The dough for bread is often kneaded to develop gluten, which gives the bread its structure and chewy texture." },
        { src: "img/pancakes.jpeg", title: "Image 2", description: "A pancake is a flat, round, and typically soft dish made from a batter of flour, eggs, milk, and a leavening agent like baking powder. The batter is cooked on a griddle or frying pan, creating a golden-brown exterior and a soft, fluffy interior" },
        { src: "img/biscuits.jpeg", title: "Image 2", description: "Biscuits are a type of baked bread product, typically soft and flaky, made from a dough of flour, fat (like butter or shortening), a leavening agent (such as baking powder or baking soda), and milk or buttermilk." },
        { src: "img/croissant.jpeg", title: "Image 2", description: "A croissant is a buttery, flaky, crescent-shaped pastry made from layers of dough and butter, typically enjoyed as a breakfast item." },
        { src: "img/sandwich.jpeg", title: "Image 2", description: "A sandwich is a dish consisting of two slices of bread with various fillings, such as meats, cheese, vegetables, and condiments, placed between them." },
        { src: "img/pie.jpeg", title: "Image 2", description: "A pie is a baked dish consisting of a pastry crust filled with sweet or savory ingredients, such as fruit, meat, or vegetables." },
        { src: "img/cake.jpeg", title: "Image 2", description: "A cake is a sweet, baked dessert made from flour, sugar, eggs, and other ingredients, often layered and frosted." },
        { src: "img/donuts.jpeg", title: "Image 2", description: "Donuts are fried or baked, sweet, round pastries, typically coated in sugar or glaze and sometimes filled with jam, cream, or chocolate." },
        { src: "img/bagel.jpeg", title: "Image 2", description: "A bagel is a dense, chewy, ring-shaped bread, traditionally boiled before baking, often topped with seeds like sesame or poppy." },
        { src: "img/cupcake.jpeg", title: "Image 2", description: "A cupcake is a small, individual-sized cake, typically frosted and decorated, made from a sweet batter baked in a paper liner." },
        { src: "img/toast.jpeg", title: "Image 2", description: "Toast is a slice of bread that has been browned and crisped by heat, often served with butter or toppings" },
        { src: "img/baguettes.jpeg", title: "Image 2", description: "A baguette is a long, narrow loaf of French bread with a crisp golden-brown crust and a soft, airy interior." },
        { src: "img/creamy roll.jpeg", title: "Image 2", description: "A creamy roll is a soft, sweet pastry filled with rich, smooth cream or custard, often topped with icing or powdered sugar" },
        
    ];

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.title;

        imgElement.addEventListener("click", function() {
            displayImageDetails(image);
        });

        galleryContainer.appendChild(imgElement);
    });

    function displayImageDetails(image) {
        // Create the modal overlay
        const modalOverlay = document.createElement("div");
        modalOverlay.classList.add("modal-overlay");

        // Create modal content
        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");

        const closeButton = document.createElement("button");
        closeButton.classList.add("close-button");
        closeButton.innerHTML = "&times;";
        closeButton.addEventListener("click", () => {
            modalOverlay.style.display = "none";
            document.body.removeChild(modalOverlay);
        });

        // Populate modal content
        const modalImage = document.createElement("img");
        modalImage.src = image.src;
        modalImage.alt = image.title;

        const modalTitle = document.createElement("h2");
        modalTitle.classList.add("modal-title");
        modalTitle.textContent = image.title;

        const modalDescription = document.createElement("p");
        modalDescription.classList.add("modal-description");
        modalDescription.textContent = image.description;

        // Append elements
        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalImage);
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalDescription);
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);

        // Display modal
        modalOverlay.style.display = "flex";
    }
});