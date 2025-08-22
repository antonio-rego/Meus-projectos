const itemInput = document.getElementById("item-input");
    const quantityInput = document.getElementById("quantity-input")
    const addBtn = document.getElementById("add-btn");
    const shoppingList = document.getElementById("shopping-list");

    let items = JSON.parse(localStorage.getItem("items")) || [];

    function renderList() {
      shoppingList.innerHTML = "";
      items.forEach(item => {
        const newElement = document.createElement("li");
        newElement.classList.add("list-item");
        newElement.textContent = item
        shoppingList.appendChild(newElement);
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove"
        removeBtn.classList.add("remove-btn");
        newElement.appendChild(removeBtn);

      removeBtn.addEventListener("click", () => {
        items = items.filter(i => i !== item);
        saveList();
        renderList();
      })
      })
    }

    function saveList() {
      localStorage.setItem("items", JSON.stringify(items))
    }

    addBtn.addEventListener("click", () => {
      const itemName = itemInput.value.trim();
      const itemQuantity = quantityInput.value;
      const newItem = `${itemQuantity} ${itemName}`;
      if (itemName === "") {
        alert("Please add an item");
        return;
      }

      if (itemQuantity <= 0) {
        alert("Your quantity is invalid");
        return;
      }

      if (itemQuantity === "") {
        alert("Please add a quantity");
        return;
      }

      if (items.some(item => item.split(" ").slice(1).join(" ") === itemName)) {
        alert("You already have that item in the cart. Please remove it and add new desired quantity");
        return;
      }

      items.push(newItem);
      saveList();
      renderList();

      itemInput.value = "";
      quantityInput.value = "";

    })

    renderList()