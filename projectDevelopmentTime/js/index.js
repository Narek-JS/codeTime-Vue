const container = document.querySelector('.products');
const submitBtnAddNewList = document.querySelector('.add-new-product-list__wrapper-block__submit__btn');
const blockAddNewProductKist = document.querySelector('.add-new-product-list');

const allGeoForUser = {
    Россия: 'RU',
    Белоруссия: "BY",
    Армения: 'AM',
    США: "США"
};
const allInputValuesForNewList = {
    uploadImgInputValue: '',
    productNameInputValue: '',
    productPriceInputValue: '',
    category: '',
    geo: ''
}
let products = [
    {
        id: "1",
        productImgType: {
            imgPath: './assets/images/productImg1.jpg',
            type: "Уход за телом"
        },
        type: "date structure",
        productName: {
            name : "AlcoTaboo",
            price: "149 p."
        },
        geo: "BY",
        date: "Сегодня 13:18",
        status: {
            download: {
                icon: "icon-download"
            },
            delete: {
                icon: "icon-delete"
            },
            check: false
        }
    },
    {
        id: "2",
        productImgType: {
            imgPath: './assets/images/productImg1.jpg',
            type: "Уход за телом"
        },
        type: "designer",
        productName: {
            name : "AlcoTaboo",
            price: "149 p."
        },
        geo: "RU",
        date: "Сегодня 13:18",
        status: {
            download: {
                icon: "icon-download"
            },
            delete: {
                icon: "icon-delete"
            },
            check: false
        }
    },
    {
        id: "3",
        productImgType: {
            imgPath: './assets/images/productImg1.jpg',
            type: "Уход за телом"
        },
        type: "back end",
        productName: {
            name : "AlcoTaboo",
            price: "149 p."
        },
        geo: "RU",
        date: "Сегодня 13:18",
        status: {
            download: {
                icon: "icon-download"
            },
            delete: {
                icon: "icon-delete"
            },
            check: false
        }
    },
    {
        id: "4",
        productImgType: {
            imgPath: './assets/images/productImg1.jpg',
            type: "Уход за телом"
        },
        type: "back end",
        productName: {
            name : "AlcoTaboo",
            price: "149 p."
        },
        geo: "AM",
        date: "Сегодня 13:18",
        status: {
            download: {
                icon: "icon-download"
            },
            delete: {
                icon: "icon-delete"
            },
            check: false
        }
    },
    {
        id: "5",
        productImgType: {
            imgPath: './assets/images/productImg1.jpg',
            type: "Уход за телом"
        },
        type: "front end",
        productName: {
            name : "AlcoTaboo",
            price: "149 p."
        },
        geo: "AM",
        date: "Сегодня 13:18",
        status: {
            download: {
                icon: "icon-download"
            },
            delete: {
                icon: "icon-delete"
            },
            check: false
        }
    },
    {
        id: "6",
        productImgType: {
            imgPath: './assets/images/productImg1.jpg',
            type: "Уход за телом"
        },
        type: "UI/UX",
        productName: {
            name : "AlcoTaboo",
            price: "149 p."
        },
        geo: "AM",
        date: "Сегодня 13:18",
        status: {
            download: {
                icon: "icon-download"
            },
            delete: {
                icon: "icon-delete"
            },
            check: false
        }
    }
]; 
let finitialProduct = JSON.parse(JSON.stringify(products));
let template = `
    <div class="products__list">
        <div class="products__list__opened-all-Item">
            <img class="products__list__opened-all-Item__icon" alt="icon opened all Item" src="./assets/svg/arrow-to-down.svg" />
        </div>

        <div class="mobile-list products__list__mobile-items">
            <p class="mobile-list__closed-popUp">X</p>
            <div class="mobile-list__type-wrapper">
                <p class="mobile-list__type-wrapper__lable">Категория - </p>
                <p class="mobile-list__type-wrapper__type"> ---TYPE--- </p>
            </div>
            <div class="mobile-list__product-name"> 
                <p class="mobile-list__product-name__lable">Офферы - </p>
                <p class="mobile-list__product-name__wrapper">
                    <span class="mobile-list__product-name__wrapper__name"> ---PRODUCT-NAME-NAME--- </span>
                    <span class="mobile-list__product-name__wrapper__price"> ---PRODUCT-NAME-PRICE--- </span>
                </p>
            </div>
            <div class="mobile-list__geo"> 
                <p class="mobile-list__geo__lable">Гео - </p>
                <p class="mobile-list__geo__text"> ---GEO--- </p> 
            </div>
            <div class="mobile-list__date"> 
                <p class="mobile-list__date__lable"> Дата - </p>
                <p class="mobile-list__date__text"> ---DATE--- </p>
            </div>
            <div class="mobile-list__status"> 
                <p class="mobile-list__status__lable">Статус - </p>
                <div class="mobile-list__status__wrapper-icon">
                    <img class="mobile-list__status__wrapper-icon__download" src="./assets/svg/download-icon.svg"/>
                    <img class="mobile-list__status__wrapper-icon__delete" src="./assets/svg/delete.svg"/>
                    <button class="mobile-list__status__wrapper-icon__check" type="button"></button>
                </div>
            </div>
        </div>

        <p class="products__list__id products__list-1"> ---ID---</p>

        <div class="products__list__product-img-type products__list-2">
            <img class="products__list__product-img-type__image" src="---PATH-PRODUCT-IMG---"/>
            <span class="products__list__product-img-type__text"> ---PRODUCT-IMG-TYPE--- </span>
        </div>

        <p class="products__list__type products__list-3"> ---TYPE--- </p>

        <p class="products__list__product-name products__list-4">
            <span class="products__list__product-name__name"> ---PRODUCT-NAME-NAME--- </span>
            <span class="products__list__product-name__price"> ---PRODUCT-NAME-PRICE--- </span>
        </p>

        <p class="products__list__geo products__list-5"> ---GEO--- </p>

        <p class="products__list__date products__list-6"> ---DATE--- </p>

        <div class="products__list__status products__list-7">
            <img class="products__list__status__download" src="./assets/svg/download-icon.svg"/>
            <img class="products__list__status__delete" src="./assets/svg/delete.svg" />
            <button class="products__list__status__check" type="button"></button>
        </div>
    </div>
`;

function listenMouseOnInProductList () {
    const allProductLists = document.querySelectorAll('.products__list');

    allProductLists.forEach((list) => {
        const mobileList = list.querySelector('.mobile-list');
        const mobileListClosedPopUp = list.querySelector('.mobile-list__closed-popUp');
        const iconOpenedAllItems = list.querySelector('.products__list__opened-all-Item');

        iconOpenedAllItems.addEventListener('click', () => {
            allProductLists.forEach((list) => {
                list.querySelector('.mobile-list').style.display = 'none';
                list.querySelector('.products__list__opened-all-Item').style.display = 'block';
            });
            iconOpenedAllItems.style.display = 'none';
            mobileList.style.display = "block";
        });
       

        mobileListClosedPopUp.addEventListener('click', () => {
            iconOpenedAllItems.style.display = 'block';
            mobileList.style.display = 'none';
        });
    });
};

function deleteProductItem () {
    const allProductLists = document.querySelectorAll('.products__list');
    
    allProductLists.forEach((productList, index) => {
        const removeListIcon = productList.querySelector('.products__list__status__delete');
        const productId = productList.querySelector('.products__list__id').innerHTML.trim();

        removeListIcon.addEventListener('click', () => {
            finitialProduct = finitialProduct.filter((product) => product.id !== productId);
            products = products.filter((product) => product.id !== productId);
            renderProducts(finitialProduct);
        });
    });
};

function deleteProductItemChecked () {
    const removeAllCheckedBtn = document.querySelector('.products__layout-slice__delete-all-checked');
    removeAllCheckedBtn.addEventListener('click', () => {
        const popUpPage = document.querySelector('.checked-items-popup-100vh');
        const closePopUpPage = popUpPage.querySelector('.checked-items-popup__closed-popup');
        const yesBtn = popUpPage.querySelector('.checked-items-popup__wrapper-btns__yes');
        const noBtn = popUpPage.querySelector('.checked-items-popup__wrapper-btns__no');
        const middleWrapperPopup = popUpPage.querySelector('.checked-items-popup');

        popUpPage.classList.add('checked-items-popup-100vh--active');
        middleWrapperPopup.classList.add('checked-items-popup--active');

        closePopUpPage.addEventListener('click', () => {
            popUpPage.classList.remove('checked-items-popup-100vh--active');
            middleWrapperPopup.classList.remove('checked-items-popup--active'); 
        });
        noBtn.addEventListener('click', () => {
            popUpPage.classList.remove('checked-items-popup-100vh--active');    
            middleWrapperPopup.classList.remove('checked-items-popup--active');
        });

        yesBtn.addEventListener('click', () => {
            popUpPage.classList.remove('checked-items-popup-100vh--active');  
            middleWrapperPopup.classList.remove('checked-items-popup--active');
            
            finitialProduct = finitialProduct.filter((productList) => !productList.status.check);
            products = JSON.parse(JSON.stringify(finitialProduct));
            renderProducts(finitialProduct);
        });
    });
};

function addProductList () {
    const iconOpenedPopupAddList = document.querySelector('.products__layout-slice__add-new-list');
    
    iconOpenedPopupAddList.addEventListener('click', () => {
        const addNewProductListBlock = document.querySelector('.add-new-product-list');
        const addNewProductListBlockWrapper = addNewProductListBlock.querySelector('.add-new-product-list__wrapper-block');

        addNewProductListBlock.classList.add('add-new-product-list--active');
        addNewProductListBlockWrapper.classList.add('add-new-product-list__wrapper-block--active');
    });
};

function checkListStatus () {
    const allProductLists = document.querySelectorAll('.products__list');

    allProductLists.forEach((productList) => {
        const checkedBtn = productList.querySelector('.products__list__status__check');
        const productId = productList.querySelector('.products__list__id').innerHTML.trim();

        checkedBtn.addEventListener("click", () => {
            if(checkedBtn.classList.contains('products__list__status__check--active')) {
                finitialProduct.forEach((productItem) => {
                    if(productItem.id === productId){ 
                        productItem.status.check = false
                    }
                });
                checkedBtn.classList.remove('products__list__status__check--active')
            } else {
                finitialProduct.forEach((productItem) => {
                    if(productItem.id === productId){ 
                        productItem.status.check = true
                    }
                });
                checkedBtn.classList.add('products__list__status__check--active');
            }; 
        });
    });
};

function checkBuutonDisabletInAddNewList () {
    const {
        uploadImgInputValue,
        productNameInputValue,
        productPriceInputValue,
        category,
        geo
    } = allInputValuesForNewList;

    if(uploadImgInputValue && productNameInputValue && productPriceInputValue && category && geo ) {
        submitBtnAddNewList.disabled = false;
        return;
    };
    submitBtnAddNewList.disabled = true;
};

(function listenAllEventsForAddNewList () {
    const uploadImgInput = document.querySelector('.add-new-product-list__wrapper-block__productImg__input');
    const productNameInput = document.querySelector('.add-new-product-list__wrapper-block__product-name__input');
    const productPriceInput = document.querySelector('.add-new-product-list__wrapper-block__product-price__input');
    const selectCotigory = document.querySelector('.add-new-product-list__wrapper-block__cotigory__select');
    const selectGeo = document.querySelector('.add-new-product-list__wrapper-block__geo__select');

    uploadImgInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if(file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function() {
                allInputValuesForNewList.uploadImgInputValue = reader.result; 
                checkBuutonDisabletInAddNewList();
            }; 
        };
    });
    productNameInput.addEventListener('input', (event) => {
        const { value } = productNameInput;
        allInputValuesForNewList.productNameInputValue = value;
        checkBuutonDisabletInAddNewList();

    });
    productPriceInput.addEventListener('input', (event) => {
        const { value } = productPriceInput;
        allInputValuesForNewList.productPriceInputValue = value;
        checkBuutonDisabletInAddNewList();
    });
    selectCotigory.addEventListener('change', (event) => {
        const { target: {value} } = event;
        allInputValuesForNewList.category = value;
        checkBuutonDisabletInAddNewList();
    });
    selectGeo.addEventListener('change', (event) => {
        const { target: {value} } = event;
        allInputValuesForNewList.geo = value;
        checkBuutonDisabletInAddNewList();
    });

    submitBtnAddNewList.addEventListener('click', () => {
        if(!submitBtnAddNewList.disabled) {
            const {
                uploadImgInputValue,
                productNameInputValue,
                productPriceInputValue,
                category,
                geo
            } = allInputValuesForNewList;

            const newProduct = {
                id: Math.random(),
                productImgType: {
                    imgPath: uploadImgInputValue,
                    type: productNameInputValue
                },
                type: category,
                productName: {
                    name : productNameInputValue,
                    price: productPriceInputValue
                },
                geo: allGeoForUser[geo],
                date: "Сегодня 13:18",
                status: {
                    download: {
                        icon: "icon-download"
                    },
                    delete: {
                        icon: "icon-delete"
                    },
                    check: false
                }
            };
            submitBtnAddNewList.disabled = true;
            blockAddNewProductKist.classList.remove('add-new-product-list--active');
            finitialProduct.push(newProduct);
            products.push(newProduct);
            renderProducts(finitialProduct);
        };
    });
})();

(function productFiltation () {
    const searchInput = document.querySelector('[type="search"]');
    let searchCountry = document.querySelector('.search__input-right-content__select-country');
    let searchCategory = document.querySelector('.search__input-right-content__select-category');

    if(window.innerWidth <= 768) {
        searchCountry = document.querySelector('.search__selects__country-wrapper__country');
        searchCategory = document.querySelector('.search__selects__category-wrapper__category');
    };
    
    const filteredValues = {
        searchText: "",
        geoText: "",
        categoryText: ""
    };

    let timeoutId = null;
    
    function allFilterationSistem () {
        let filteredProducts = JSON.parse(JSON.stringify(products));

        if(filteredValues.searchText){
            filteredProducts = filteredProducts.filter((product) => {
                return product.id.includes(filteredValues.searchText.toLowerCase())           || 
                product.id.includes(filteredValues.searchText.toUpperCase())                  ||
                product.geo.includes(filteredValues.searchText.toLowerCase())                 ||
                product.geo.includes(filteredValues.searchText.toUpperCase())                 ||
                product.type.includes(filteredValues.searchText.toLowerCase())                || 
                product.type.includes(filteredValues.searchText.toUpperCase())                ||
                product.date.includes(filteredValues.searchText.toLowerCase())                || 
                product.date.includes(filteredValues.searchText.toUpperCase())                ||
                product.productName.name.includes(filteredValues.searchText.toLowerCase())    || 
                product.productName.name.includes(filteredValues.searchText.toUpperCase())    ||
                product.productName.price.includes(filteredValues.searchText.toLowerCase())   || 
                product.productName.price.includes(filteredValues.searchText.toUpperCase())   ||
                product.productImgType.type.includes(filteredValues.searchText.toLowerCase()) || 
                product.productImgType.type.includes(filteredValues.searchText.toUpperCase());
            });
        };
        if(filteredValues.geoText) {
            filteredProducts = filteredProducts.filter((product) => product.geo === allGeoForUser[filteredValues.geoText]);
        };
        if(filteredValues.categoryText) {
            filteredProducts = filteredProducts.filter((product) => product.type === filteredValues.categoryText); 
        };
        finitialProduct = filteredProducts; 
        renderProducts(filteredProducts);
    };
    
    searchCountry.addEventListener('change', (event) => {
        const { target: {value} } = event;
        filteredValues.geoText = value === 'all' ? '' : value;
        allFilterationSistem()
    }); 
    searchCategory.addEventListener('change', (event) => {
        const { target: {value} } = event;
        filteredValues.categoryText = value === 'all' ? '' : value;
        allFilterationSistem()
    }); 
    searchInput.addEventListener('input', () => { 
        filteredValues.searchText = searchInput.value;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(allFilterationSistem, 300);
    });
})();


function renderProducts (products) { 
    const allProductLists = document.querySelectorAll('.products__list');
    allProductLists.forEach((oldProductList) => oldProductList.remove());

    products.forEach(product => {
        let finitialTemplate = template 
            .replaceAll('---ID---', product.id)
            .replaceAll('---PATH-PRODUCT-IMG---', product.productImgType.imgPath)
            .replaceAll('---PRODUCT-IMG-TYPE---', product.productImgType.type)
            .replaceAll('---TYPE---', product.type)
            .replaceAll('---PRODUCT-NAME-NAME---', product.productName.name)
            .replaceAll('---PRODUCT-NAME-PRICE---', product.productName.price)
            .replaceAll('---GEO---', product.geo)
            .replaceAll('---DATE---', product.date);

            container.insertAdjacentHTML('beforeend', finitialTemplate);
    });    
    listenMouseOnInProductList();
    deleteProductItem();
    checkListStatus();
    deleteProductItemChecked();
    addProductList();
};

renderProducts(products);




