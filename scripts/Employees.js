import { Orders } from "./Orders.js"
import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-id="${employee.id}" data-type="employee">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

const employeeOrders = (id) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === id) {
            fulfilledOrders ++// Increment the number of fulfilled orders
        }
    }

    return fulfilledOrders// Return how many orders were fulfilled
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "employee") {
            const employeeId = parseInt(itemClicked.dataset.id)

            for (const employee of employees) {
                if ( employee.id === employeeId) {

                    const orderCount = employeeOrders(employeeId)

                    window.alert(`${employee.name} sold ${orderCount} products`)
                }
            }
        }
    }
)