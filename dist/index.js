"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getUsername = document.querySelector('#user');
const formSubmit = document.querySelector('#form');
const main_container = document.querySelector('.main_container');
function myCustomFetcher(url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const resposne = yield fetch(url, options);
        if (!resposne.ok) {
            throw new Error(`Network was not ok - status: ${resposne.status}`);
        }
        const data = yield resposne.json();
        console.log(data);
        return data;
    });
}
const showResult = (singleUser) => {
    const { avatar_url, login } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `<div className="card"> <img src={avatar_url} alt={login}></div>`);
};
function fetchUserData(url) {
    myCustomFetcher(url, {}).then(userInfo => {
        for (const singleUser of userInfo) {
            showResult(singleUser);
            console.log('login' + singleUser.login);
        }
    });
}
fetchUserData('https://api/github.com/users');
formSubmit.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const searchData = getUsername.value.toLowerCase();
    try {
        const url = "https://api/github.com/users";
        const allUserData = yield myCustomFetcher(url, {});
        const matchingUsers = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchData);
        });
        main_container.innerHTML = "";
        if (matchingUsers.length === 0) {
            main_container === null || main_container === void 0 ? void 0 : main_container.insertAdjacentHTML("beforeend", `<p class="empty-msg">No matching users found.</p>`);
        }
        else {
            for (const singleUser of matchingUsers) {
                showResult(singleUser);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}));
