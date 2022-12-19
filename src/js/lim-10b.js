const account = {
  account: [
    {
      id: "19258630",
      nickname: "-",
    },
    {
      id: "181663692",
      nickname: "-",
    },
    {
      id: "265552826",
      nickname: "-",
    },
    {
      id: "143533349",
      nickname: "-",
    },
    {
      id: "283462706",
      nickname: "-",
    },
    {
      id: "178117533",
      nickname: "-",
    },
    {
      id: "115116755",
      nickname: "-",
    },
{
      id: "180606995",
      nickname: "-",
    },
   {
      id: "140055696",
      nickname: "-",
    },
{
      id: "139419367",
      nickname: "-",
    },
   {
      id: "NOVEMBER",
      nickname: "-",
    },
    {
      id: "416069768",
      nickname: "-",
    },
    {
      id: "283469701",
      nickname: "-",
    },
    {
      id: "234811412",
      nickname: "-",
    },
    {
      id: "43704117",
      nickname: "-",
    },
    {
      id: "412648892",
      nickname: "-",
    },
    {
      id: "180608868",
      nickname: "-",
    },
    {
      id: "385859719",
      nickname: "-",
    },
    {
      id: "314907244",
      nickname: "-",
    },   
    {
      id: "413298673",
      nickname: "-",
    },
    {
      id: "342934328",
      nickname: "-",
    },
    {
      id: "181660132",
      nickname: "-",
    },
    {
      id: "422242626",
      nickname: "-",
    },
   { 
      id: "429968195",
      nickname: "-",
    },
    {
      id: "357244066",
      nickname: "-",
    },
    {
      id: "140095935",
      nickname: "-",
    },
    {
      id: "338897652",
      nickname: "-",
    },
   {
      id: "181663037",
      nickname: "-",
    },
   {
      id: "37B",
      nickname: "-",
    },
   {
      id: "DESEMBER",
      nickname: "-",
    },
    {
      id: "389034443",
      nickname: "-",
    },
    {
      id: "233522154",
      nickname: "-",
    },
    {
      id: "138572787",
      nickname: "-",
    },
    {
      id: "367873447",
      nickname: "-", 
     },
    {
      id: "233186173",
      nickname: "-",
    },
    {
      id: "180594667",
      nickname: "-",
    },
   {
      id: "282446274",
      nickname: "-",
    },
    {
      id: "229471804",
      nickname: "-",
    },
    {
      id: "315707033",
      nickname: "-",
    },
    {
      id: "241349809",
      nickname: "-",
    },
    {
      id: "125573588",
      nickname: "-",
    },
    {
      id: "333389198",
      nickname: "-",
    },
    {
      id: "108049402",
      nickname: "-",
    },
    {
      id: "223004332",
      nickname: "-",
    },
    {
      id: "282441043",
      nickname: "-",
    },

   {
      id: "40B",
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
