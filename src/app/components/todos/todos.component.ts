import {Component, OnInit} from '@angular/core';
import {Todo} from "../../models/Todo";

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

	todos!: Todo[]

	inputTodo:string = ""

	constructor() {
	}

	ngOnInit(): void {
		this.todos = [
			{
				content: "First todo",
				completed: false
			},
			{
				content: "Write Vows",
				completed: false
			},
			{
				content: "Buy Shoes",
				completed: false
			},
		]
	}
	toggleDone(id:number){
		this.todos.map((todo,index) => {
			if ( index === id ) todo.completed = !todo.completed
			return index
		})
	}
	deleteTodo(id:number){
		this.todos = this.todos.filter((todo, index) => index !== id)
	}
	addTodo(){
		this.todos.push({
			content: this.inputTodo,
			completed: false
		})
		this.inputTodo = ''
	}

}
