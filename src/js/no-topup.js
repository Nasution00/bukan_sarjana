const account = {
  account: [

    {
      id: "363179082",
      nickname: "-",
    },
    {
      id: "363074735",
      nickname: "-",
    },
    {
      id: "359464880",
      nickname: "-",
    },
    {
      id: "356728564",
      nickname: "-",
    },
    {
      id: "316347367",
      nickname: "-",
    },
    {
      id: "338295944",
      nickname: "-",
    },
    {
      id: "336271215",
      nickname: "-",
    },
    {
      id: "338154380",
      nickname: "-",
    },
    {
      id: "338881427",
      nickname: "-",
    },
    {
      id: "338150017",
      nickname: "-",
    },
    {
      id: "345120180",
      nickname: "-",
    },
    {
      id: "343082073",
      nickname: "-",
    },
{
        id: "434518252",
        nickname: "-",
      },
{
      id: "430306192",
      nickname: "-",
    },
{
      id: "427151322",
      nickname: "-",
    },
{
        id: "429754069",
        nickname: "-",
      },
{
        id: "431600503",
        nickname: "-",
      },
{
      id: "431742935",
      nickname: "-",
    },
{
      id: "429743817",
      nickname: "-",
    },
{
      id: "429666188",
      nickname: "-",
    },
    {
      id: "419993345",
      nickname: "-",
    },
    {
      id: "421095508",
      nickname: "-",
    },
    {
      id: "422014333",
      nickname: "-",
    },
    {
      id: "421971222",
      nickname: "-",
    },
    {
      id: "419091024",
      nickname: "-",
    },
{
      id: "426217507",
      nickname: "-",
    },
    {
      id: "413450378",
      nickname: "-",
    },
    {
      id: "414989854",
      nickname: "-",
    },
    {
      id: "415067742",
      nickname: "-",
    },
    {
      id: "415876806",
      nickname: "-",
    },
    {
      id: "416861731",
      nickname: "-",
    },
    {
      id: "418189111",
      nickname: "-",
    },
    {
      id: "389065045",
      nickname: "-",
    },
    {
      id: "389079856",
      nickname: "-",
    },
    {
      id: "389143116",
      nickname: "-",
    },
    {
      id: "389720306",
      nickname: "-",
    },
    {
      id: "410937993",
      nickname: "-",
    },
    {
      id: "411740929",
      nickname: "-",
    },
    {
      id: "411833686",
      nickname: "-",
    },
    {
      id: "412326211",
      nickname: "-",
    },
    {
      id: "411491009",
      nickname: "-",
    },
    {
      id: "438899834",
      nickname: "-",
    },
    {
      id: "438899901",
      nickname: "-",
    },
    {
      id: "438900920",
      nickname: "-",
    },
    {
      id: "438903891",
      nickname: "-",
    },
    {
      id: "438909034",
      nickname: "-",
    },
    {
      id: "438910199",
      nickname: "-",
    },
    {
      id: "438911311",
      nickname: "-",
    },
    {
      id: "438911113",
      nickname: "-",
    },
    {
      id: "438911091",
      nickname: "-",
    },
    {
      id: "438913883",
      nickname: "-",
    },
    {
      id: "438913331",
      nickname: "-",
    },
    {
      id: "438914981",
      nickname: "-",
    },
    {
      id: "438915516",
      nickname: "-",
    },
    {
      id: "438915922",
      nickname: "-",
    },
    {
      id: "438916960",
      nickname: "-",
    },
    {
      id: "438917666",
      nickname: "-",
    },
    {
      id: "438919158",
      nickname: "-",
    },
    {
      id: "438919101",
      nickname: "-",
    },
    {
      id: "438943338",
      nickname: "-",
    },
    {
      id: "438944222",
      nickname: "-",
    },
    {
      id: "438944942",
      nickname: "-",
    },
    {
      id: "438944431",
      nickname: "-",
    },
    {
      id: "438943886",
      nickname: "-",
    },
    {
      id: "438949924",
      nickname: "-",
    },
    {
      id: "438949441",
      nickname: "-",
    },
    {
      id: "438949461",
      nickname: "-",
    },
    {
      id: "438918910",
      nickname: "-",
    },
    {
      id: "438911992",
      nickname: "-",
    },
    {
      id: "436969646",
      nickname: "-",
    },
    {
      id: "436966639",
      nickname: "-",
    },
    {
      id: "436966689",
      nickname: "-",
    },
    {
      id: "436965965",
      nickname: "-",
    },
    {
      id: "434919013",
      nickname: "-",
    },
    {
      id: "434589894",
      nickname: "-",
    },
    {
      id: "434606065",
      nickname: "-",
    },
    {
      id: "434909222",
      nickname: "-",
    },
    {
      id: "434910109",
      nickname: "-",
    },
    {
      id: "288285582",
      nickname: "-",
    },
    {
      id: "423808081",
      nickname: "-",
    },
    {
      id: "409939333",
      nickname: "-",
    },


  ],
};

const tableAccount = document.getElementById("table-account");

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

  const divNick = document.createElement("div");
  divNick.setAttribute("class", "flex items-center");

  const pNick = document.createElement("p");
  pNick.setAttribute("class", "text-sm leading-none text-gray-600 ml-2");

  pNick.innerHTML = i + 1;

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
  // col.innerHTML = nickname;
  row.appendChild(colNick);
  row.appendChild(colId);
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
