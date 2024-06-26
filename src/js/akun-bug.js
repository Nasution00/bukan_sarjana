const account = {
    account: [

        {
      id: "HP1",
      nickname: "-",
    },
    {
      id: "296392585",
      nickname: "-",
    },
    {
      id: "333395838",
      nickname: "-",
    },
    {
      id: "181659333",
      nickname: "-",
    },
    {
      id: "181662268",
      nickname: "-",
    },
    {
      id: "362820336",
      nickname: "-",
    },
    {
      id: "282446274",
      nickname: "-",
    },
    {
      id: "140410293",
      nickname: "-",
    },
    {
      id: "258855900",
      nickname: "-",
    },
    {
      id: "385869250",
      nickname: "-",
    },
    {
      id: "283466355",
      nickname: "-",
    },
    {
      id: "177543994",
      nickname: "-",
    },
    {
      id: "124744824",
      nickname: "-",
    },

 



    ],
};

const tableAccount = document.getElementById("table-account");
const totalAccount = document.getElementById("total-account");
totalAccount.innerHTML = account.account.length

for (let i = 0; i < account.account.length; i++) {
    const id = account.account[i].id;
    const nickname = account.account[i].nickname;

    const row = document.createElement("tr");
    const colCheck = document.createElement("td");
    const divContainerCheck = document.createElement("div");
    const divCheck = document.createElement("div");
    const check = document.createElement("input");

    const colId = document.createElement("td");
    const divId = document.createElement("div");
    const pId = document.createElement("p");

    const colNick = document.createElement("td");
    colNick.setAttribute("class", "");

    const colNumber = document.createElement("td");
    colNumber.setAttribute("class", "");


    const divNick = document.createElement("div");
    divNick.setAttribute("class", "flex items-center");

    const divNumber = document.createElement("div");
    divNumber.setAttribute("class", "flex items-center");

    const pNick = document.createElement("p");
    pNick.setAttribute("class", "text-sm leading-none text-gray-600 ml-2");

    const pNumber = document.createElement("p");
    pNumber.setAttribute("class", "text-sm leading-none text-gray-600 ml-2");

    pNumber.innerHTML = i + 1;

    divId.setAttribute("class", "flex items-center pl-5");
    pId.setAttribute("class", "text-base leading-none text-gray-700 mr-2");

    const colCopy = document.createElement("td");
    colCopy.setAttribute("class", "flex flex-row justify-end mr-2 py-2");

    const btnCopy = document.createElement("button");
    btnCopy.setAttribute(
        "class",
        "ml-auto focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
    );
    btnCopy.setAttribute("id", "btn-copy" + i);

    btnCopy.innerHTML = "Copy";

    colCopy.appendChild(btnCopy);

    pId.innerHTML = id;
    divId.appendChild(pId);
    colId.appendChild(divId);

    divNick.appendChild(pNick);
    colNick.appendChild(divNick);

    divNumber.appendChild(pNumber);
    colNumber.appendChild(divNumber);

    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "check" + i);
    check.setAttribute("name", "check" + i);
    check.setAttribute(
        "class",
        "focus:opacity-100 checkbox absolute cursor-pointer w-full h-full"
    );

    divContainerCheck.setAttribute("class", "ml-5");
    divCheck.setAttribute(
        "class",
        "bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative"
    );

    divCheck.appendChild(check);
    divContainerCheck.appendChild(divCheck);

    row.setAttribute("tabindex", i);
    row.setAttribute("id", "row" + i);
    row.setAttribute("class", "focus:outline-none rounded");
    colCheck.appendChild(divContainerCheck);
    colNick.innerHTML = nickname;

    row.appendChild(colNumber);
    row.appendChild(colId)
    row.appendChild(colNick);

    row.appendChild(colCheck);
    row.appendChild(colCopy);
    tableAccount.appendChild(row);

    const isChecked = document.getElementById("check" + i);

    btnCopy.addEventListener("click", () => {
        navigator.clipboard.writeText(id);
        isChecked.checked = true;
        document.getElementById("row" + i).classList.add("bg-indigo-200");
    });

    isChecked.addEventListener("change", () => {
        document.getElementById("row" + i).classList.remove("bg-indigo-200");
    });
}
