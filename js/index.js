const extraData = [
    {
        "id": 1,
        "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
        },
        "name": "Waffle with Berries",
        "category": "Waffle",
        "price": 6.50
    },
    {
        "id": 2,
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
    },
    {
        "id": 3,
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
    },
    {
        "id": 4,
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
    },
    {
        "id": 5,
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
    },
    {
        "id": 6,
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
    },
    {
        "id": 7,
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
    },
    {
        "id": 8,
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
    },
    {
        "id": 9,
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
    }
];
let orderItems = [];

window.onload = async () => {
    setMenu();

    document.querySelector('#confirm-order').addEventListener('click', (e) => {
        const orderConfirmedDOM = document.querySelector('#order-confirmed');
        const confirmedListDOM = document.querySelector('#confirmed-list');

        orderConfirmedDOM.classList.remove('hidden');

        let confirmedListHTML = '';
        let totalPrice = 0;

        orderItems.map(orderItem => {
            confirmedListHTML += `<div class="confirmed-item">
                <img src="${orderItem.image.thumbnail}" alt="${orderItem.image.thumbnail}">
                    <div class="confirmed-item-detail">
                        <div>${orderItem.name}</div>
                        <span class="ordered-item-amount">${orderItem.amount}x</span>
                        <span class="ordered-item-unit-price">@ $${orderItem.price}</span>
                        <span class="ordered-items-price confirmed-items-price">$${orderItem.itemsPrice}</span>
                    </div>
            </div>`

            totalPrice += orderItem.itemsPrice;
        })

        confirmedListHTML += `<div class="confirmed-order">
            <span>Order Total</span>
            <strong id="confirmed-order-total">$${totalPrice}</strong>
        </div>`

        confirmedListDOM.innerHTML = confirmedListHTML
    })

    document.querySelector('#start-new-order').addEventListener('click', (e) => {
        const orderConfirmedDOM = document.querySelector('#order-confirmed');

        orderConfirmedDOM.classList.add('hidden');

        orderItems = [];

        freshCart(orderItems);

        setMenu(true);
    })
};

function setMenu(isReset = false) {
    const desserts = document.querySelector('#desserts');

    if (isReset) desserts.innerHTML = '';

    extraData.forEach(item => {
        const dessert = document.createElement('div')

        dessert.innerHTML = `
            <article class="item-card">
                <img src="${item.image.desktop}" alt="" />
                <span id="add-to-cart-id-${item.id}" data-item-id="${item.id}" class="add-to-cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
                    Add to Cart
                </span>
                <span class="dessert-category">${item.category}</span>
                <span id="dessert-calculation-id-${item.id}" class="dessert-calculation hidden">
                    <button class="decrement" data-item-id="${item.id}"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg></button>
                    <div id="item-${item.id}-ordered-amount">0</div>
                    <button class="increment" data-item-id="${item.id}"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg></button>
                </span>
                <span class="dessert-name">${item.name}</span>
                <span class="dessert-price">$${item.price}</span>
            </article>`

        desserts.appendChild(dessert);
    })

    document.querySelectorAll('.decrement').forEach(element => {
        element.addEventListener('click', (e) => {
            let clickItemId = parseInt(element.dataset.itemId);
            const clickedItem = document.querySelector(`#item-${clickItemId}-ordered-amount`);
            let originAmount = parseInt(clickedItem.innerHTML);
            let amount = Math.max(0, originAmount - 1)

            clickedItem.innerHTML = String(amount);

            let orderItem = orderItems.find(item => item.itemId === clickItemId)

            if (orderItem !== undefined) {
                if (amount === 0) {
                    orderItems = orderItems.filter(item => item.itemId !== clickItemId)
                    switchButtonStatus(orderItem, 'show-cart')
                } else {
                    orderItem.amount -= 1;
                    orderItem.itemsPrice -= orderItem.price
                }
            }

            freshCart(orderItems)
        })
    })

    document.querySelectorAll('.increment').forEach(element => increment(element))

    document.querySelectorAll('.add-to-cart').forEach(element => increment(element, true))
}

function increment(element, isNeedToSwitchStatus = false) {
    element.addEventListener('click', (e) => {
        let clickItemId = parseInt(element.dataset.itemId)
        const clickedItem = document.querySelector(`#item-${clickItemId}-ordered-amount`);
        let originAmount = parseInt(clickedItem.innerHTML);
        let amount = originAmount + 1;

        clickedItem.innerHTML = String(amount);

        let obj = extraData.find(item => item.id === clickItemId)
        let orderItem = orderItems.find(item => item.itemId === clickItemId)

        if (orderItem === undefined) {
            let orderedItem = {
                itemId: obj.id,
                name: obj.name,
                amount: amount,
                price: obj.price,
                itemsPrice: obj.price * amount,
                image: obj.image
            }

            orderItems.push(orderedItem)

            if (isNeedToSwitchStatus) switchButtonStatus(orderedItem, 'show-calculation');
        } else {
            orderItem.amount += 1;
            orderItem.itemsPrice += obj.price
        }

        freshCart(orderItems)
    })
}

function freshCart(orderItems) {
    const cartAmount = document.querySelector('#cart_area > h3 > span');
    const cartOrderedList = document.querySelector('#cart-ordered-list');
    const totalPriceDOM = document.querySelector('#total-price');
    const cartInform = document.querySelector('.cart-inform');

    const orderAmount = getOrderAmount(orderItems);

    let itemsHtml = '';
    let totalPrice = 0;

    if (orderAmount === 0) {
        cartAmount.innerHTML = '0';
        itemsHtml = `<section class="cart-empty">
          <img src="./assets/images/illustration-empty-cart.svg" alt="illustration-empty-cart.svg">
          <p>Your added items will appear here</p>
        </section>`

        cartInform.classList.add('hidden');
    } else {
        cartAmount.innerHTML = orderAmount;

        orderItems.map(orderItem => {
            itemsHtml += ` <article class="cart-ordered">
              <div class="ordered-item-name">${orderItem.name}</div>
              <span class="ordered-item-amount">${orderItem.amount}x</span>
              <span class="ordered-item-unit-price">@ $${orderItem.price}</span>
              <span class="ordered-items-price">$${orderItem.itemsPrice}</span>
              <div class="remove-ordered-item" data-item-id="${orderItem.itemId}">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
                </svg>
              </div>
            </article>`

            totalPrice += orderItem.itemsPrice;
        })

        cartInform.classList.remove('hidden');
    }

    cartOrderedList.innerHTML = itemsHtml;
    totalPriceDOM.innerHTML = `$${totalPrice}`;

    document.querySelectorAll('.remove-ordered-item').forEach(element => {
        element.addEventListener('click', (e) => {
            const clickedItem = document.querySelector(`#item-${element.dataset.itemId}-ordered-amount`);

            orderItems = orderItems.filter(item => item.itemId !== parseInt(element.dataset.itemId))
            clickedItem.innerHTML = '0';

            freshCart(orderItems)
        })
    })
}

function getOrderAmount(orderItems){
    return orderItems.reduce((acc, current) => acc + current.amount, 0)
}

function switchButtonStatus(orderItem, status) {
    const dessertCalculation = document.querySelector(`#dessert-calculation-id-${orderItem.itemId}`)
    const addToCart = document.querySelector(`#add-to-cart-id-${orderItem.itemId}`)

    switch (status) {
        case 'show-cart':
            dessertCalculation.classList.add('hidden');
            addToCart.classList.remove('hidden');

            break;
        case 'show-calculation':
            dessertCalculation.classList.remove('hidden');
            addToCart.classList.add('hidden');

            break;
    }
}