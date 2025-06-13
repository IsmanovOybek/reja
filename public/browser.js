

console.log("fronted js ishga tushdi");

// const { response } = require("./app");



function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                    <span class="item-text">
                        ${item.reja}
                    </span>
                    <div>
                        <button data-id="${item._id}"
                            class="edit-me btn btn-secondary btn-sm mr-1">o'zgartirish</button>
                        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">o'chirish</button>
                    </div>
                </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    axios
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
            createField.value = "";
            createField.focus();
        })
        .catch((err) => {
            console.log("qayta harakat qilamiz");

        });

});


document.addEventListener("click", function (e) {
    //delete qism
    console.log(e.target);
    if (e.target.classList.contains("delete-me")) {
        // alert("siz delete tugmasini bosdiz")
        if (confirm("aniqa?")) {
            axios
                .post("/delete-item", { id: e.target.getAttribute("data-id") })
                .then((respose) => {
                    console.log(respose.data);
                    e.target.parentElement.parentElement.remove();

                })
                .catch((err) => {
                    console.log("qayta harakat qilamiz");

                });
        }
    }

    //edit oper
    if (e.target.classList.contains("edit-me")) {
        let userinput = prompt(
            "please make changes",
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
        );
        if (userinput) {
            axios
                .post("/edit-item", {
                    id: e.target.getAttribute("data-id"),
                    new_input: userinput,
                })
                .then(response => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.querySelector(
                        ".item-text"
                    ).innerHTML = userinput;

                }).catch(err => {
                    console.log("please make changes");

                })

        }
    }

})



//hammasini ucriw
document.getElementById("clean-all").addEventListener("click", function () {
    axios.post("/delete-all", { delete_all: true }).then((response) => {
        alert(response.data.state);
        document.location.reload();
    })
})