export default class TodoItem {
    constructor(id, title, description, dueDate){
        this.id = id
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.isDone = false
    }
}