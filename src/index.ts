const getUsername = document.querySelector('#user') as HTMLInputElement;
const formSubmit = document.querySelector('#form') as HTMLInputElement;
const main_container = document.querySelector('.main_container') as HTMLInputElement;

interface UserData {
    id: number;
    login: string;
    avatar_url: string;
    location: string;
    url: string;
}

async function myCustomFetcher<T>(url: string, options?: RequestInit): Promise<T> {
    const resposne = await fetch(url, options)

    if (!resposne.ok) {
        throw new Error(`Network was not ok - status: ${resposne.status}`)
    }

    const data = await resposne.json();
    console.log(data);
    return data;
}

const showResult = (singleUser: UserData) => {
    const {avatar_url, login} = singleUser
    main_container.insertAdjacentHTML(
        "beforeend",
        `<div className="card"> <img src={avatar_url} alt={login}></div>`
    )
}

function fetchUserData(url: string) {
    myCustomFetcher<UserData[]>(url, {}).then(userInfo => {
        for (const singleUser of userInfo) {
            showResult(singleUser);
            console.log('login' + singleUser.login)
        }
    });
}


fetchUserData('https://api/github.com/users');


formSubmit.addEventListener('submit', async (e) => {
    e.preventDefault();

    const searchData = getUsername.value.toLowerCase();

    try {
        const url = "https://api/github.com/users";
        const allUserData = await myCustomFetcher<UserData[]>(url, {});

        const matchingUsers = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchData);
        })

        main_container.innerHTML = "";
        if (matchingUsers.length === 0) {
            main_container?.insertAdjacentHTML(
                "beforeend",
                `<p class="empty-msg">No matching users found.</p>`
            );
        } else {
            for (const singleUser of matchingUsers) {
                showResult(singleUser);
            }
        }
    } catch (error) {
        console.log(error);
    }
})
