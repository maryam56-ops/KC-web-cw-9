// عرف المصفوفة هنا
let orders = [];


function addOrder() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let order = document.getElementById("order").value;
  let newOrder = { name , id , phone , order };
  orders.push(newOrder);
  load();

}

function load() {
  let container = document.getElementById("container");

  orders.forEach(
    (item) =>

    (container.innerHTML = `<div><h1>${item.name} - ${item.id}</h1><h3>${item.order}</h3></div>`)
    
  );
}


