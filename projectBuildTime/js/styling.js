const PATH_TO_USER_IMAGES = {
    HEADER: 'header__content__user-img',
    HEADER_WEBP: 'header__continer__content picture source',
    POP_UP: 'pop-up__user__img',
    POP_UP_WEBP: 'pop-up__user picture source',
    PROFILE: 'profile__block__user .user__img',
    PROFILE_WEBP: 'profile__block__user picture source'
};
class CreateImg {
    constructor() {
        this.img = document.createElement('img');
    };
    changeClassNameAndSrc(src, ...classes) {
        this.img.setAttribute('src', src)
        classes.forEach(classSlice => this.img.classList.add(classSlice))

    };
};

const listenProfileBlock = () => {
    const profileBlock = document.querySelector('.profile');
    const closedProfileBlockBtn = document.querySelector('.closed-window-profile');

    profileBlock.classList.add('profile--active');

    closedProfileBlockBtn.addEventListener('click', () => {
        profileBlock.classList.remove('profile--active');
    });
};

const openPopupWindow = (userImg) => {
    const popup = document.querySelector('.header__content__pop-up');
    const popupProfileItem = popup.querySelector('.pop-up__lists__list-profile');
    const mouseCurentDir = {
        popup: false,
        userImg: false
    };

    popup.classList.add('pop-up--active');

    let timeoutClosedPopoupFunc = null;

    const closedPopoupFunc = () => {
        timeoutClosedPopoupFunc = setTimeout(() => {
            popup.classList.remove('pop-up--active');
        }, 2500);
    };

    popup.addEventListener('mouseleave', () => {
        mouseCurentDir.popup = false;
        if (!mouseCurentDir.userImg) {
            closedPopoupFunc()
        };
    });
    popup.addEventListener('mouseenter', () => {
        mouseCurentDir.popup = true;
        clearInterval(timeoutClosedPopoupFunc);
    });
    userImg.addEventListener('mouseleave', () => {
        mouseCurentDir.userImg = false
        if (!mouseCurentDir.popup) {
            closedPopoupFunc()
        };
    });
    userImg.addEventListener('mouseenter', () => {
        mouseCurentDir.userImg = true;
        clearInterval(timeoutClosedPopoupFunc);
    });

    document.querySelector("html").addEventListener("click", () => {
        if (!mouseCurentDir.popup && !mouseCurentDir.userImg) {
            popup.classList.remove('pop-up--active');
        };
    });

    popupProfileItem.addEventListener('click', () => {
        popup.classList.remove('pop-up--active');
        listenProfileBlock();
    });
};


function listenMouseOnUserImg(newUserImg) {
    const userImg = newUserImg || document.querySelector('.header__content__user-img');

    userImg.addEventListener('mousemove', () => openPopupWindow(userImg));
};
listenMouseOnUserImg();

(function listenMobileManue() {
    const checkBoxInput = document.querySelector('.nav__checkbox');
    const navListsMobile = document.querySelector('.nav__lists');
    const closedBtn = document.querySelector('.nav__button');

    let inputChecked = false;

    checkBoxInput.addEventListener('change', (e) => {
        if (inputChecked) {
            navListsMobile.classList.remove('nav__lists--active');
            closedBtn.classList.remove('nav__button--active');
        } else {
            navListsMobile.classList.add('nav__lists--active');
            closedBtn.classList.add('nav__button--active');
        };
        inputChecked = !inputChecked;
    });
})();

(function listenFileInput() {
    const inputFile = document.querySelector('.user__input-file');

    inputFile.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener('load', function(event) {
                const header = document.querySelector('.header__continer__content');
                try {
                    header.querySelector('picture').remove();
                } catch (error) {
                    header.querySelector('.user-img').remove();
                }
                const imgHeader = document.createElement('img');
                imgHeader.classList.add('header__content__user-img');
                imgHeader.classList.add('user-img');
                imgHeader.alt = 'user';
                imgHeader.setAttribute('src', event.target.result);
                header.appendChild(imgHeader)
                listenMouseOnUserImg(imgHeader);

                const popUp = document.querySelector('.pop-up__user');
                try {
                    popUp.querySelector('picture').remove();
                } catch (error) {
                    popUp.querySelector('.user-img').remove();
                }
                const popUpImg = document.createElement('img');
                popUpImg.classList.add('pop-up__user__img');
                popUpImg.classList.add('user-img');
                popUpImg.alt = 'user';
                popUpImg.setAttribute('src', event.target.result);
                popUp.insertAdjacentElement("afterbegin", popUpImg);

                const userProfile = document.querySelector('.profile__block__user');
                try {
                    userProfile.querySelector('picture').remove();
                } catch (error) {
                    userProfile.querySelector('.user-img').remove();
                }
                const userProfileImg = document.createElement('img');
                userProfileImg.classList.add('user__img');
                userProfileImg.classList.add('user-img')
                userProfileImg.alt = 'user';
                userProfileImg.setAttribute('src', event.target.result);
                userProfile.insertAdjacentElement("afterbegin", userProfileImg);

                localStorage.setItem('userImg', event.target.result);
            });
            reader.readAsDataURL(file);
        };
    });
})();

(function checkUserImgInStorage() {
    const currentUserImg = localStorage.getItem('userImg');
    const allUserImg = Object.values(PATH_TO_USER_IMAGES).filter((className) => {
        try {
            if (document.querySelector("." + className)) {
                return className;
            };
        } catch (error) {
            console.log('dont found that element in dom __ CLASSNAME=' + className);
        }
    }).map((className) => document.querySelector("." + className));

    if (currentUserImg) {
        allUserImg.forEach((img) => {
            if (img.localName === 'source') {
                return img.setAttribute('srcset', currentUserImg)
            }
            img.setAttribute('src', currentUserImg);
        });
    };
})();