function main() {
  document.querySelector("#add").onclick = () =>
    fetch("/api/todo-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: "New Item" }),
    }).then(() => location.reload());

  document.querySelector("#remove").onclick = () => {
    fetch("/api/todo-items/0", { method: "delete" }).then(() =>
      location.reload()
    );
  };
}

main();
